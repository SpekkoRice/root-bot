import {Environment} from "../environment";
import {ISendMessage} from "../models/telegram";
import {post, get} from "../utils/request-promisifed";

export class TelegramBot {

  private botApiKey:string;
  private queryUrl:string;

  constructor(botApiKey:string) {
    this.botApiKey = botApiKey;
    this.queryUrl = `${Environment.Telegram.API_URL}/bot${botApiKey}`;
  }

  public rawPost(method:string, payload:any):Promise<any> {
    return post(`${this.queryUrl}`, {form: payload});
  }

  public sendMessage(message:string, chat_id:number | string, options?:Partial<ISendMessage>) {
    let payload:ISendMessage = <ISendMessage>{chat_id: chat_id, text: message };
    if (options && options.disable_notification) payload.disable_notification = options.disable_notification;
    if (options && options.disable_web_page_preview) payload.disable_web_page_preview = options.disable_web_page_preview;
    if (options && options.parse_mode) payload.parse_mode = options.parse_mode;
    if (options && options.reply_to_message_id) payload.reply_to_message_id = options.reply_to_message_id;
    return post(`${this.queryUrl}/sendMessage`, {form: payload});
  }

  public setWebhook(webhookUrl:string):Promise<any> {
    return get(`${this.queryUrl}/setWebhook?url=${webhookUrl}`, {});
  }

  public deleteWebhook():Promise<any> {
    return get(`${this.queryUrl}/deleteWebhook`, {});
  }

  public getMe():Promise<any> {
    return get(`${this.queryUrl}/getMe`, {});
  }

}