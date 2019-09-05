import React, {Component} from 'react';

import Home from './src/Views/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';
// import API from './utils/api';

type Props = {};

export default class App extends Component<Props> {
  // async componentDidMount() {
  //   const movies = await API.getSuggestion('pokemon', '1');
  //   this.setState({
  //     suggestionList: movies,
  //   });
  // }
  render() {
    return (
      <Home>
        <Header />
        <SuggestionList />
      </Home>
    );
  }
}
