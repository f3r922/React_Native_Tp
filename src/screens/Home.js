/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header  from '../components/AppHeader';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackActions, useNavigation } from '@react-navigation/native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Home = () => {

  const navigation = useNavigation();
  const navigateTo = (route) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaProvider>
      <Header />
      <View style={{flex:1}}>
        <ImageBackground style={{height:HEIGHT, width:WIDTH}} source={require('../assets/images/fondo.jpg')}>
          <View style={ { flexDirection: 'row', flex: 1 } }>
            <View style={{...styles.viewGrid, justifyContent: 'flex-end', paddingBottom: '5%'}}>
                <TouchableOpacity style={{...styles.buttonGrid, backgroundColor: 'green'}}  onPress={()=>navigateTo('Task')}>
                  <Text style={styles.textButton}>TAREAS</Text>
                </TouchableOpacity>
            </View>
            <View style={{...styles.viewGrid, justifyContent: 'flex-end', paddingBottom: '5%'}}>
              <TouchableOpacity style={{...styles.buttonGrid, backgroundColor: 'red'}} onPress={()=>navigateTo('Profile')}>
                <Text style={styles.textButton}>PERFIL</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection:'row', flex: 1 }}>
            <View style={{...styles.viewGrid, justifyContent: 'flex-start', paddingTop: '5%'}}>
              <TouchableOpacity style={{...styles.buttonGrid, backgroundColor: 'blue'}} onPress={()=>navigateTo('List')}>
                <Text style={styles.textButton}>POKEDEX</Text>
              </TouchableOpacity>
            </View>
            <View style={{...styles.viewGrid, justifyContent: 'flex-start', paddingTop: '5%'}}>
              <TouchableOpacity style={{...styles.buttonGrid, backgroundColor: 'purple'}} onPress={()=>navigateTo('Map')}>
                <Text style={styles.textButton}>MAPA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  textButton: {
    justifyContent: 'center',
    color:'white',
    fontSize: 20,
    fontWeight: '700',
  },
  viewGrid: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
    opacity: 0.8,
  },
  buttonGrid: {
    elevation: 3,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#606060',
    width: WIDTH * 0.4,
    height: HEIGHT * 0.2,
    borderRadius: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
