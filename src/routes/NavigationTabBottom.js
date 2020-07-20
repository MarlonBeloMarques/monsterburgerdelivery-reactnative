import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons';
import OrderManually from '../screens/OrderManually';
import UserProfile from '../screens/UserProfile';
import Historic from '../screens/Historic';

import { theme } from '../constants';

const Tab = createBottomTabNavigator();

export default function NavigationTabBottom() {
  return (
    <Tab.Navigator
      initialRouteName="OrderManually"
      tabBarOptions={{
        showLabel: false,
        style: { borderTopColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="user"
                size={theme.sizes.base * 1.5}
                color={focused ? theme.colors.primary : theme.colors.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="OrderManually"
        component={OrderManually}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="opencart"
                size={theme.sizes.base * 1.5}
                color={focused ? theme.colors.primary : theme.colors.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Historic"
        component={Historic}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="archive"
                size={theme.sizes.base * 1.5}
                color={focused ? theme.colors.primary : theme.colors.gray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
