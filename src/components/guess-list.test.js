import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

// this one fails on render, propably needs mount?
//     TypeError: Cannot read property 'map' of undefined
describe ('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList />)
  });
});
