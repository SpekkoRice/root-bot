import {Subject} from "rxjs/Subject";

export class DialogflowService {
  public static  fulfillment = new Subject<any>();
}