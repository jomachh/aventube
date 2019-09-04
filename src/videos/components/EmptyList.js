import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyList = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default EmptyList;
