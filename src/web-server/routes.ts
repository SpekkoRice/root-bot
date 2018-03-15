import * as Router from "koa-router";
import {incomingMessage, slashCommand} from "../services/slack";

export let router = new Router();

router.get("/", async (ctx:any, next:any) => { ctx.body = "HELLO WORLD!" });

router.post("/bottie", async (ctx:any, next:any) => {
  incomingMessage.next();
});

router.post('/slash-bottie', async (ctx:any, next:any) => {
  let webhook = ctx.request.body.response_url;
  slashCommand.next(webhook);
  ctx.status = 200;
  ctx.body = "";
});