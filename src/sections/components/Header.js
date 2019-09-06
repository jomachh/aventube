import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Header = props => {
  return (
    <View>
      <SafeAreaView style={styles.SafeAreaView}>
        <View>
          <StatusBar backgroundColor={'#3A508B'} />
        </View>
        {props.title == null ? (
          <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.logo}
            />
          </View>
        ) : (
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#3A508B',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  containerLogo: {
    height: 60,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerTitle: {
    height: 60,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
