import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';
import GuessCount from './guess-count';

// error: cannot read property 'length' of undefined
// needed to add additional arguments for auralStatus and guesses
describe ('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection auralStatus="" guesses={[]} />)
  });

  
});