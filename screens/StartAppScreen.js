import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

import Card from '../src/components/Card';
import Colors from '../constants/colors';

const Cards = Card;
const Colore = Colors;
//import BodyText from '../components/BodyText';

const StartAppScreen = () => {
     return (
         <View style={styles.screen}>
             <Text style={styles.header}>T<Text style={{color: "red"}}>A</Text>pp PE</Text>
         
         <Cards style={styles.inputContainer}> 
         <View style={styles.imageContainer}>
             <Image source={require('../src/assets/sport.png')} style={styles.image} 
         resizeMode="contain" /> 
         <View style={styles.textContainer}><Text style={styles.text}>SHOW OFF SOME SKILL</Text></View>
         </View>
        </Cards>
       
        <View style={styles.buttonContainer}>
                <LinearGradient colors={[Colore.secondary, Colore.primary]} style={{padding: 10, alignItems: 'center', borderRadius: 20, width: 100, elevation: 5}}>
                     <TouchableOpacity 
                            onPress={() => navigation.navigate('SignUp')}>
                           <Text style={{fontSize: 20, color: 'white'}}>SKIP</Text>
                     </TouchableOpacity>
                </LinearGradient>
        </View>
        <View  style={styles.buttonContainer}>
                <LinearGradient colors={[Colore.secondary, Colore.primary]} style={{padding: 10, alignItems: 'center', borderRadius: 20, width: 100, elevation: 5}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 20, color: 'white'}}>NEXT</Text>
                            </TouchableOpacity>
                </LinearGradient>
        </View>
    </View>
     )
};

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: Colore.tertiary,
  },
  inputContainer: {
      marginTop: 0,
      padding: 25,
       width: 500,
       alignItems: 'center'
  },
  text: {
    borderRadius: 25,
    fontSize:25,
    textAlign: 'center',
    fontWeight: "100"
  },
  textContainer: {
    margin: 40,
    alignItems: 'center',
    fontSize: 40

  },
  buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      borderRadius: 20
  },
  button: {
      width: 90,
      borderRadius: 20,
      elevation: 10,
      color: 'blue'
  },
  imageContainer: {
   borderRadius: 200,
   borderWidth: 0,
   borderColor: 'lightgrey',
   width: '90%',
   height: 300,
   padding: 50
  },
  image: {
      width: '100%',
      height: '100%',
      margin: 5,
      marginTop: 24
  },
  header: {
      marginTop: 50,
      color: Colore.primary,
      fontSize: 25
  }
});

export default StartAppScreen;