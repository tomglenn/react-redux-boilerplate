const INCREASE_COUNTER = 'INCREASE_COUNTER';
const increaseCounter = () => ({ type: INCREASE_COUNTER });

const DECREASE_COUNTER = 'DECREASE_COUNTER';
const decreaseCounter = () => ({ type: DECREASE_COUNTER });

const startIncreaseCounter = (delay = 1000) => {
  return dispatch => {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(increaseCounter());
        resolve();
      }, delay);
    });
  };
};

const startDecreaseCounter = (delay = 1000) => {
  return dispatch => {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(decreaseCounter());
        resolve();
      }, delay);
    });
  };
};

export {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  increaseCounter,
  decreaseCounter,
  startIncreaseCounter,
  startDecreaseCounter
};
