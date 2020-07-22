import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/core';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import SignUp from '../screens/SignUp';
import AppStart from '../screens/StartAppScreen';
import StartAppScreen from '../screens/StartAppScreen';
import StartAppScreenB from '../screens/StartAppScreenB';
import StartAppScreenC from '../screens/StartAppScreenC';
import StudentDash from '../screens/DASH/studentDash';
import CameraDash from '../screens/DASH/cameraDash';
import sportOne from '../screens/DASH/sportOne';
import sportTwo from '../screens/DASH/sportTwo';
import sportThree from '../screens/DASH/sportThree';
import sportFour from '../screens/DASH/sportFour';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';


export default class App extends Component {
    render() { 
        createHomeStack = () =>
        <Stack.Navigator>
          <Stack.Screen name="SignUp" children={SignUp} />
          <Stack.Screen name="StartAppA" component={StartAppScreen} />
          <Stack.Screen name="StartAppB" children={StartAppScreenB} />
          <Stack.Screen name="StartAppC" children={StartAppScreenC} />
      </Stack.Navigator>
      
        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={createHomeStack} />
                    <Drawer.Screen name="AppStart" component={AppStart} />
                    <Drawer.Screen name="StartB" component={StartAppScreenB} />
                    <Drawer.Screen name="StartC" component={StartAppScreenC} />
                    <Drawer.Screen name="StudentDash"  component={StudentDash} />
                    <Drawer.Screen name="CameraDash" component={CameraDash} />
                   
                    <Drawer.Screen name="SportTwo" component={sportTwo} />
                    <Drawer.Screen name="SportThree"  component={sportThree} />
                    <Drawer.Screen name="SportFour" component={sportFour} />
                </Drawer.Navigator>
          </NavigationContainer>
        );
    }
}