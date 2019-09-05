import React, {Component} from 'react';

import Home from './src/Views/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';
import {Provider} from 'react-redux';
import store from './utils/store';
type Props = {};

export default class App extends Component<Props> {
  async getMovies(name, page) {
    const query = await fetch(
      `http://www.omdbapi.com/?s=${name}&page=${page}&apikey=2dff07bc`,
    );
    const dataMovie = await query.json();

    return dataMovie.Search;
  }

  async componentDidMount() {
    const firstTenMovies = await this.getMovies('batman', 1);
    store.dispatch({
      type: 'SET_FIRST_MOVIES',
      payload: {
        firstTenMovies,
      },
    });
    const secondTenMovies = await this.getMovies('superman', 2);
    store.dispatch({
      type: 'SET_SECOND_MOVIES',
      payload: {
        secondTenMovies,
      },
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}
