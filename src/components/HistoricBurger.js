import React from 'react';
import { Block, Photo, Text } from '../elements';
import { theme } from '../constants';

export default function HistoricBurger() {
  return (
    <Block border row center flex={false} padding={[theme.sizes.base, 0]}>
      <Photo
        image={require('../assets/images/burger.png')}
        width={70}
        content
        resizeMode="contain"
      />
      <Block
        height={40}
        space="between"
        column
        flex={false}
        padding={[0, theme.sizes.padding]}
      >
        <Text bold secondary>
          Monster Meat Burger - M
        </Text>
        <Text tertiary caption>
          R$ 8.99
        </Text>
      </Block>
    </Block>
  );
}
