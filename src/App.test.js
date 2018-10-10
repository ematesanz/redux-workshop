import React from 'react';

import App from './App';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Button from './Components/Button';

import Tab from './Components/Tab';
import Accordion from './Components/Accordion';
import MyIp from './Components/MyIp';

import { shallow } from 'enzyme';


describe('App', () => {
    const wrapper = shallow(<App/>);
    it('renders without crashing', () => {
        shallow(<App/>);
    });
    it('should renders a `.App`', () => {
        expect(wrapper.find('.App')).toHaveLength(1);
    });

    describe('Header', () => {
        const headerComponent = wrapper.find(Header);
        const { buttonsData, changeActiveIndex } = headerComponent.props();
        //console.log('headerComponent.debug()',headerComponent.debug());

        it('should be one', () => {
            expect(headerComponent).toHaveLength(1);
        });
        it('should have buttonsData props', () => {
            expect(buttonsData).toBeDefined();
            expect(buttonsData.length).toBeGreaterThan(1);
        });
        it('should have a changeActiveIndex function', () => {
            expect(changeActiveIndex).toBeDefined();
        })

    });

    describe('Sidebar', () => {
        const sidebarComponent = wrapper.find('Sidebar');
        const { buttonsData, changeActiveIndex } = sidebarComponent.props();

        it('should be one', () => {
            expect(sidebarComponent).toHaveLength(1);
        })
        it('should have buttonsData props', () => {
            expect(buttonsData).toBeDefined();
        })
    });

    describe('Content', () =>{
        const content = wrapper.find('.content');

        it('should exist', () => {
            expect(content).toHaveLength(1);
        })
    })

    // describe('Render specific component', () => {
    //     const HeaderComponent = wrapper.find(Header);

    //     it('Tab', () => {
    //         const tabComponent = wrapper.find('Tab');
    //         const onClick = jest.fn();
    //         //const tabButton = wrapper.find('[name="tab"]');
    //         const button = shallow(<Button onClick={onClick} />);

    //         button.simulate('click');
    //         expect(onClick).toHaveBeenCalled();

    //     })
    // })
});

