import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SuggestionListLayout = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    marginStart: 10,
    fontWeight: 'bold',
  },
});

export default SuggestionListLayout;
