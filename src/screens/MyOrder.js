import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Block, Text, Button } from '../elements';
import { theme } from '../constants';
import { MyOrderBurger } from '../components';

export default function MyOrder() {
  return (
    <Block color="white">
      <Block flex={false} padding={theme.sizes.padding}>
        <Block row flex={false} padding={[0, 0, theme.sizes.padding * 2, 0]}>
          <Text bold secondary h3>
            My Order
          </Text>
          <Block bottom row>
            <Button style>
              <Ionicons
                name="md-trash"
                size={20}
                color={theme.colors.secondary}
              />
            </Button>
          </Block>
        </Block>
        <MyOrderBurger />
        <MyOrderBurger />
        <MyOrderBurger />
        <Block
          space="between"
          center
          row
          flex={false}
          padding={[theme.sizes.base, theme.sizes.padding, theme.sizes.base, 0]}
        >
          <Block
            middle
            center
            width={80}
            height={40}
            flex={false}
            color="yellow"
            style={{ borderRadius: theme.sizes.radius }}
          >
            <Ionicons name="md-car" size={24} color={theme.colors.primary} />
          </Block>
          <Block width={100} flex={false}>
            <Text bold secondary>
              Delivery
            </Text>
          </Block>
          <Text bold tertiary>
            R$ 8.99
          </Text>
        </Block>
        <Block
          border
          center
          row
          space="between"
          flex={false}
          padding={[theme.sizes.padding, 0]}
        >
          <Text bold h2 secondary>
            Total:
          </Text>
          <Text bold size={28} primary>
            R$ 19.00
          </Text>
        </Block>
        <Block padding={[theme.sizes.base, 0]} space="between" row flex={false}>
          <Text bold>Estimated delivery time</Text>
          <Text primary bold>
            15 - 25 min
          </Text>
        </Block>
        <Block padding={[theme.sizes.padding, 0]}>
          <Button shadow color="primary">
            <Text bold white center>
              Finish
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
}
