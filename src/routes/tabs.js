/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-quotes */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import List from '../screens/List';
import GoogleMap from '../screens/GoogleMap';
import Tasks from '../screens/Tasks';
import ListDetail from '../screens/ListDetail';
import { Icon } from '@rneui/themed';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const HomeScreens = () => {

  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Tasks" component={Tasks}/>
    </HomeStack.Navigator>
  );
};

const ListStack = createStackNavigator();

const ListScreens = () => {

  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="List" component={List}/>
      <HomeStack.Screen name="Detail" component={ListDetail}/>
    </HomeStack.Navigator>
  );
};


const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
	return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#397af8' }}
    >
      <Tab.Screen name="casa" component={HomeScreens} options={{
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
      <Tab.Screen name="Listas" component={ListScreens} options={{
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
