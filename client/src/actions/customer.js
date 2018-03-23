import { GET_CUSTOMERS, ADD_CUSTOMER, GET_CUSTOMER, EDIT_CUSTOMER, DELETE_CUSTOMER } from './actionTypes';
import { apiUrl, pageSize } from '../configuration';
import { toastr } from 'react-redux-toastr';

export const getCustomers = (pageIndex) => async (dispatch, getState) => {

    const apiResponse = await fetch(`${apiUrl}/customers?pageIndex=${pageIndex}&pageSize=${pageSize}`);

    const responseData = await apiResponse.json();

    return dispatch({
        type: GET_CUSTOMERS,
        response: responseData
    });
}

export const getCustomer = (id) => async (dispatch, getState) => {

    const apiResponse = await fetch(`${apiUrl}/customers/${id}`);

    const responseData = await apiResponse.json();
    return dispatch({
        type: GET_CUSTOMER,
        response: responseData
    });
}

export const addCustomer = (customer) => async (dispatch, getState) => {
    try {
        const apiResponse = await fetch(`${apiUrl}/customers`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(customer)
            });

        const responseData = await apiResponse.json();

        return dispatch({
            type: ADD_CUSTOMER,
            response: responseData
        });
    } catch (error) {
        toastr.error('Error', 'Problem occured during saving customer.');
    }
}

export const editCustomer = (customer) => async (dispatch, getState) => {
    try {
        const apiResponse = await fetch(`${apiUrl}/customers/${customer.id}`,
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(customer)
            });

        const responseData = await apiResponse.json();

        return dispatch({
            type: EDIT_CUSTOMER,
            response: responseData
        });
    } catch (error) {
        toastr.error('Error', 'Problem occured during saving customer.');
    }
}

export const deleteCustomer = (id) => async (dispatch, getState) => {
    const apiResponse = await fetch(`${apiUrl}/customers/${id}`,
        {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        });

    const responseData = await apiResponse.json();

    return dispatch({
        type: DELETE_CUSTOMER,
        response: responseData
    });
}