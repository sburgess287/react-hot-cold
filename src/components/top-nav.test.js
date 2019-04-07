import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

// TopNave component takes props
describe ('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />)
  });

  it('should restart game on click', () => {
    const wrapper = shallow(<TopNav />);
    wrapper.simulate('click'); // not sure if I'm clicking the correct thing
    expect(wrapper.hasClass('new')).toEqual(false);

  });


});