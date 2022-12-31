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
	SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Avatar, Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { appSelector } from '../redux/appRedux';
import { useDispatch } from 'react-redux';
import { appActions } from '../redux/appRedux';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Profile = () => {

  const Stack = createStackNavigator();

  const user = useSelector(appSelector.user);
  const dispatch = useDispatch();
  const setAuth = () => {
    dispatch(appActions.setUser(null));
  };

  return (

    user ? 
    <SafeAreaProvider>
      <Header title="perfil"/>
        <View style={{ justifyContent:'flex-end', alignItems: 'center', flex: 1 }}>
          <Avatar
            size={150}
            rounded
            source={{ uri: "https://avatars.githubusercontent.com/u/89277558?s=400&u=8b593af3997cf05bea9a81df97ad2284dddc359a&v=4" }}
          />
        </View>
        <View style={{ justifyContent:'flex-start', alignItems: 'center', flex: 1}}>
          <Text style={styles.textButton}>{user.name} {user.lastname}</Text>
        </View>
        <View style={{flex:0.5, alignItems:'center', justifyContent:'center'}}>
          <Button title="Log Out" onPress={ () => setAuth() } buttonStyle={{backgroundColor:'red', borderRadius: 50, justifyContent:'flex-start'}} />
        </View>
    </SafeAreaProvider>
    :
    <Stack.Screen name="Login" component={Login}/>
  );
};

const styles = StyleSheet.create({
  textButton: {
    justifyContent: 'center',
    color:'black',
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

export default Profile;
