import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders GuessForm without crashing', () => {
    shallow(<GuessForm />)
  });

  // failing, I think I need to set value of the callback
  it('submits number of the guess', () => {
    const callback = jest.fn()
    const wrapper = mount(<GuessForm onSubmit={callback}/>)
    const value = '12'
    

    wrapper.find('input').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
    wrapper.unmount();


  })

});