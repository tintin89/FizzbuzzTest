import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';
import '@testing-library/jest-dom';



describe('Counter unit tests',()=>{
    
    let wrapper = shallow(<Counter/>);

    beforeEach( () =>  {

        wrapper = shallow( <Counter/> );

    });

   
    test('test1,must show correctly the component Counter',()=>{

        expect(wrapper).toMatchSnapshot();
    });

    test('test2, should display the start count as 1',()=>{
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('1');
    });

    test('test3,should increase the count by one when the user increments the count',()=>{
        wrapper.find('button').at(1).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('2');
    });
    test('test4,should decrease the count by one when the user decrements the count',()=>{        
        wrapper.find('button').at(0).simulate('click');   
        const counterText = wrapper.find('h2').text().trim();      
        expect( counterText ).toBe('0');
    });

    test('test5,should restart the count',()=>{
        wrapper.find('button').at(2).simulate('click');        
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('1');
    });    
})