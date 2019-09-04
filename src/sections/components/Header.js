import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Header = () => {
  return (
    <View>
      <SafeAreaView style={styles.SafeAreaView}>
        <View>
          <StatusBar backgroundColor={'#3A508B'} />
        </View>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
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
  container: {
    paddingVertical: 5,
    alignItems: 'center',
  },
});

export default Header;
