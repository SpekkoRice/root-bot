export class DialogflowMetaData {
  intentId:string;
  webhookUsed:string;
  webhookForSlotFillingUsed:string;
  intentName:string;
}

export class DialogflowResult {
  source:string;
  resolvedQuery:string;
  action:string;
  actionIncomplete:string;
  parameters:any;
  contexts:[any];
  metadata:DialogflowMetaData;
  fulfillment: { speech: string, messages: [any] };
  score:number;
}

export class DialogflowPayload {
  id:string;
  timestamp:string;
  lang:string;
  result:DialogflowResult;
  status: { code: number, errorType: string, webhookTimedOut: boolean };
  sessionId:string;
}

