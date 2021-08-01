import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';


describe('Counter unit tests',()=>{
    let wrapper = shallow(<Counter/>);

    test('must show correctly the component Counter',()=>{

        expect(wrapper).toMatchSnapshot();
    })
})