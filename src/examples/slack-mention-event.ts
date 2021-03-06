/**
 * IMPORTANT !
 *  To run this example successfully you need to have setup your slack application
 *    to enable Slash Commands
 */

import {SlackService} from "../services/slack";
import {start as httpStart} from "../web-server/http-server";
import {IEventPayload} from "../models/slack";

/*
 * You subscribe to the app_mention event on the slack service.
 * This service will fire every time next() is run on the subject.
 * In routes there's already a URL defined for /slack/event that will next the slack
 *    payload into the subscription
 */
SlackService.app_mention.subscribe((payload:IEventPayload) => {
  /*
   * In here you can do what you want with the payload,
   *    typically you would respond here or perhaps send something off to DialogFlow.
   *
   * e.g: bottie.send('MY MESSAGE');
   */
  console.log('SLASH COMMAND RECEIVED!');
});

// We assume you've setup your Events on your Slack App
// So all you need to do is startup your http server

httpStart().then((port:number) => {
  console.log(`APP LISTENING ON: ${port}`);
});
