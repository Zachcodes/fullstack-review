// this is for export const createStore = 'hello'
import { createStore, applyMiddleware } from 'redux';
// export default const promiseMiddleware = 'hello'
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';

export default createStore(userReducer, applyMiddleware(promiseMiddleware));
