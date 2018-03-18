/**
 * IMPORTANT!
 *  I assume you have already created a bot via BotFather and you have a BOT API KEY
 */
import {TelegramService} from "../services/telegram";
import {IMessage} from "../models/telegram";

/*
 * There are a number of events to subscribe to
 *  So do check out the Telegram Service to determine which events you want to listen on
 */
TelegramService.message.subscribe((message:IMessage) => {

  /*
   * Here you would typically send a message / reply or work the data
   */
  console.log(message, 'Message Received');
});

/*
 * Another example of an event coming from Telegram
 */
TelegramService.edited_message.subscribe((message:IMessage) => {
  console.log(message, 'Message Edited');
});