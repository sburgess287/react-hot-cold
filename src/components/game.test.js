import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders Game without crashing', () => {
    shallow(<Game />);
  });
});