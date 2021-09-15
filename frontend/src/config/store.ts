import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { KEY_STORE } from '../common/constants';
import app from '../component/app/reducer';

const reducers = combineReducers({ app });
const item = localStorage.getItem(KEY_STORE);
const state = item ? JSON.parse(item) : {};
const store = createStore(
    reducers,
    state,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() =>
    localStorage.setItem(KEY_STORE, JSON.stringify(store.getState()))
);

export default store;
