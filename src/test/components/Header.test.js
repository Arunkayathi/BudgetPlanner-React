import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

import {shallow} from 'enzyme';
import Header from '../../components/Header'


test("Should render header correctly",()=>{

        const wrapper=shallow(<Header/>);

        expect(wrapper).toMatchSnapshot();
                // const renderer=new ReactShallowRenderer();
        // renderer.render(<Header/>);
        // expect(renderer.getRenderOutput()).toMatchSnapshot();
});