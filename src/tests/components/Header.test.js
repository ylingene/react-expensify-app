import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('render Header correctly', () => {
    const wrapper = shallow(<Header />);

    // toJSON set up in jest.config.json file to auto convert Enzyme wrapper to smaller clean JSON
    expect(wrapper).toMatchSnapshot(); 

    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
