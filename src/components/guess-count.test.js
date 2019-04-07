import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe ('<GuessCount />', () => {
  it('Renders GuessCount without crashing', () => {
    shallow(<GuessCount />)
  });
});

