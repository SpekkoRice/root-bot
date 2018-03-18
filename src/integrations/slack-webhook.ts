import * as request from "request";
import {IAttachment, SlackMessage} from "../models/slack";

export class SlackWebhook {

  private URL:string;
  public message:any;

  constructor(url:string) {
    this.URL = url;
  }

  public async send(message:string, url?:string) {
    return new Promise((resolve, reject) => {
      let webhookURL = this.URL;
      if(url) webhookURL = url;
      let data = SlackWebhook.createForm(message);
      request.post(webhookURL, {form: data}, (error, res, body) => {
        resolve(body);
      });
    });
  }

  private static createForm(message:string, attachments?:[IAttachment] | IAttachment):string {
    if(attachments instanceof Array) {
      return JSON.stringify(new SlackMessage(message, attachments));
    } else if (attachments instanceof IAttachment) {
      let slackMessage:SlackMessage = new SlackMessage(message);
      slackMessage.addAttachment(attachments);
      return JSON.stringify(slackMessage);
    }
    return JSON.stringify(new SlackMessage(message));
  }

}