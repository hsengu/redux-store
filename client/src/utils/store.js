import { createStore } from 'redux';
import { reduxReducer } from './reducers';

const store = createStore(reduxReducer);

export default store;