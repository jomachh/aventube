import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/EmptyList';

class SuggestionList extends Component {
  render() {
    const list = [];
    return (
      <Layout title="Recomendado para vos">
        <FlatList
          data={list}
          ListEmptyComponent={() => (
            <Empty
              text={
                'No hay elementos en la lista \n Favor Reintentar más tarde'
              }
            />
          )}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
