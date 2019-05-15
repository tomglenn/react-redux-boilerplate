import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Components/Navigation Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
