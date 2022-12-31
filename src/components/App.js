/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import { AppStack } from '../routes/app';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../redux/store';


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
