import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders GuessForm without crashing', () => {
    shallow(<GuessForm />)
  });
});