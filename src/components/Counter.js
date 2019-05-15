import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
  startIncreaseCounter,
  startDecreaseCounter
} from '../state/counter/actions';

const Counter = ({
  counter,
  increaseCounter,
  decreaseCounter,
  startIncreaseCounter,
  startDecreaseCounter
}) => (
  <div>
    <p>Counter: {counter}</p>
    <button
      type="button"
      onClick={increaseCounter}
      data-selector="increase-counter-button"
    >
      +1
    </button>
    <button
      type="button"
      onClick={decreaseCounter}
      data-selector="decrease-counter-button"
    >
      -1
    </button>
    <button
      type="button"
      onClick={() => startIncreaseCounter()}
      data-selector="increase-counter-delayed-button"
    >
      +1 (delayed 1s)
    </button>
    <button
      type="button"
      onClick={() => startDecreaseCounter()}
      data-selector="decrease-counter-delayed-button"
    >
      -1 (delayed 1s)
    </button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  startIncreaseCounter: PropTypes.func.isRequired,
  startDecreaseCounter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increaseCounter,
  decreaseCounter,
  startIncreaseCounter,
  startDecreaseCounter
};

export { Counter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
