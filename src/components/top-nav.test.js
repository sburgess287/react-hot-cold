import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

// TopNav component, mounts Dom and verifies props
describe ('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />)
  });


  it('should restart game on click', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {} //?
    });
    expect(callback).toHaveBeenCalled();

  });

  it('Should call onGenerageAuralUpdate when state-of-game link clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    })
    expect(callback).toHaveBeenCalled();
  })

});