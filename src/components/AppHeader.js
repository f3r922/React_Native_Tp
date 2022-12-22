/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Header, Icon } from '@rneui/themed';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
	TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const AppHeader = (props) => {
    const { title = 'Pilar Tecno', rightComponent, leftComponent } = props;

  return (
    <Header
      leftComponent= { leftComponent ? leftComponent : null}
      rightComponent={ rightComponent ? rightComponent :
        (
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
            >
              <Icon type="antdesign" name="rocket1" color="white" />
            </TouchableOpacity>
          </View>
        )
      }
      centerComponent={{ text: title, style: styles.heading }}
    />
    );
};

const styles = StyleSheet.create({
  headerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#397af8',
		marginBottom: 20,
		width: '100%',
		paddingVertical: 15,
	},
	heading: {
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
	},
	headerRight: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 5,
	},
	subheaderText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default AppHeader;
