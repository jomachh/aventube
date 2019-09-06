import React, {Component} from 'react';
import {connect} from 'react-redux';

import Home from './Views/container/Home';
import Header from './sections/components/Header';
import SuggestionList from './videos/container/SuggestionList';
import Movie from './Views/container/Movie';
import Search from './sections/container/Search';

class AppLayout extends Component {
  async getMovies(name, page) {
    const query = await fetch(
      `http://www.omdbapi.com/?s=${name}&page=${page}&apikey=2dff07bc`,
    );
    const dataMovie = await query.json();

    return dataMovie.Search;
  }

  async componentDidMount() {
    const firstTenMovies = await this.getMovies('batman', 1);
    this.props.dispatch({
      type: 'SET_FIRST_MOVIES',
      payload: {
        firstTenMovies,
      },
    });
    const secondTenMovies = await this.getMovies('superman', 2);
    this.props.dispatch({
      type: 'SET_SECOND_MOVIES',
      payload: {
        secondTenMovies,
      },
    });
  }

  render() {
    if (this.props.selectedMovie) {
      return (
        <Home>
          <Movie title={this.props.selectedMovie.Title} />
        </Home>
      );
    } else {
      return (
        <Home>
          <Header />
          <Search />
          <SuggestionList />
        </Home>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  };
}

export default connect(mapStateToProps)(AppLayout);
