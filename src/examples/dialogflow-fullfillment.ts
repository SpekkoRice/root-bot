/**
 * IMPORTANT!
 *  You have to have setup your Dialogflow account and added some intents for this to work,
 *    you will however see a response from Dialogflow, but this integration is only as good
 *    as your intents and contexts
 */

import {Environment} from "../environment";
import {DialogFlow} from "../integrations/dialogflow";
import {IPayload} from "../models/dialogflow";

const dialogFlowToken = Environment.DialogFlow.ACCESS_TOKEN;

/*
 * Fire up the DialogFlow integration class
 *  This does a couple of things
 *   - Promisify's the request
 *   - Types the pauyloads
 *   - Has some boilerplate for you
 */
let dialogFlow = new DialogFlow(dialogFlowToken);

/*
 * The textRequest: 'Hello' is your user input
 *  you need to send Dialogflow a UniqueID this would preferably be a consistent UserID / email,
 *    if it's inconsistent, users will lose their context.
 *    The unique ID is basically a session ID to keep the context the same for a given, well session.
 */
dialogFlow.onRequest('Hello', 'UniqueID').then((res:IPayload) => {
  /*
   * Here Dialogflow will respond with it's fulfillment
   *  From here you would typically send your fulfillment via bot
   *
   *  e.g.: bottie.send(res.result.fulfillment.speech);
   */
  console.log(res);
});