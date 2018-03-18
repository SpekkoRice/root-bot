
export class IUpdate {
  update_id:number;
  message?:IMessage;
  edited_message?:IMessage;
  channel_post?:IMessage;
  edited_channel_post?:IMessage;
  inline_query?:IInlineQuery;
  chosen_inline_result?:IChosenInlineResult;
  callback_query?:ICallbackQuery;
  shipping_query?:IShippingQuery;
  pre_checkout_query?:IPreCheckoutQuery;
}

export class IInlineQuery {
  id:string;
  from:IUser;
  location:ILocation;
  query:string;
  offset:string;
}

export class IChosenInlineResult {
  result_id:string;
  from:IUser;
  location:ILocation;
  inline_message_id:string;
  query:string;
}

export class ICallbackQuery {
  id:string;
  from:IUser;
  message:IMessage;
  inline_message_id:string;
  chat_instance:string;
  data:string;
  game_short_name:string;
}

export class IShippingQuery {
  id:string;
  from:IUser;
  invoice_payload:string;
  shipping_address:IShippingAddress;
}

export class IShippingAddress {
  country_code:string;
  state:string;
  city:string;
  street_line1:string;
  street_line2:string;
  post_code:string;
}

export class IPreCheckoutQuery {
  id:string;
  from:IUser;
  currency:string;
  total_amount:number;
  invoice_payload:string;
  shipping_option_id:string;
  order_info:IOrderInfo;
}

export class IOrderInfo {
  name:string;
  phone_number:string;
  email:string;
  shipping_address:IShippingAddress;
}

export class IResponse<T> {
  ok:boolean;
  result:T;
}

export class IMessage {
  message_id:number;
  from:IUser;
  date:number;
  chat:IChat;
  forward_from?:IUser;
  forward_from_chat?:IChat;
  forward_date?:number;
  reply_to_message?:IMessage;
  edit_date?:number;
  text?:string;
  entities?:Array<IMessageEntity>;
  audio?:IAudio;
  document?:IDocument;
  photo?:Array<IPhotoSize>;
  sticker?:ISticker;
  video?:IVideo;
  voice?:IVoice;
  caption?:string;
  contack?:IContact;
  location?:ILocation;
  venue?:IVenue;
  new_chat_member?:IUser;
  left_chat_member?:IUser;
  new_chat_title?:string;
  new_chat_photo?:Array<IPhotoSize>;
  delete_chat_photo?:boolean;
  group_chat_created?:boolean;
  supergroup_chat_created?:boolean;
  channel_chat_created?:boolean;
  migrate_to_chat_id?:number;
  migrate_from_chat_id?:number;
  pinned_message:IMessage;
}

export class IMessageUpdate {
  update_id:number;
  message:IMessage;
}

export class IUser {
  id:number;
  first_name:string;
  last_name?:string;
  username?:string;
}

export type ChatType = 'private' | 'group' | 'supergroup' | 'channel'

export class IChat {
  id:number;
  type:ChatType;
  title?:string;
  username?:string;
  first_name?:string;
  last_name?:string;
}

export type MessageEntityType = 'mention' | 'hashtag' | 'bot_command' | 'url' | 'email' | 'bold' | 'italic' | 'code' | 'pre' | 'text_link' | 'text_mention';

export class IMessageEntity {
  type:MessageEntityType;
  offset:number;
  length:number;
  url?:string;
  user?:IUser;
}

export class IFile {
  file_id:string;
  file_size?:number;
  file_path?:string;
}

export class IPhotoSize extends IFile {
  width:number;
  height:number;
}

export class IAudio extends IFile {
  duration:number;
  performer?:string;
  title?:string;
  mime_type?:string;
}

export class IDocument extends IFile {
  thumb?:IPhotoSize;
  file_name?:string;
  mime_type?:string;
}

export class ISticker extends IFile {
  width:number;
  height:number;
  thumb?:IPhotoSize;
  emoji?:string;
}

export class IVideo extends IFile {
  width:number;
  height:number;
  duration:number;
  thumb?:IPhotoSize;
  mime_type?:string;
}

export class IVoice extends IFile {
  duration:number;
  mime_type?:string;
}

export class IContact {
  phone_number:string;
  first_name:string;
  last_name?:string;
  user_id?:number;
}

export class ILocation {
  longitude:number;
  latitude:number;
}

export class IVenue {
  location:ILocation;
  title:string;
  address:string;
  foursquare_id?:string
}

export class IUserProfilePhotos {
  total_count:number;
  photos:Array<IPhotoSize>;
}

export class ISendMessage {
  chat_id:number | string;
  text:string;
  parse_mode?:string;
  disable_web_page_preview?:boolean;
  disable_notification?:boolean;
  reply_to_message_id?:boolean;
  // TODO NOT SUPPORTED YET `reply_markup`
}