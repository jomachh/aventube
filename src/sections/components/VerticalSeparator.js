import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalSeparator = props => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
});

export default VerticalSeparator;
