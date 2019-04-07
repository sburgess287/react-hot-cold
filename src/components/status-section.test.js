import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

// error: cannot read property 'length' of undefined
describe ('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection />)
  });
});