export interface IMessageAction {
  type: MessageActionType;
  data?: {
    message?: string;
  };
}

export enum MessageActionType {
  Update,
  Increment,
}

export const increment = () => ({
  type: MessageActionType.Increment,
});
