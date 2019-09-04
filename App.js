import React, {Component} from 'react';

import Home from './src/Views/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <SuggestionList />
      </Home>
    );
  }
}
