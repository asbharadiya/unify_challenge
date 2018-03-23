import {combineReducers} from 'redux';
import testReducer from './test';

const rootReducer = combineReducers({
    // short hand property names
    testReducer
})

export default rootReducer;