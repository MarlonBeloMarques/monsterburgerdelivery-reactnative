import React from 'react';
import { Block, Text } from '../elements';
import { theme } from '../constants';
import { HistoricBurger } from '../components';

export default function Historic() {
  return (
    <Block color="white">
      <Block padding={[theme.sizes.padding, theme.sizes.padding]}>
        <Block center row flex={false} padding={[0, 0, theme.sizes.padding, 0]}>
          <Text bold secondary h3>
            Historic
          </Text>
        </Block>
        <HistoricBurger />
        <HistoricBurger />
        <HistoricBurger />
      </Block>
    </Block>
  );
}
