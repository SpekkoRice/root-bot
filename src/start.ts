import {SlackWebhook} from "./integrations/slack-webhook";
import {environment} from "./environment";

const whURL = environment.INCOMING_WEBHOOK_URL;
const wsPORT = environment.WEBSERVER_PORT;

// WEBHOOK EXAMPLE
let slackWebhook = new SlackWebhook(whURL, wsPORT);
slackWebhook.send("Hello World: From Web Hook Bot").then(() => {
  console.log('MESSAGE SENT');
});
slackWebhook.startWebserver().then(() => {
  console.log('WEB SERVER RUNNING ON PORT: ' + wsPORT);
});