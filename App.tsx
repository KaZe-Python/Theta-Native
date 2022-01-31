import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeStack from './src/stack/HomeStack';

export default function App() {
  return (
    <NavigationContainer>
      {true ? <HomeStack /> : null}
    </NavigationContainer>
  );
}