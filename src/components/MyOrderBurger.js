import React from 'react';
import { theme } from '../constants';
import { Block, Photo, Text } from '../elements';

export default function MyOrderBurger() {
  return (
    <Block row center flex={false} padding={[theme.sizes.base, 0]}>
      <Photo
        image={require('../assets/images/burger.png')}
        width={80}
        content
        resizeMode="contain"
      />
      <Block space="between" center row padding={[0, theme.sizes.padding]}>
        <Block flex={false} width={100}>
          <Text bold secondary>
            Monster Meat Burger
          </Text>
        </Block>
        <Text h2 bold secondary>
          M
        </Text>
        <Text bold tertiary>
          R$ 8.99
        </Text>
      </Block>
    </Block>
  );
}
