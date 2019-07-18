// this is for export const createStore = 'hello'
import { createStore, applyMiddleware, combineReducers } from 'redux';
// export default const promiseMiddleware = 'hello'
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer
});
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
