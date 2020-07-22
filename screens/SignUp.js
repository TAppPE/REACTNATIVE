import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Colors from '../constants/colors';
import Input from '../src/components/Input';
import Card from '../src/components/Card';

const Colore = Colors;
const Inputs = Input;
const Cards = Card;


const SignUp = () => {
  return (
      <View style={styles.screen}>
          <View style={styles.textContainer}><LinearGradient colors={[Colors.secondary, Colors.primary]} style={{ width: 500, alignItems: 'center', height: 80, flexDirection: 'column', justifyContent: 'center', elevation: 9}}>
          <Text style={styles.text}>Sign Up</Text>
          </LinearGradient></View>
    <Cards style={styles.card}>
      <View style={styles.inputContainer}>
          <Text style={styles.textInput} >First Name</Text>
          <Inputs style={styles.input} blurOnSubmit />
          <Text style={styles.textInput}>Surname</Text>
          <Inputs style={styles.input} blurOnSubmit />
          <Text style={styles.textInput}>School</Text>
          <Inputs style={styles.input} blurOnSubmit />
          <Text style={styles.textInput}>Position</Text>
          <Inputs style={styles.input} blurOnSubmit />
          <Text style={styles.textInput}>How did you hear about us?</Text>
          <Inputs style={styles.input} blurOnSubmit />
      </View>
      </Cards>
      <View style={styles.button} >
      <LinearGradient colors={[Colore.secondary, Colore.primary]} style={{padding: 10, alignItems: 'center', borderRadius: 20, width: 100, elevation: 5}}><Text style={{fontSize: 15, color: 'white'}}>SIGN UP</Text></LinearGradient>
      </View>
     </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.tertiary,
    },
   input: {
       width: 250,
       height: 40,
       backgroundColor: 'white',
       color: Colors.primary,
       borderRadius: 10,
       borderColor: Colors.tertiary,
       flexDirection: 'row',
       alignItems: 'flex-start',
       justifyContent: 'flex-start'

   },
   inputContainer: {
       alignItems: 'center',
       justifyContent: 'center',


   },
   button: {
       flexDirection: 'row',
       margin: 10,
       width: 500,
       alignItems: 'center',
       justifyContent: 'center',
       color: Colors.primary
   },
   textContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       width: 500,
       padding: 15,
       paddingHorizontal: 70,
       fontSize: 40,
       
       marginTop: 50,
   },
   text: {
       textAlign: 'left',
       paddingHorizontal: 20,
       fontSize: 30,
       color: Colors.tertiary,
       elevation: 9,
   },
   textInput: {
       color: Colors.primary,
       
   },
   headlineContainer: {
      height: 30,
      width: 500,
      marginBottom: 3,
      elevation: 9
   },
   headline: {
       paddingHorizontal: 200,
       marginTop: 70,
       fontSize: 20,
   },
   card: {
       width: 300,
       borderRadius: 40,
       elevation: 4,
       height: 450
   },
   buttonPress: {
       padding: 15
   }


});

export default SignUp;