import {createStore} from 'redux';
import roootReducer from './reducer';


const store = createStore(roootReducer);

export default store;