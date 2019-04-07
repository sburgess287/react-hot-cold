import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

// this one fails on render, propably needs mount, not sure how to fix
//     TypeError: Cannot read property 'map' of undefined : NEEDED EMPTY ARRAY
describe ('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />)
  });

  it('Renders a list of guesses', () => {
    const values = [10, 24, 52];
    const wrapper = shallow(<GuessList guesses={values} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    })
  })




});
