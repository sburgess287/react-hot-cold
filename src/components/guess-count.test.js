import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

// pass in the value as an argument and verify function returns correct value
describe ('<GuessCount />', () => {
  it('Renders GuessCount without crashing', () => {
    shallow(<GuessCount />)
  });

  it('renders h2', () => {
    const wrapper = shallow(<GuessCount />);
    expect(wrapper.exists('h2')).toEqual(true);
  })

  it('Renders the correct guess count', () => {
    const value = 5;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`)
  })

});

