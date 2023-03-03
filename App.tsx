import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import StackRoutes from './src/routes/StackRoutes';
import { StatusBar } from 'expo-status-bar';




export default function App() {

  return (
        <NavigationContainer>
        <StackRoutes/>
        <StatusBar hidden={true} />
      </NavigationContainer>

  );
}