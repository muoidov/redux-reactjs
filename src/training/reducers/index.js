import status from'../cons/status';
import sort from '../cons/sort';
import {combineReducers} from 'redux';
 const myReducer=combineReducers({status,sort});
export default myReducer;