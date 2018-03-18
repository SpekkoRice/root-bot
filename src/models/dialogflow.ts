export class IMetaData {
  intentId:string;
  webhookUsed:string;
  webhookForSlotFillingUsed:string;
  intentName:string;
}

export class IResult {
  source:string;
  resolvedQuery:string;
  action:string;
  actionIncomplete:string;
  parameters:any;
  contexts:[any];
  metadata:IMetaData;
  fulfillment: { speech: string, messages: [any] };
  score:number;
}

export class IPayload {
  id:string;
  timestamp:string;
  lang:string;
  result:IResult;
  status: { code: number, errorType: string, webhookTimedOut: boolean };
  sessionId:string;
}