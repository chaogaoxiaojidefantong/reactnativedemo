import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Login from './view/login'
import Regist from './view/regist'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default class HelloWorldApp extends Component {
  async componentDidMount(){
    let response = await fetch('http://39.105.190.207:8181/api/adminServiceZuul/Canteen/selectCanteen');
    let responseJson = await response.json();
    
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{title: 'Welcome'}}
        />
      <Stack.Screen name="Profile" component={Regist} options={{title: 'Regist'}}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
