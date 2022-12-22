/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-quotes */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import List from '../screens/List';
import GoogleMap from '../screens/GoogleMap';
import Tarea from '../screens/Task';
import { Icon } from '@rneui/themed';


const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
	return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#397af8' }}
    >
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" type='font-awesome-5' color={'purple'}  />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user" type='font-awesome-5' color={'purple'}  />
          ),
        }}/>
      <Tab.Screen name="List" component={List} options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Icon name="list" type='font-awesome-5' color={'purple'} />
          ),
        }}/>
      <Tab.Screen name="Map" component={GoogleMap} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <Icon name="map" type='font-awesome-5' color={'purple'}  />
          ),
        }}/>
    </Tab.Navigator>
  );
};
