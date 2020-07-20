import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Platform } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { theme } from '../constants';
import { Photo } from '../elements';

import back from '../assets/icons/back.png';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackImage: () => (
            <Photo
              image={back}
              style={{ width: 26, height: 26, marginRight: 5 }}
            />
          ),
          headerTransparent: true,
          headerBackTitleVisible: null,
          title: null,
          headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
            padding: theme.sizes.base,
          },
          headerRightContainerStyle: {
            alignItems: 'center',
            marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
            padding: theme.sizes.base,
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
