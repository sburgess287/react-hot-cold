import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

// not sure how to test the props passed in
describe ('<GuessCount />', () => {
  it('Renders GuessCount without crashing', () => {
    shallow(<GuessCount />)
  });

  it('renders h2', () => {
    const wrapper = shallow(<GuessCount />);
    expect(wrapper.exists('h2')).toEqual(true);
  })

});

