import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { Text, TextInput, AnimatedText } from 'react-native-cross-platform-text';
import { LinearGradient } from 'expo-linear-gradient';
import * as SVG from 'react-native-svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay,faAirFreshener,faAnchor } from '@fortawesome/free-solid-svg-icons';

import Colors from '../../constants/colors';

const studentDash = ({ navigation }) => {
    return (
      <View style={styles.screen}>
          <View style={styles.welcome}><Text style={styles.welcomeText}>T<Text style={{color: "red"}}>A</Text>pp</Text></View>
          
          <View>
            <Text style={styles.headline}>Hi Sam,</Text>
          </View>
          <View>
            <Text style={styles.headlineText}>welcome to your dashboard</Text>
          </View>
          <View style={styles.dashbox}>
              <View styles={styles.row} flexDirection="row">
                <View style={styles.button}>
                    <Image source={require('../../src/assets/football.jpg')} style={styles.image}/>
                  </View>
                  <View style={styles.circleColumn}>
                    <View style={styles.circles}></View>
                    <View style={styles.circles}></View>
                    <View style={styles.circles}></View>
                    <View style={styles.circles}></View>
                  </View>

                  <View style={styles.recordedColumn}>
                    <View style={styles.recorded}><Text style={styles.recordedText}>Recorded</Text></View>
                    <View style={styles.recordedNum}><Text style={styles.recordedTotal}>2/4</Text></View>
                  </View>

                  <View style={styles.acceptedColumn}>
                      <View style={styles.accepted}><Text style={styles.acceptedText}>Accepted</Text></View>
                      <View style={styles.acceptedNum}><Text style={styles.acceptedTotal}>1/4</Text></View>
                  </View>
              </View>
              
              
              <View styles={styles.row} flexDirection="row">
                <View style={styles.button}>
                    <Image source={require('../../src/assets/tennis.jpg')} style={styles.image}/>
                </View>
                  
                <View style={styles.circleColumn}>
                    <View style={styles.circles}></View>
                    <View style={styles.circles}></View>
                    <View style={styles.circles}></View>
                    <View style={styles.circles}></View>
                </View>

                <View style={styles.recordedColumn}>
                    <View style={styles.recorded}><Text style={styles.recordedText}>Recorded</Text></View>
                    <View style={styles.recordedNum}><Text style={styles.recordedTotal}>1/4</Text></View>
                </View>

                <View style={styles.acceptedColumn}>
                    <View style={styles.accepted}><Text style={styles.acceptedText}>Accepted</Text></View>
                    <View style={styles.acceptedNum}><Text style={styles.acceptedTotal}>0/4</Text></View>
                </View>
              </View>
              
              
              <View styles={styles.row} flexDirection="row">
                <View style={styles.button}>
                     <Image source={require('../../src/assets/basketball.jpg')} style={styles.image}/>
                </View>
                <View style={styles.circleColumn}>
                     <View style={styles.circles}></View>
                     <View style={styles.circles}></View>
                     <View style={styles.circles}></View>
                     <View style={styles.circles}></View>
                </View>

                <View style={styles.recordedColumn}>
                    <View style={styles.recorded}><Text style={styles.recordedText}>Recorded</Text></View>
                    <View style={styles.recordedNum}><Text style={styles.recordedTotal}>3/4</Text></View>
                </View>

                <View style={styles.acceptedColumn}>
                      <View style={styles.accepted}><Text style={styles.acceptedText}>Accepted</Text></View>
                      <View style={styles.acceptedNum}><Text style={styles.acceptedTotal}>3/4</Text></View>
                </View>
              </View>
          </View>
          <View style={styles.finalContainer}>
          <LinearGradient colors={[Colors.secondary, Colors.primary]} style={{width: 50,
                height: 50,
                borderRadius: 500,
                zIndex: 20,
                marginTop: -10}}>
          </LinearGradient>
          </View>
          <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faPlay} size={25} color={"white"} />
          </View>

          <View style={styles.icon}><Image source={require('../../src/assets/play-button.svg')} style={{ height: undefined, width: undefined}}/>
          </View>
         
        <View style={styles.clubInfoContainer}>
           <View style={styles.clubInfoHeader}>
             <Text style={styles.clubInfoTextHeader}>Club Details</Text>
           </View>
           <View style={styles.clubInfoSport}>
             <Text style={styles.clubInfoTextSport}>Football</Text>
           </View>
           <View style={styles.clubDetails}>
             <Text style={styles.clubInfoTextDetails}>Name</Text>
             <Text style={styles.clubInfoTextDetails}>Club</Text>
          </View>
          <View style={styles.clubDetails}>
             <Text style={styles.clubInfoTextDetails}>Email</Text>
             <Text style={styles.clubInfoTextDetails}>Mobile</Text>
           </View>
           <View style={styles.clubInfoSport}>
             <Text style={styles.clubInfoTextSport}>Basketball</Text>
           </View>
           <View style={styles.clubDetails}>
             <Text style={styles.clubInfoTextDetails}>Name</Text>
             <Text style={styles.clubInfoTextDetails}>Club</Text>
          </View>
          <View style={styles.clubDetails}>
             <Text style={styles.clubInfoTextDetails}>Email</Text>
             <Text style={styles.clubInfoTextDetails}>Mobile</Text>
           </View>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    marginTop: 40,
    padding: 10,
    width: 500,
    alignItems: 'flex-start',
    backgroundColor: Colors.tertiary
  },
  welcomeText: {
    fontSize: 20,
    color: Colors.secondary,
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center"
  },
  headline: {
    fontSize: 50,
    marginLeft: 25,
    width: 300
  },
  headlineText: {
    fontSize: 18,
    color: "#888989"
  },
  dashbox: {
    padding: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    display: "flex",
    width: 350,
    height: 260,
    borderColor: '#DADBDC',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 5
  },
  circleColumn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  circles: {
    borderRadius: 500,
    height: 5,
    width: 5,
    backgroundColor: 'green',
    marginTop: 4,
    marginHorizontal: 5,
    marginLeft: -30
  },

  recordedColumn: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  recordedText: {
    
  },
  recordedTotal: {
    fontSize: 30,
    color:"#888989"
  },
  acceptedColumn: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  acceptedText: {
    
  },
  acceptedTotal: {

    fontSize: 30,
    color: "#888989"
  },
  buttonContainer: {
    elevation: 5,
    margin: 10
  },
  button: {
    marginVertical: 10,
    marginRight: 30,
    height: 50,
    width: 100,
    borderRadius: 25
  },
  image: {
    flex: 1,
    height: 50,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 80,
    marginTop: 5,
    marginRight: 10
  },
  finalButton: {
    width: 50,
    height: 50,
    borderRadius: 500,
    backgroundColor: Colors.primary,
    zIndex: 20,
    marginTop: -10
  },
  iconContainer: {
    marginTop: -38,
    marginLeft: 5,
    marginBottom: 25
  },
  clubInfoContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: 400,
    height: 400
  },
  clubInfoTextHeader: {
     fontSize: 24,
     flexDirection: "row",

  },
  clubInfoTextDetails: {
    flexDirection: "row",
    fontSize: 15,
    color: "#888989"
  },
  clubInfoTextSport: {
     fontSize: 15,
     flexDirection: "row",
  },
  clubDetails: {
    flexDirection: "row",
    width: 275,
    justifyContent: "space-evenly"
  },
  icon: {
    color: "black"
  }

});

export default studentDash;