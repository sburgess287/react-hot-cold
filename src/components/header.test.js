import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';
import TopNav from './top-nav';

describe ('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />)
  });

  it('renders 1 component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(TopNav));
  })
});
