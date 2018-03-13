export class Attachment {
  public title:string;
  public title_link:string;
  public text:string;
}

export class SlackMessage {
  public text:string;
  public attachments?:[Attachment];

  constructor(message: string, attachments?:[Attachment]) {
    this.text = message;
    if(attachments) {
      this.attachments = attachments;
    }
  }

  public addAttachment(attachment:Attachment) {
    this.attachments.push(attachment);
  }
}