// started seeing a worker threads bug

import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section'
import Feedback from './feedback';
import GuessForm from './guess-form';

describe ('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />)
  })
  it('renders 2 components', () => {
    const wrapper = shallow(<GuessSection/>);
    expect(wrapper.find(Feedback));
    expect(wrapper.find(GuessForm));
  })

})