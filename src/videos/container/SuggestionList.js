import React, {Component} from 'react';
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
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
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

export default connect(mapStateToProps)(SuggestionList);
