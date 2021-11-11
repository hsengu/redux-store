import { createStore } from 'redux';
import { reduxReducer } from './reducers';

// Redux store
const store = createStore(reduxReducer);

export default store;