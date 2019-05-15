import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('Features/About Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
