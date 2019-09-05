import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Suggestion = props => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={{uri: props.item.Poster}} />
        <View style={styles.genreContainer}>
          <Text style={styles.genre}>{props.item.Type}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {props.item.Title}
        </Text>
        <Text style={styles.year}>{props.item.Year}</Text>
        <Text style={styles.rating}>imdb ID: {props.item.imdbID}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
  },
  left: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#192F6C',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genreContainer: {
    borderRadius: 5,
    position: 'absolute',
    left: 3,
    top: 0,
    paddingVertical: 5,
    paddingHorizontal: 7,
    backgroundColor: 'black',
  },
  genre: {
    color: 'white',
    fontSize: 11,
  },
});

export default Suggestion;
