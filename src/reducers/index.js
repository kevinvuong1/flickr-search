import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import searchReducer from './searchReducer';

export default combineReducers({
    form: reduxForm,
    images: searchReducer
});