import * as request from "request";
import { MessageEvents } from "../interfaces/message-events";
import { Attachment, SlackMessage } from "../models/slack-message";

export class SlackWebhook implements MessageEvents {

  private URL:string;
  public message:any;

  constructor(url:string) {
    this.URL = url;
  }

  public async receive(message:string):Promise<string> {
    return message;
  }

  public async send(message:string, url?:string) {
    let webhookURL = this.URL;
    if(url) webhookURL = url;
    let data = SlackWebhook.createForm(message);
    return await request.post(webhookURL, {form: data});
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