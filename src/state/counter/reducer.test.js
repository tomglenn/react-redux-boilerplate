import { INCREASE_COUNTER, DECREASE_COUNTER } from './actions';
import counterReducer from './reducer';

describe('State/Counter Reducer', () => {
  it('should have the correct default state', () => {
    const state = counterReducer(undefined, { type: '@@INIT' });
    expect(state).toBe(0);
  });

  it('should increase the count by 1 when receiving INCREASE_COUNTER', () => {
    const state = counterReducer(0, { type: INCREASE_COUNTER });
    expect(state).toBe(1);
  });

  it('should decrease the count by 1 when receiving DECREASE_COUNTER', () => {
    const state = counterReducer(0, { type: DECREASE_COUNTER });
    expect(state).toBe(-1);
  });
});
