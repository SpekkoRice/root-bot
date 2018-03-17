/**
 * IMPORTANT!
 *  If you want to send messages to your Slack Workspace using The webhook API
 *    you need to have setup and enabled Slack Incoming Webhook on your Slack Application
 */

import {SlackWebhook} from "../integrations/slack-webhook";
import {Environment} from "../environment";

/*
 * For convenience I've added a single Incoming Webhook URL in the environment.ts
 *  however, nothing is stopping you from defining multiple webhooks and responding to your respective channels
 *    using whichever webhooks you'd like.
 */

/*
 * Instantiate your SlackWebhook instance using the SlackWebhook Wrapper class.
 */
export let bottie = new SlackWebhook(Environment.Slack.INCOMING_WEBHOOK_URL);

/*
 * Now send the message
 */
bottie.send('your message string').then((response) => {
  console.log(response);
});