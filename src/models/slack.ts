export class IAttachment {
  public title:string;
  public title_link:string;
  public text:string;
}

export class IMessage {
  public text:string;
  public attachments?:[IAttachment];
}

class IEvent {
  type:string;
  bot_id?:string;
  user:string;
  text:string;
  ts:string;
  channel:string;
  event_ts:string;
}

export class IEventPayload {
  token:string;
  team_id:string;
  api_app_id:string;
  event: IEvent;
  type:string;
  event_id:string;
  event_time:number;
  authed_users:[string];
}

export class ISlashPayload {
  token:string;
  team_id:string;
  team_domain:string;
  channel_id:string;
  channel_name:string;
  user_id:string;
  user_name:string;
  command:string;
  text:string;
  response_url:string;
  trigger_id:string;
}

export class SlackMessage implements IMessage {
  public text:string;
  public attachments?:[IAttachment];

  constructor(message: string, attachments?:[IAttachment]) {
    this.text = message;
    if(attachments) {
      this.attachments = attachments;
    }
  }

  public addAttachment(attachment:IAttachment) {
    this.attachments.push(attachment);
  }
}