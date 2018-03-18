import {Subject} from "rxjs/Subject";
import {
  ICallbackQuery, IChosenInlineResult, IInlineQuery, IMessage, IPreCheckoutQuery, IShippingQuery,
  IUpdate
} from "../models/telegram";

export class TelegramService {
  public static message = new Subject<IMessage>();
  public static edited_message = new Subject<IMessage>();
  public static channel_post = new Subject<IMessage>();
  public static edited_channel_post = new Subject<IMessage>();
  public static inline_query = new Subject<IInlineQuery>();
  public static chosen_inline_result = new Subject<IChosenInlineResult>();
  public static callback_query = new Subject<ICallbackQuery>();
  public static shipping_query = new Subject<IShippingQuery>();
  public static pre_checkout_query = new Subject<IPreCheckoutQuery>();

  public static handle(payload:IUpdate):Subject<any> {
    if(payload.hasOwnProperty('message')) return TelegramService.message;
    if(payload.hasOwnProperty('edited_message')) return TelegramService.edited_message;
    if(payload.hasOwnProperty('channel_post')) return TelegramService.channel_post;
    if(payload.hasOwnProperty('edited_channel_post')) return TelegramService.edited_channel_post;
    if(payload.hasOwnProperty('inline_query')) return TelegramService.inline_query;
    if(payload.hasOwnProperty('chosen_inline_result')) return TelegramService.chosen_inline_result;
    if(payload.hasOwnProperty('callback_query')) return TelegramService.callback_query;
    if(payload.hasOwnProperty('shipping_query')) return TelegramService.shipping_query;
    if(payload.hasOwnProperty('pre_checkout_query')) return TelegramService.pre_checkout_query;
  }

  public static extract(payload:IUpdate):any {
    if(payload.hasOwnProperty('message')) return payload.message;
    if(payload.hasOwnProperty('edited_message')) return payload.edited_message;
    if(payload.hasOwnProperty('channel_post')) return payload.channel_post;
    if(payload.hasOwnProperty('edited_channel_post')) return payload.edited_channel_post;
    if(payload.hasOwnProperty('inline_query')) return payload.inline_query;
    if(payload.hasOwnProperty('chosen_inline_result')) return payload.chosen_inline_result;
    if(payload.hasOwnProperty('callback_query')) return payload.callback_query;
    if(payload.hasOwnProperty('shipping_query')) return payload.shipping_query;
    if(payload.hasOwnProperty('pre_checkout_query')) return payload.pre_checkout_query;
  }
}