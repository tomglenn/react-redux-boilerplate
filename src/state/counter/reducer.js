import { INCREASE_COUNTER, DECREASE_COUNTER } from './actions';

const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
