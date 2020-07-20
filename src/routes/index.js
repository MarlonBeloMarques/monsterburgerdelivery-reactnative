import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Platform } from 'react-native';
import AuthStack from './AuthStack';
import NavigationTabBottom from './NavigationTabBottom';
import { Photo } from '../elements';

import back from '../assets/icons/back-brown.png';
import { theme } from '../constants';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Navigation"
          component={NavigationTabBottom}
          options={{
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
