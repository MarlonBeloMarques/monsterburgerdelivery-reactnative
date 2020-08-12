import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import OrderManually from '../screens/OrderManually';
import UserProfile from '../screens/UserProfile';
import Historic from '../screens/Historic';

import { theme } from '../constants';
import { Block } from '../elements';

const { width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', backgroundColor: theme.colors.white }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (index === 0) {
          return (
            <TouchableOpacity
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: theme.colors.white,
                paddingBottom: theme.sizes.padding,
                paddingTop: theme.sizes.padding,
                borderRadius: theme.sizes.radius * 2,
                zIndex: 3,
                marginRight: width / 7,
              }}
            >
              <Feather
                name="user"
                size={theme.sizes.base * 1.2}
                color={isFocused ? theme.colors.primary : theme.colors.gray}
              />
            </TouchableOpacity>
          );
        }

        if (index === 1) {
          return (
            <TouchableOpacity
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                paddingBottom: theme.sizes.padding,
                paddingTop: theme.sizes.padding,
                marginLeft: width / 2.8,
                width: width / 3.5,
                backgroundColor: theme.colors.primary,
                alignItems: 'center',
                position: 'absolute',
                zIndex: 2,
                borderRadius: theme.sizes.radius * 2,
              }}
            >
              <FontAwesome
                name="opencart"
                size={theme.sizes.base * 1.2}
                color={isFocused ? theme.colors.tertiary : theme.colors.gray}
              />
            </TouchableOpacity>
          );
        }

        if (index === 2) {
          return (
            <TouchableOpacity
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: theme.colors.white,
                paddingBottom: theme.sizes.padding,
                paddingTop: theme.sizes.padding,
                borderRadius: theme.sizes.radius * 2,
                zIndex: 3,
                marginLeft: width / 7,
              }}
            >
              <FontAwesome
                name="archive"
                size={theme.sizes.base * 1.2}
                color={isFocused ? theme.colors.primary : theme.colors.gray}
              />
            </TouchableOpacity>
          );
        }
      })}
      <Block
        width={width}
        height={50}
        fullBorder
        absolute
        index={1}
        color="primary"
        margin={[theme.sizes.padding * 2, 0, 0, 0]}
      />
    </View>
  );
}

export default function NavigationTabBottom() {
  return (
    <Tab.Navigator
      initialRouteName="OrderManually"
      tabBarOptions={{
        showLabel: false,
        style: { borderTopColor: 'transparent' },
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="UserProfile" component={UserProfile} />
      <Tab.Screen name="OrderManually" component={OrderManually} />
      <Tab.Screen name="Historic" component={Historic} />
    </Tab.Navigator>
  );
}
