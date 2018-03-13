import * as request from "request";
import * as Koa from "koa";
import * as http from "http";
import { MessageEvents } from "../interfaces/message-events";
import { Attachment, SlackMessage } from "../models/slack-message";

export class SlackWebhook implements MessageEvents {

  private URL:string;
  private PORT:number;

  public app: Koa;
  public listeningApp: http.Server;
  public message:any;

  constructor(url:string, port?:number) {
    this.URL = url;
    if(port) this.PORT = port;
  }

  public async startWebserver (port?:number):Promise<boolean> {
    try {
      let usePort = this.PORT;
      if(port) usePort = port;
      this.app = new Koa();
      this.app.use(async (ctx:any) => {ctx.body = 'Hello World';});
      this.listeningApp = await this.app.listen(usePort);
      return true;
    } catch (e) {
      return false;
    }
  };

  public async receive(message:string):Promise<string> {
    return message;
  }

  public async send(message:string) {
    let data = SlackWebhook.createForm(message);
    return await request.post(this.URL, {form: data});
  }

  private static createForm(message:string, attachments?:[Attachment] | Attachment):string {
    if(attachments instanceof Array) {

      return JSON.stringify(new SlackMessage(message, attachments));

    } else if (attachments instanceof Attachment) {

      let slackMessage:SlackMessage = new SlackMessage(message);
      slackMessage.addAttachment(attachments);
      return JSON.stringify(slackMessage);
    }
    return JSON.stringify(new SlackMessage(message));
  }

}