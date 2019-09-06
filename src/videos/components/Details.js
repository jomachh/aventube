import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

const Details = props => {
  return (
    <View>
      <ScrollView>
        <View style={styles.coverContainer}>
          <Image style={styles.cover} source={{uri: props.Poster}} />
        </View>
        <View style={styles.details}>
          <ScrollView horizontal>
            <View style={styles.metadataContainer}>
              <Text style={styles.metadata}>{props.Rated} |</Text>
              <Text style={styles.metadata}>{props.Runtime} |</Text>
              <Text style={styles.metadata}>{props.Genre} |</Text>
              <Text style={styles.metadata}>{props.Released}</Text>
            </View>
          </ScrollView>
          <Text style={styles.title}>Descripción</Text>
          <Text style={styles.description}>{props.Plot}</Text>
          <Text style={styles.subtitle}>Director</Text>
          <Text style={styles.description}>{props.Director}</Text>
          <Text style={styles.subtitle}>Escritores</Text>
          <Text style={styles.description}>{props.Writer}</Text>
          <Text style={styles.subtitle}>Actores</Text>
          <Text style={styles.description}>{props.Actors}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  coverContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  details: {
    marginLeft: 10,
  },
  cover: {
    marginVertical: 10,
    width: 195,
    height: 260,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  subtitle: {
    color: '#44546b',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  metadataContainer: {
    flexDirection: 'row',
  },
  metadata: {
    fontSize: 11,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginRight: 3,
  },
  description: {
    fontSize: 14,
    lineHeight: 22.5,
    color: '#4c4c4c',
  },
});

export default Details;
