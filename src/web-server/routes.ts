import * as Router from "koa-router";
import {SlackService} from "../services/slack";
import {IEventPayload, ISlashPayload} from "../models/slack";
import {TelegramService} from "../services/telegram";
import {IUpdate} from "../models/telegram";

export let router = new Router();

router.get("/", async (ctx:any, next:any) => { ctx.body = "HELLO WORLD!" });

/*
 * This is a convenience URL for Slack to post to when events that your app listens to fires
 *  You should add this URL to your slack "Request URL"
 */
router.post("/slack/event", async (ctx:any, next:any) => {

  /*
   * Slack will try and auth on this event listener URL (When you're setting up your slack application)
   *  This has been added for convenience
   */
  if(ctx.request.body.hasOwnProperty('challenge')) {
    ctx.body = {challenge: ctx.request.body.challenge};
    return;
  }

  /*
   * We need to also check if the payload is coming from a bot causing the event to fire.
   * If a bot responds to a user we don't want to listen to fire an event
   */
  if(ctx.request.body.event.hasOwnProperty('bot_id')) return;

  /*
   * Let's cast the payload into our type
   */
  let payload = <IEventPayload>ctx.request.body;

  /*
   * Now we can listen to our events and push them into our own event chain
   */
  SlackService.handle(payload.event.type).next(payload);

  /*
   * Without setting the status to 200 or similar HTTP Response codes (20*) slack loses it's shit
   */
  ctx.status = 200;
  ctx.body = "";
});

/*
 * This is a convenience URL for Slack to Post to when a slash command is fired
 *  You should add this url to your slash commands "Request URL"
 */
router.post('/slack/slash', async (ctx:any, next:any) => {
  /*
   * Push the payload into our slack slash_command event chain
   */
  SlackService.slash_command.next(<ISlashPayload>ctx.request.body);

  /*
   * Without setting the status to 200 or similar HTTP Response codes (20*) slack loses it's shit
   */
  ctx.status = 200;
  ctx.body = "";
});


router.post('/telegram/updates', async (ctx:any, next:any) => {
  /*
   * Push the payload into our telegram service handle & extract the correct payload information
   */
  TelegramService.handle(<IUpdate>ctx.request.body).next(TelegramService.extract(<IUpdate>ctx.request.body));

  /*
   * Return 200 otherwise telegram will keep retrying to hit your api
   */
  ctx.status = 200;
  ctx.body = {};
});