import React, { useState } from 'react';
import { Button, Block, Text } from '../elements';
import { theme } from '../constants';

export default function CheckBoxBurger({ sizes, response }) {
  const [value, setValue] = useState(1);

  return (
    <Block row middle flex={false}>
      {response({ size: value })}
      {sizes.map((item) => {
        return (
          <Button style onPress={() => setValue(item.key)}>
            <Block
              margin={theme.sizes.caption}
              style={{ borderRadius: theme.sizes.radius }}
              center
              middle
              width={40}
              height={40}
              color="yellow"
              flex={false}
              row
            >
              <Text bold primary h3>
                {item.name}
              </Text>
            </Block>
            {item.key === value && (
              <Block
                margin={theme.sizes.caption}
                style={{ borderRadius: theme.sizes.radius, borderWidth: 2 }}
                center
                middle
                width={40}
                height={40}
                flex={false}
                absolute
                fullBorder
              />
            )}
          </Button>
        );
      })}
    </Block>
  );
}
