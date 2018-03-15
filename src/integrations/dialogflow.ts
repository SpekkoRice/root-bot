import * as APIAI from "apiai";
import {DialogflowPayload} from "../models/dialogflow-payload";

export class DialogFlow {

  private dialogflowToken:string;
  private app:any; // TODO TYPE PROPERLY

  constructor(dialogflowToken:string) {
    this.dialogflowToken = dialogflowToken;
    this.app = APIAI(dialogflowToken);
  }

  public async onRequest(textRequest:string, uniqueId:string) {
    let request = this.app.textRequest(textRequest, {sessionId: uniqueId});
    return new Promise((resolve, reject) => {
      request.on("response", (res:DialogflowPayload) => {
        resolve(res);
      });

      request.on("error", (error) => {
        reject(error);
      });

      request.end();
    });
  }
}