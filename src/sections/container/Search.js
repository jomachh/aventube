import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TextInput, StyleSheet} from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  _getMovies = async name => {
    const query = await fetch(
      `http://www.omdbapi.com/?s=${name}&page=1&apikey=2dff07bc`,
    );
    const dataMovie = await query.json();

    return dataMovie.Search;
  };

  onSubmit = async () => {
    const searchMovie = await this._getMovies(this.state.text);
    const movieQuery = await fetch(
      `http://www.omdbapi.com/?i=${searchMovie[0].imdbID}&apikey=2dff07bc`,
    );
    const movieData = await movieQuery.json();
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movieData,
      },
    });
  };

  render() {
    return (
      <TextInput
        placeholder="Busca tu película favorita"
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.onSubmit}
        onChangeText={text => this.setState({text})}
        style={styles.search}
      />
    );
  }
}

const styles = StyleSheet.create({
  search: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default connect(null)(Search);
