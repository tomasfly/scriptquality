import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

// Reemplaza 'logo.png' con la ruta de la imagen de tu logo
const logoImage = require('./logo.png');

const TempSplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default TempSplashScreen;
