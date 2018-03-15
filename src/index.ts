import { SlackWebhook } from "./integrations/slack-webhook";
import { environment } from "./environment";
import { incomingMessage, slashCommand } from "./services/slack";
import { start } from "./web-server/http-server";
import { SlackMentionPayload } from "./models/slack-mention-payload";
import { SlackSlashPayload } from "./models/slack-slash-payload";
import { Root } from "./integrations/root";

const whURL = environment.INCOMING_WEBHOOK_URL;
const RootURL = environment.ROOT_API_URL;
const RootToken = environment.ROOT_API_KEY;
let step = 0;
let response = [];
// Start up the slack webhook to send data to slack
export let bottie = new SlackWebhook(whURL);

// Example of event fired when slash command is used
slashCommand.subscribe((payload: SlackSlashPayload) => {
  console.log("payload", payload);
  bottie.send("BOT RESPONSE", payload.response_url);
});

// Example of event fired when app is mentioned
incomingMessage.subscribe((payload: SlackMentionPayload) => {
  console.log("payload inside incomingMessage", payload);
  if (!response[payload.event.user]) {
    response[payload.event.user] = [];
  }
  step++;
  response[payload.event.user][step - 1] = payload.event.text.replace(
    "<@U9Q73AKKM>",
    ""
  );
  console.log("step", step);
  console.log("response", response);

  switch (step) {
    case 1:
      bottie.send("Hi there, what is your name? ");
      break;

    case 2:
      bottie.send(
        "Hi" + response[payload.event.user][step - 1] + " what is your number? "
      );
      break;

    case 3:
      bottie.send(
        response[payload.event.user][step - 1] + " ? What type of phone is it?"
      );
      break;

    case 4:
      if (response[payload.event.user][step - 1] == " Nokia") {
        bottie.send(
          response[payload.event.user][step - 1] + "? Lol, Do they still make those?"
        );
      } else {
        bottie.send(
          response[payload.event.user][step - 1] + " that is a cool phone"
        );
      }
      break;

    default:
      bottie.send("Hi there");
      break;
  }
  if (step > 3) {
    step = 0;
  }
  //bottie.send('Hi there, what do you need?')
});

let root = new Root(RootURL, RootToken);

// EXAMPLES
root
  .post("v1/insurance/quotes", { type: "root_gadgets", model_name: "iPhone 5" })
  .then(res => {
    console.log(res);
  });

root.get("v1/insurance/modules/root_gadgets/models").then(res => {
  console.log(res);
});

// Start up the web server to receive requests from slack
start();
