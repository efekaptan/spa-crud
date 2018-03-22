import { combineReducers } from 'redux';
import customer from './customer';
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
    customer,
    toastr: toastrReducer
});