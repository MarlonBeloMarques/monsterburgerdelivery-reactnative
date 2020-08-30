import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Block, Text } from '../elements';
import { theme } from '../constants';

export default function AddToCart({
  animatedEvent,
  onHandlerStateChanged,
  translateX,
  maxWidth,
}) {
  return (
    <Block
      flex={false}
      style={{
        borderRadius: theme.sizes.radius,
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,
      }}
      height={60}
      color="tertiary"
      margin={theme.sizes.padding}
    >
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >
        <Animated.View
          style={{
            zIndex: 2,
            borderRadius: theme.sizes.radius,
            position: 'absolute',
            height: 60,
            width: 120,
            backgroundColor: theme.colors.primary,
            padding: theme.sizes.caption,
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [0, maxWidth - 160 - theme.sizes.caption],
                  outputRange: [0, maxWidth - 160 - theme.sizes.caption],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <Block row center>
            <Text center bold white>
              Add to cart
            </Text>
            <Ionicons
              name="md-arrow-forward"
              color={theme.colors.white}
              size={18}
              style={{ paddingHorizontal: theme.sizes.caption }}
            />
          </Block>
        </Animated.View>
      </PanGestureHandler>
      <Block row bottom center padding={[0, theme.sizes.base]}>
        <FontAwesome name="cart-plus" color={theme.colors.white} size={24} />
      </Block>
    </Block>
  );
}
