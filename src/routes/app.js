/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs }  from './tabs';
import Login from '../screens/Login';
import { useSelector } from 'react-redux';
import { appSelector } from '../redux/appRedux';


const Stack = createStackNavigator();

export const AppStack = () => {

	const user = useSelector(appSelector.user);
	return (
		<Stack.Navigator screenOptions={{headerShown:false}}>
				{
					user ?
					<Stack.Screen name="Main" component={Tabs}/>
					:
					<Stack.Screen name="Login" component={Login}/>
				}
		</Stack.Navigator>
	);
};




