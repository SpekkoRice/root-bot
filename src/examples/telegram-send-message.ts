/**
 * IMPORTANT!
 *  I assume you have already created a bot via BotFather and you have a BOT API KEY
 */
import {TelegramService} from "../services/telegram";
import {IMessage} from "../models/telegram";
import {TelegramBot} from "../integrations/telegram-bot";
import {Environment} from "../environment";

/*
 * We start off by creating a new bot for Telegram
 */

let bottie = new TelegramBot(Environment.Telegram.BOT_API_KEY);

/*
 * We send the message off containing a chat ID so it knows to whom to respond
 */
bottie.sendMessage('Yes sir?', '12345').then((res) => {
  console.log(res);
});

/*
 * You probably won't ever have the Chat ID just lying around, so it would be best to respond
 *  to someone who has sent your bot a message
 *
 * This can be achieved using the TelegramService.message event
 */
TelegramService.message.subscribe((message:IMessage) => {
  bottie.sendMessage('Yes sir?', message.chat.id).then((res) => {
    console.log(res);
  });
});