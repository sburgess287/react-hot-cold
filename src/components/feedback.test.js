import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders Feedback without crashing', () => {
    shallow(<Feedback />)
  });
});