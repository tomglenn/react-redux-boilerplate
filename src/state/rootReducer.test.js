import { createStore } from 'redux';
import rootReducer from './rootReducer';
import counterReducer from './counter/reducer';

describe('State/Root Reducer', () => {
  const store = createStore(rootReducer);

  it('should have the correct default state', () => {
    expect(store.getState()).toEqual({
      counter: counterReducer(undefined, {})
    });
  });
});
