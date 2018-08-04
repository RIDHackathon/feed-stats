const initialState: IState = {
  message: 'test',
};

export interface IState {
  message: string;
}

interface IMessageAction {
  type: MessageActionType;
  data?: {
    message?: string;
  };
}

enum MessageActionType {
  Update,
}

const testReducer = (state = initialState, action: IMessageAction): IState => {
  switch (action.type) {
    case MessageActionType.Update:
      if (action.data && action.data.message) {
        return { ...initialState, message: action.data.message };
      }
    default:
      return initialState;
  }
};

export default {
  test: testReducer,
};
