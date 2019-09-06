import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Close = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: '#192F6C',
    width: 25,
    height: 25,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Close;
