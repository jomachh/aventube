import React, {Component} from 'react';
import Layout from '../components/MovieLayout';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import {connect} from 'react-redux';
import Details from '../../videos/components/Details';

class Movie extends Component {
  closeDetails = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: false,
      },
    });
  };
  render() {
    return (
      <Layout>
        <Header title={this.props.title}>
          <Close onPress={this.closeDetails} />
        </Header>
        <Details {...this.props.movie} />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie,
  };
}

export default connect(mapStateToProps)(Movie);
