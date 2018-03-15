class Event {
  type:string;
  bot_id?:string;
  user:string;
  text:string;
  ts:string;
  channel:string;
  event_ts:string;
}

export class SlackEventPayload {
  token:string;
  team_id:string;
  api_app_id:string;
  event: Event;
  type:string;
  event_id:string;
  event_time:number;
  authed_users:[string];
}