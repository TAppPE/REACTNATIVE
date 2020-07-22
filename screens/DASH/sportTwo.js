import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/colors';

const sportTwo = () => {
    return (
      <View style={styles.screen}>
          <View style={styles.header}><Text style={styles.sportHeader}>Football</Text></View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../src/assets/football.jpg')} />
          </View>
          
          <View style={styles.skills}>
          <View style={styles.buttonContainer}>
                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                     <TouchableOpacity 
                            onPress={() => navigation.navigate('')}>
                           <Text style={{fontSize: 30, color: Colors.primary}}>#1</Text>
                     </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 30, color: Colors.primary}}>#2</Text>
                            </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 30, color: Colors.primary}}>#3</Text>
                            </TouchableOpacity>
                </LinearGradient>
              </View>

              <View style={styles.buttonContainerB}>
                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                     <TouchableOpacity 
                            onPress={() => navigation.navigate('')}>
                           <Text style={{fontSize: 30, color: Colors.primary}}>#4</Text>
                     </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 30, color: Colors.primary}}>#5</Text>
                            </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 30, color: Colors.primary}}>#6</Text>
                            </TouchableOpacity>
                </LinearGradient>
                </View>

             <View style={styles.buttonContainerC}>
                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 30, color: Colors.primary}}>#7</Text>
                            </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={["white", Colors.tertiary]} style={{padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 30, color: Colors.primary}}>#8</Text>
                            </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={["white", Colors.tertiary]} style={{elevation: 5, padding: 10, alignItems: 'center', borderRadius: 15, height: 60, width: 60, elevation: 3, marginRight: 35}}>
                           <TouchableOpacity 
                                onPress={() => navigation.navigate('StartAppB', {screen: 'StartAppB'})}>
                                <Text style={{fontSize: 30, color: Colors.primary}}>#9</Text>
                            </TouchableOpacity>
                </LinearGradient>
                </View>
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
  sportHeader: {
    fontSize: 60,
    color: Colors.tertiary,
    marginBottom: -200,
  },
  header: {
    marginTop: 150,
     marginBottom: -100,
     zIndex: 40
  },
   buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    margin: 20
   },
   buttonContainerB: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    margin: 20
   },
   buttonContainerC: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    margin: 20
   },
   imageContainer: {
     flex:1, 
     justifyContent: "center",
     resizeMode: "stretch",
     height: 200
   },
   image: {
     height: 200,
     resizeMode: 'cover',
   },
   skills: {
     borderColor: "#888989",
     borderWidth: 1,
     height: 320,
     width: 290,
     borderRadius: 40
   }

});

export default sportTwo;