
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
//import * as Font from 'expo-font';
//import { AppLoading } from 'expo';
//import { useFonts } from '@use-expo/font';

//import TappNav from './navigation/dashboardNav';
//import Header from './src/components/Header';
//import StartAppScreen from './screens/StartAppScreen';

//import StartAppScreenC from './screens/StartAppScreenC';

//const fetchFonts = () => {
//  return Font.loadAsync({
 //   'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  //  'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf')
 // });
//};


  //const [dataLoaded, setDataLoaded] = useState(false);

  //if (!dataLoaded) {
   //return (
    //<AppLoading 
      //startAsync={fetchFonts} 
      //onFinish={() => setDataLoaded(true)} 
      //onError={(err) => console.log(err)}
     // />
   // );
   //}
  
import SignUp from './screens/SignUp';
import AppStart from './screens/StartAppScreen';
import AppStartC from './screens/StartAppScreenC';
import StartAppScreenB from './screens/StartAppScreenB';
import StudentDash from './screens/DASH/studentDash';
import CameraDash from './screens/DASH/cameraDash';
import sportOne from './screens/DASH/sportOne';
import sportTwo from './screens/DASH/sportTwo';
import sportThree from './screens/DASH/sportThree';
import sportFour from './screens/DASH/sportFour';
  


//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//import { createDrawerNavigator } from '@react-navigation/drawer';

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
        <Stack.Screen name="AppStart"   component={AppStart}/>
        <Stack.Screen name="SignUp"   component={SignUp}/>
        <Stack.Screen name="AppStartB"   component={StartAppScreenB}/>
        <Stack.Screen name="AppStartC"   component={AppStartC}/>
        <Stack.Screen name="StudentDash"   component={StudentDash}/>
        <Stack.Screen name="CameraDash"   component={CameraDash}/>
        <Stack.Screen name="sportOne"   component={sportOne}/>
        <Stack.Screen name="sportTwo"   component={sportTwo}/>
        <Stack.Screen name="sportThree"   component={sportThree}/>
        <Stack.Screen name="sportFour"   component={sportFour}/>
      </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});