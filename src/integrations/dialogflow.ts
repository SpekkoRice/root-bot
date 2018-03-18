import * as APIAI from "apiai";
import {IPayload} from "../models/dialogflow";

export class DialogFlow {

  private dialogflowToken:string;
  private app:any; // TODO TYPE PROPERLY

  constructor(dialogflowToken:string) {
    this.dialogflowToken = dialogflowToken;
    this.app = APIAI(dialogflowToken);
  }

  public async onRequest(textRequest:string, sessionId:string):Promise<IPayload> {
    let request = this.app.textRequest(textRequest, {sessionId: sessionId});
    return new Promise<IPayload>((resolve, reject) => {
      request.on("response", (res:IPayload) => {
        resolve(res);
      });

      request.on("error", (error) => {
        reject(error);
      });

      request.end();
    });
  }
}