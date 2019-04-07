import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from './info-section';

describe (<InfoSection />, () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />)
  });

  it('contains correct html elements', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper.exists('h2')).toEqual(true);
    expect(wrapper.exists('p')).toEqual(true);
    expect(wrapper.exists('ol')).toEqual(true);
    expect(wrapper.exists('li')).toEqual(true);

  })
});