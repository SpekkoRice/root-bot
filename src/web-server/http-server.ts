import {environment} from "../environment";
import {koaBetterBody as body} from "../custom-typings/koa-better-body";
import {router} from "./routes";
import * as Koa from "koa";
import * as convert from "koa-convert";
import * as mount from "koa-mount";
import * as http from "http";

const envPORT = environment.WEBSERVER_PORT;

export let app: Koa;
export let listeningApp: http.Server;

// Returns the port it's listening on
export let start = async (port?:number):Promise<number> => {
  let usePort = envPORT;
  if(port) usePort = port;
  app = new Koa();
  app.use(convert(body({fields: "body"})));
  app.use(mount(router.routes()));
  listeningApp = await this.app.listen(usePort);
  return usePort;
};
