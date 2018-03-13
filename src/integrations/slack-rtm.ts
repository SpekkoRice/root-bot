import {RTMClient} from "@slack/client";

const token = "https://hooks.slack.com/services/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";

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start({});

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C1232456';

// The RTM client can send simple string messages
rtm.sendMessage('Hello there', conversationId)
  .then((res:any) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);

  }).catch(console.error);