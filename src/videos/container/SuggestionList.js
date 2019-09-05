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
      firstTenSuggestions: [],
      secondTenSuggestions: [],
      // suggestionList: this.firstTenSuggestions.concat(
      //   this.secondTenSuggestions,
      // ),
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

  getFirstTenMovies = name => {
    fetch(`http://www.omdbapi.com/?s=${name}&page=1&apikey=2dff07bc`)
      .then(response => response.json())
      .then(responseJsonPage1 => {
        this.setState({
          firstTenSuggestions: responseJsonPage1.Search,
        });
      })
      .catch(error => console.log(error));
  };

  getSecondTenMovies = name => {
    fetch(`http://www.omdbapi.com/?s=${name}&page=2&apikey=2dff07bc`)
      .then(response => response.json())
      .then(responseJsonPage2 => {
        this.setState({
          loading: false,
          secondTenSuggestions: responseJsonPage2.Search,
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getFirstTenMovies('batman');
    this.getSecondTenMovies('superman');
  }

  render() {
    if (this.state.loading) {
      return (
        <Layout title="Nos estamos conectando con la API">
          <Empty text={'Cargando..'} />
        </Layout>
      );
    } else {
      return (
        <Layout title="Recomendado para vos">
          <FlatList
            data={this.state.firstTenSuggestions.concat(
              this.state.secondTenSuggestions,
            )}
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
}

export default SuggestionList;
