import * as Router from "koa-router";
import {incomingMessage, slashCommand} from "../services/slack";
import * as _ from "lodash";

export let router = new Router();

router.get("/", async (ctx:any, next:any) => { ctx.body = "HELLO WORLD!" });

// This should probably flushed every now and then
let tokens = [];

router.post("/bottie", async (ctx:any, next:any) => {
  let token = ctx.request.body.event_id;
  let inArray = _.findIndex(tokens, (i) => {
    return i == token;
  });
  // We don't wan to fire events when bots send messages, only when people send messages
  if(inArray == -1 && ctx.body.event.hasOwnProperty('bot_id')) {
    incomingMessage.next(ctx.request.body);
    tokens.push(token);
  }

});

router.post('/slash-bottie', async (ctx:any, next:any) => {
  slashCommand.next(ctx.request.body);
  ctx.status = 200;
  ctx.body = "";
});