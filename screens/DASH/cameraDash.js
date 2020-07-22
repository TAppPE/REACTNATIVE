import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/colors';

const cameraDash = () => {
    return (
      <View style={styles.screen}>
          <Text style={styles.inspire}>Be ready to shine</Text>
          <View style={styles.buttonContainer}>
                <LinearGradient colors={[Colors.secondary, Colors.primary]} style={{padding: 10, alignItems: 'center', borderRadius: 20, width: 200, elevation: 5}}>
                     <TouchableOpacity 
                            onPress={() => navigation.navigate('SignUp')}>
                           <Text style={{fontSize: 20, color: 'white'}}>RECORD</Text>
                     </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={[Colors.secondary, Colors.primary]} style={{padding: 10, alignItems: 'center', borderRadius: 20, width: 200, marginTop: 50, elevation: 5}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 20, color: 'white'}}>DASHBOARD</Text>
                            </TouchableOpacity>
                </LinearGradient>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({

  screen: {
    flex: 1,
      padding: 10,
      alignItems: 'center',
      backgroundColor: Colors.tertiary,
  },
  inspire: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingTop: 100,
    width: 300,
    fontSize: 70,
    color: "#888989",
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 20,
    marginTop: -160
  },
  button: {
    
  }

});

export default cameraDash;