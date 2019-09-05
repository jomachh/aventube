import {createStore} from 'redux';
import reducer from '../reducers/MovieReducer';

const store = createStore(reducer, {
  firstTenMovies: [],
  secondTenMovies: [],
});

export default store;
