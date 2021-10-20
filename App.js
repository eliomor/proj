import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Button, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ScoreScreen from './components/ScoreScreen';
import MainScreen from './components/MainScreen';


const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen 
            name="Main" 
            component={() => <MainScreen/>} 

        />
        <Drawer.Screen 
              name="Score" 
              component={() => <ScoreScreen />}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}