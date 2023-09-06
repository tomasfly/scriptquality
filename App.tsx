// In App.js in a new project

import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TempSplashScreen from './components/TempSplashScreen';
// import NextScreen from './components/NextScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TempSplashScreen">
        {/* Reemplaza LoadingScreen por TempSplashScreen */}
        <Stack.Screen
          name="TempSplashScreen"
          component={TempSplashScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="NextScreen" component={NextScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
