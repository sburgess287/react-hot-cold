import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

// this one fails on render, propably needs mount, not sure how to fix
//     TypeError: Cannot read property 'map' of undefined
describe ('<GuessList />', () => {
  it('Renders without crashing', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessList />)
    const value = '12'

  });
});
