import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/EmptyList';
import Separator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';
// import {API} from '../../../utils/api';
import console from 'console';

class SuggestionList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      suggestionList: [],
    };
  }

  // getMovies = async (name, page) => {
  //   const data = await API(name, page);
  //   this.setState({
  //     suggestionList: data.Search,
  //   });
  // };

  renderItem = item => {
    return <Suggestion {...item} />;
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?s=batman&page=1&apikey=2dff07bc')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          suggestionList: responseJson.Search,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.loading) {
      return (
        <Layout title="No te emociones">
          <Empty text={'Cargando..'} />
        </Layout>
      );
    } else {
      return (
        <Layout title="Recomendado para vos">
          <FlatList
            data={this.state.suggestionList}
            ListEmptyComponent={() => (
              <Empty
                text={
                  'No hay elementos en la lista \n Favor reintentar más tarde'
                }
              />
            )}
            renderItem={this.renderItem}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Layout>
      );
    }
  }
}

export default SuggestionList;
