import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders Feedback without crashing', () => {
    shallow(<Feedback />)
  });

  it('contains correct html element', () => {
    const wrapper = shallow(<Feedback />);
    expect(wrapper.exists('h2')).toEqual(true);
  
  })

  it('Renders some feedback', () => {
    let TEST_FEEDBACK = 'You are listening to a game!';

    let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
    expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
  })

  
});