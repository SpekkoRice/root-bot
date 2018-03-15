import * as Router from "koa-router";
import {SlackService} from "../services/slack";
import * as _ from "lodash";
import {SlackEventPayload} from "../models/slack-event-payload";

/*
 * This array helps us keep track of event_id's
 *  Slack sometimes sends the same events for each device listening to the channel
 *  this array helps us to NOT fire an event when the event_id is present
 *
 * NOTE: You might still get spammed every now and then, slack is sometimes delayed,
 *  and when your application restarts it loses the tokens array, so you'll get the old messages again
 *  if you want this array to be persistent i'd recommend using something like REDIS to keep track of them
 */
let tokens = [];

/*
 * Since the tokens are added for each event, we flush them after 4min
 */
let flushTokens = _.debounce(() => {console.log('FLUSHING TOKENS'); tokens = [];}, 240000);

export let router = new Router();

router.get("/", async (ctx:any, next:any) => { ctx.body = "HELLO WORLD!" });

/*
 * This is a convenience URL for Slack to post to when events that your app listens to fires
 *  You should add this URL to your slack "Request URL"
 */
router.post("/slack-event-listener", async (ctx:any, next:any) => {
  /*
   * If we receive no requests for 4minutes we flush the tokens
   *  If we don't store the tokens, we get duplicate payloads from slack (it sends a payload for each listening device)
   */
  flushTokens();

  /*
   * Slack will try and auth on this event listener URL (When you're setting up your slack application)
   *  This has been added for convenience
   */
  if(ctx.request.body.hasOwnProperty('challenge')) {
    ctx.body = {challenge: ctx.request.body.challenge};
    return;
  }

  /*
   * We need to check if the token is still in the array
   *  If it is we ignore the payload completely
   */
  let token = ctx.request.body.event_id;
  let index = _.findIndex(tokens, (i) => {return i == token;});
  tokens.push(token);

  /*
   * We need to also check if the payload is coming from a bot causing the event to fire.
   * If a bot responds to a user we don't want to listen to fire an event
   */
  if(index > -1 || ctx.request.body.event.hasOwnProperty('bot_id')) return;

  /*
   * Let's cast the payload into our type
   */
  let payload = <SlackEventPayload>ctx.request.body;

  /*
   * Now we can listen to our events and push them into our own event chain
   */
  SlackService.handle(payload.event.type).next(payload);

});

/*
 * This is a convenience URL for Slack to Post to when a slash command is fired
 *  You should add this url to your slash commands "Request URL"
 */
router.post('/slack-slash-command', async (ctx:any, next:any) => {
  /*
   * Push the payload into our slack slash_command event chain
   */
  SlackService.slash_command.next(ctx.request.body);

  /*
   * Without setting the status to 200 or similar HTTP Response codes (20*) slack loses it's shit
   */
  ctx.status = 200;

  /*
   * Setting a body, slack will respond with what you've passed, so emptying the body out prevents more spam
   */
  ctx.body = "";
});