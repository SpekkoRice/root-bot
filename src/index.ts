import {SlackWebhook} from "./integrations/slack-webhook";
import {environment} from "./environment";
import {incomingMessage, slashCommand} from "./services/slack";
import {start} from "./web-server/http-server";
import {SlackMentionPayload} from "./models/slack-mention-payload";
import {SlackSlashPayload} from "./models/slack-slash-payload";
import {Root} from "./integrations/root";

const whURL = environment.INCOMING_WEBHOOK_URL;
const RootURL = environment.ROOT_API_URL;
const RootToken = environment.ROOT_API_KEY;

// Start up the slack webhook to send data to slack
export let bottie = new SlackWebhook(whURL);

// Example of event fired when slash command is used
slashCommand.subscribe((payload:SlackSlashPayload) => {
  bottie.send('BOT RESPONSE', payload.response_url);
});

// Example of event fired when app is mentioned
incomingMessage.subscribe((payload:SlackMentionPayload) => {
  bottie.send('Yes what do you need?')
});

let root = new Root(RootURL, RootToken);

// EXAMPLES
root.post("v1/insurance/quotes", {type: "root_gadgets", model_name: "iPhone 5"}).then((res) => {
  console.log(res);
});

root.get('v1/insurance/modules/root_gadgets/models').then((res) => {
  console.log(res);
});

// Start up the web server to receive requests from slack
start();