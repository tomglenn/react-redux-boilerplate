import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

describe('Components/Counter Component', () => {
  const mockProps = {
    counter: 1,
    increaseCounter: jest.fn(),
    decreaseCounter: jest.fn(),
    startIncreaseCounter: jest.fn(),
    startDecreaseCounter: jest.fn()
  };

  const wrapper = shallow(<Counter {...mockProps} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call increaseCounter when clicking the increase counter button', () => {
    wrapper.find('[data-selector="increase-counter-button"]').simulate('click');
    expect(mockProps.increaseCounter).toHaveBeenCalled();
  });

  it('should call decreaseCounter when clicking the decrease counter button', () => {
    wrapper.find('[data-selector="decrease-counter-button"]').simulate('click');
    expect(mockProps.decreaseCounter).toHaveBeenCalled();
  });

  it('should call startIncreaseCounter when clicking the increase counter delayed button', () => {
    wrapper
      .find('[data-selector="increase-counter-delayed-button"]')
      .simulate('click');
    expect(mockProps.startIncreaseCounter).toHaveBeenCalled();
  });

  it('should call startDecreaseCounter when clicking the increase counter button', () => {
    wrapper
      .find('[data-selector="decrease-counter-delayed-button"]')
      .simulate('click');
    expect(mockProps.startDecreaseCounter).toHaveBeenCalled();
  });
});
