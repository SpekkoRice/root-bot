
export abstract class MessageEvents {
  public abstract receive(message: string): Promise<string>;
  public abstract send(message: string, channel: string, recipient: string): Promise<any>;
}
