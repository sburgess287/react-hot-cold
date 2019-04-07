import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

// not sure how to pass in guess count/props
describe ('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />)
  });

  it('does not show h2 until guess count is passed in', () => {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.exists('h2')).toEqual(false);

  })
  
});