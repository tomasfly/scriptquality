import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NextScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Next Screen</Text>
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
});

export default NextScreen;
