import { IMessageAction, MessageActionType } from '../actions';

const initialState: IState = {
  count: 0,
  message: 'This should be working without any changes',
};

export interface IState {
  message: string;
  count: number;
}

const testReducer = (state = initialState, action: IMessageAction): IState => {
  switch (action.type) {
    case MessageActionType.Update:
      if (action.data && action.data.message) {
        return { ...state, message: action.data.message };
      }
    case MessageActionType.Increment:
      return { ...state, count: state.count + 1 };
    default:
      return initialState;
  }
};

export default {
  test: testReducer,
};
