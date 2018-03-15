import * as koaBetterBody from "koa-better-body";
export { koaBetterBody };

declare module "koa" {
  export interface Request {
    body: any;
  }
}
