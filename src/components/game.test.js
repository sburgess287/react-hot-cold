import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

describe('<Game />', () => {
  it('Renders Game without crashing', () => {
    shallow(<Game />);
  });
  it('renders child components', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(GuessSection));
    expect(wrapper.find(StatusSection));
    expect(wrapper.find(InfoSection));
  })

});