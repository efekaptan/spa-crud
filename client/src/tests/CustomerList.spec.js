import React from 'react'
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CustomerList from '../components/customer/CustomerList';
import getContextProvider, { contextObject } from './ContextProvider';

configure({ adapter: new Adapter() });

const mockCustomers = [{ "id": 15, "firstName": "Eliseo", "lastName": "Goldfarb", "birthday": "1969-11-19T21:00:00.000Z", "gender": "m", "lastContact": "2017-03-18T12:20:06.702Z", "customerLifetimeValue": 1019.91 }, { "id": 14, "firstName": "Iva", "lastName": "Buenrostro", "birthday": "1979-06-30", "gender": "w", "lastContact": "2017-01-02-29T21:08:50.700Z", "customerLifetimeValue": 213.12 }, { "id": 13, "firstName": "Fredrick", "lastName": "Bellah", "birthday": "1991-02-21", "gender": "m", "lastContact": "2017-08-01T11:57:47.142Z", "customerLifetimeValue": 0 }, { "id": 12, "firstName": "Willena", "lastName": "Condrey", "birthday": "1987-05-03", "gender": "w", "lastContact": "2017-07-08T13:18:56.888Z", "customerLifetimeValue": 50.99 }, { "id": 11, "firstName": "Alexis", "lastName": "Kuss", "birthday": "1996-10-12", "gender": "m", "lastContact": "2017-06-01T23:28:56.782Z", "customerLifetimeValue": 191.12 }, { "id": 10, "firstName": "Broderick", "lastName": "Longnecker", "birthday": "1969-11-21", "gender": "m", "lastContact": "2017-03-18T12:20:06.702Z", "customerLifetimeValue": 1019.91 }, { "id": 9, "firstName": "Chanda", "lastName": "Copenhaver", "birthday": "1979-06-30", "gender": "w", "lastContact": "2017-01-02-29T21:08:50.700Z", "customerLifetimeValue": 213.12 }, { "id": 8, "firstName": "Nicky", "lastName": "Slay", "birthday": "1991-02-21", "gender": "m", "lastContact": "2017-08-01T11:57:47.142Z", "customerLifetimeValue": 0 }, { "id": 7, "firstName": "Karoline", "lastName": "Aultman", "birthday": "1987-05-03", "gender": "w", "lastContact": "2017-07-08T13:18:56.888Z", "customerLifetimeValue": 50.99 }, { "id": 6, "firstName": "Clayton", "lastName": "Desousa", "birthday": "1996-10-12", "gender": "m", "lastContact": "2017-06-01T23:28:56.782Z", "customerLifetimeValue": 191.12 }];
const totalCount = 15;

describe('Customer List Snapshot', () => {
    const reactElement = getContextProvider(contextObject,
        <CustomerList customers={mockCustomers} pageIndex="1" totalCount={totalCount} />
    );
    it('Capturing Snapshot of Customer List Snapshot', () => {
        const renderedValue = renderer.create(reactElement).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('Component Render Tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <CustomerList customers={mockCustomers} pageIndex="1" totalCount={totalCount} />
            </MemoryRouter>);
    });

    it('Render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Contains 11 rows', () => {
        expect(wrapper.find('tr').length).toEqual(11);
    });

    it('First row, first name is = "Eliseo"', () => {
        expect(wrapper.find('tr').at(1).find('td').at(1).text()).toEqual('Eliseo');
    });
});