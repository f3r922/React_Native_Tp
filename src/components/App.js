/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppStack } from '../routes/app';
import { NavigationContainer } from '@react-navigation/native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const App = () => {

  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
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
  },
  buttonGrid: {
    elevation: 3,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#606060',
    width: WIDTH * .4,
    height: HEIGHT * .4,
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

export default App;
