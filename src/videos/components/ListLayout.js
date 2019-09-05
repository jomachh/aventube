import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListLayout = props => {
  return (
    <View
      style={
        props.isCategory ? styles.containerCategory : styles.containerSuggestion
      }>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerSuggestion: {
    paddingVertical: 10,
    flex: 1,
  },
  containerCategory: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    marginStart: 10,
    fontWeight: 'bold',
  },
});

export default ListLayout;
