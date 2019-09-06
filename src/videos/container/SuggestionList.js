import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import Layout from '../components/ListLayout';
import Empty from '../components/EmptyList';
import Separator from '../../sections/components/VerticalSeparator';
import Suggestion from '../components/Suggestion';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    list_1: state.firstTenMovies,
    list_2: state.secondTenMovies,
  };
}

class SuggestionList extends Component {
  async viewMovie(item) {
    const movieQuery = await fetch(
      `http://www.omdbapi.com/?i=${item.imdbID}&apikey=2dff07bc`,
    );
    const movieData = await movieQuery.json();
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movieData,
      },
    });
  }

  renderItem = ({item}) => {
    return (
      <Suggestion
        onPress={() => {
          this.viewMovie(item);
        }}
        {...item}
      />
    );
  };

  render() {
    return (
      <Layout title="Recomendado para vos" isCategory={false}>
        <FlatList
          data={this.props.list_1.concat(this.props.list_2)}
          ListEmptyComponent={() => (
            <Empty
              text={
                'No hay elementos en la lista \n Favor reintentar más tarde'
              }
            />
          )}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={item => item.imdbID}
        />
      </Layout>
    );
  }
}

SuggestionList.defaultProps = {
  list_1: [],
  list_2: [],
};

export default connect(mapStateToProps)(SuggestionList);
