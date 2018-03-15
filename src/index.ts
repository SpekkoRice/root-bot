import {SlackWebhook} from "./integrations/slack-webhook";
import {environment} from "./environment";
import {incomingMessage, slashCommand} from "./services/slack";
import {start} from "./web-server/http-server";
import {SlackMentionPayload} from "./models/slack-mention-payload";
import {SlackSlashPayload} from "./models/slack-slash-payload";

const whURL = environment.INCOMING_WEBHOOK_URL;

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


// Start up the web server to receive requests from slack
start();