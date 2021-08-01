import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';


describe('Counter unit tests',()=>{
    let wrapper = shallow(<Counter/>);

    test('test1,must show correctly the component Counter',()=>{

        expect(wrapper).toMatchSnapshot();
    });

    test('test2, should display the start count as 0',()=>{

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('0');
    })
})