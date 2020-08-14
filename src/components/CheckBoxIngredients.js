import React, { useState } from 'react';
import { Block, Button, Text, Photo } from '../elements';
import { theme } from '../constants';

export default function CheckBoxIngredients({ ingredients }) {
  const [value, setValue] = useState(1);

  return (
    <Block flex={false}>
      <Block
        flex={false}
        margin={[0, 0, theme.sizes.caption, theme.sizes.base]}
      >
        <Text h3 bold secondary>
          Ingredients
        </Text>
      </Block>
      <Block row middle flex={false} space="between">
        {ingredients.map((item) => {
          return (
            <Button style onPress={() => setValue(item.key)}>
              <Block
                column
                margin={[
                  0,
                  theme.sizes.caption / 2,
                  0,
                  theme.sizes.caption / 2,
                ]}
                style={{
                  borderRadius: theme.sizes.radius,
                  borderWidth: 2,
                  borderColor: theme.colors.primary,
                }}
                center
                middle
                width={60}
                height={80}
                flex={false}
                row
              >
                <Block
                  center
                  middle
                  margin={theme.sizes.caption / 2}
                  width={45}
                  color={item.color}
                  style={{ borderRadius: theme.sizes.base }}
                >
                  <Photo
                    width={40}
                    content
                    resizeMode="contain"
                    image={item.icon}
                  />
                </Block>
                <Text center bold secondary>
                  {item.name}
                </Text>
              </Block>
              {/* {item.key === value && (
              <Block
                margin={[0, theme.sizes.caption, 0, theme.sizes.caption]}
                style={{ borderRadius: theme.sizes.radius, borderWidth: 2 }}
                center
                middle
                width={50}
                height={80}
                flex={false}
                absolute
                fullBorder
              />
            )} */}
            </Button>
          );
        })}
      </Block>
    </Block>
  );
}
