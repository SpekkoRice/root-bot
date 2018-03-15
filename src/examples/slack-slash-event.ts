/**
 * IMPORTANT !
 *  To run this example successfully you need to have setup your slack application
 *    to enable Event Subscriptions and properly verified your URL Using ngrok & Slack APP
 */

import {SlackService} from "../services/slack";
import {start as httpStart} from "../web-server/http-server";
import {SlackSlashPayload} from "../models/slack-slash-payload";

/*
 * You subscribe to the slash command event on the slack service.
 * This service will fire every time next() is run on the subject.
 * In routes there's already a URL defined for /slack-slash-command that will next the slack
 *    payload into the subscription
 */
SlackService.slash_command.subscribe((payload:SlackSlashPayload) => {
  /*
   * In here you can do what you want with the payload,
   *    typically you would respond here or perhaps send something off to DialogFlow.
   * If you would like to carry on within the Slack Slash event context you need to respond
   *    using their webhook sent within the payload
   *
   * e.g: bottie.send('MY MESSAGE', payload.response_url);
   */
  console.log('SLASH COMMAND RECEIVED!');
});

// We assume you've setup your Event Subscriptions on Slack
// So all you need to do is startup your http server

httpStart().then((port:number) => {
  console.log(`HTTP SERVER LISTENING ON: ${port}`);
});