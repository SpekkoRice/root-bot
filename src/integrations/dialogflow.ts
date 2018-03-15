import {ApiAiClient} from "api-ai-javascript";

export class DialogFlow {

  private dialogflowToken:string;

  constructor(dialogflowToken:string) {
    this.dialogflowToken = dialogflowToken;
  }

  public async onRequest(textRequest:string) {
    return new ApiAiClient({accessToken: this.dialogflowToken}).textRequest(textRequest);
  }
}