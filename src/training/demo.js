import {createStore} from 'redux';
import {status,sort} from './action/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('Before:',store.getState());

store.dispatch(status());
console.log('After:',store.getState());

store.dispatch(sort({by:'name',value:-1}));
console.log('sort',store.getState());