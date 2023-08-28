import React, {useState, useEffect} from 'react';
import {View, Image, Animated, StyleSheet} from 'react-native';

// Reemplaza 'logo.png' con la ruta de la imagen de tu logo
const logoImage = require('../assets/logo.png');

const LoadingScreen = ({navigation}) => {
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const fadeOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 4500, // Tiempo que el logo permanecerá visible (en milisegundos)
        useNativeDriver: true,
      }).start(() => navigation.replace('NextScreen'));
    };

    fadeOut();
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, {opacity: fadeAnim}]}>
        {/* Cambia el componente Image para mostrar tu logo */}
        <Image source={logoImage} style={styles.logo} />
      </Animated.View>
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
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default LoadingScreen;
