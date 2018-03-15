export class SlackPayloadEvent {
  type:string;
  bot_id?:string;
  user:string;
  text:string;
  ts:string;
  channel:string;
  event_ts:string;
}

export class SlackMentionPayload {
  token:string;
  team_id:string;
  api_app_id:string;
  event: [SlackPayloadEvent];
  type:string;
  event_id:string;
  event_time:number;
  authed_users:[string];
}