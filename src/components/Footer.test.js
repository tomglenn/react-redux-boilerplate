import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Components/Footer Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
