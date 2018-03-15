import { Subject } from 'rxjs/Subject';
import {SlackMentionPayload} from "../models/slack-mention-payload";
import {SlackSlashPayload} from "../models/slack-slash-payload";

export let incomingMessage = new Subject<SlackMentionPayload>();
export let slashCommand = new Subject<SlackSlashPayload>();