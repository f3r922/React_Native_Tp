import { createStore } from 'redux';
import { appReducer } from './appRedux';

//createStore para devolver el estado global pasándole un reducer
const store = createStore(appReducer);
export default store;
