import React, {Component} from 'react';
import Layout from '../components/MovieLayout';
import Header from '../../sections/components/Header';

export default class Movie extends Component {
  render() {
    return (
      <Layout>
        <Header title="Camilo" />
      </Layout>
    );
  }
}
