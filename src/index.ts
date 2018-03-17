import {start as httpStart} from "./web-server/http-server";
import {Environment} from "./environment";
import * as request from "request";

/*
 *  This is the entry point for the application
 *    you can add all your application logic here
 *    or reference from here.. but this is the entry point.
 */

function buildQueryUrl():string {
  return `${Environment.Telegram.API_URL}/bot${Environment.Telegram.API_KEY}`;
}

function get(route) {
  return new Promise((resolve, reject) => {
    request.get(buildQueryUrl() + route, {}, (error, res, body) => {
      if(error) reject(error);
      resolve(body);
    });
  });
}

function post(route, payload) {
  return new Promise((resolve, reject) => {
    request.post(buildQueryUrl(), {form: payload}, (error, res, body) => {
      if(error) reject(error);
      resolve(body);
    });
  });
}

let webhook = {
  url: "https://ca6ff0f0.ngrok.io/telegram/updates",
  // certificate: "",
  // max_connections: "",
  // allowed_updates: ""
};

get(`/setWebhook?url=${webhook.url}`).then((res) => {
  // https://api.telegram.org/bot553889255:AAEUIx1_4oiG1fBfCp8DGvW9BaSGPRvpXGU/setWebhook?url=https://ca6ff0f0.ngrok.io/telegram/updates
  console.log(buildQueryUrl() + `/setWebhook?url=${webhook.url}`);
  console.log(res);
});


httpStart().then((port) => {
  console.log(`HTTP SERVER LISTENING ON: ${port}`);
});