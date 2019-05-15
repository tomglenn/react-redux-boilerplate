import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  increaseCounter,
  decreaseCounter,
  startIncreaseCounter,
  startDecreaseCounter
} from './actions';

const createMockStore = configureMockStore([thunk]);

describe('State/Counter Actions', () => {
  describe('increaseCounter', () => {
    it('should create a valid INCREASE_COUNTER action', () => {
      const action = increaseCounter();
      expect(action).toEqual({
        type: INCREASE_COUNTER
      });
    });
  });

  describe('decreaseCounter', () => {
    it('should create a valid DECREASE_COUNTER action', () => {
      const action = decreaseCounter();
      expect(action).toEqual({
        type: DECREASE_COUNTER
      });
    });
  });

  describe('startIncreaseCounter', () => {
    const store = createMockStore();
    const delay = 0;

    it('should dispatch increaseCounter', done => {
      store.dispatch(startIncreaseCounter(delay)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: INCREASE_COUNTER
        });
        done();
      });
    });
  });

  describe('startDecreaseCounter', () => {
    const store = createMockStore();
    const delay = 0;

    it('should dispatch decreaseCounter', done => {
      store.dispatch(startDecreaseCounter(delay)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: DECREASE_COUNTER
        });
        done();
      });
    });
  });
});
