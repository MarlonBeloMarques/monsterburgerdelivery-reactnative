import React, { useState, useRef, useEffect } from 'react';
import { Block, Button, Text, Photo } from '../elements';
import { theme } from '../constants';

export default function CheckBoxIngredients({ ingredients, response }) {
  const [ingredientDimensions, setIngredientDimensions] = useState({});
  const [ingredientId, setIngredientId] = useState(0);

  function Item({ item }) {
    const elementRef = useRef();
    const [ingredientsDimensions, setIngredientsDimensions] = useState([]);
    const [clickedIngredient, setClickedIngredient] = useState({});

    useEffect(() => {
      if (Object.entries(clickedIngredient).length !== 0) {
        ingredientsDimensions.forEach((obj) => {
          if (obj.key === clickedIngredient.key) {
            setIngredientDimensions({
              x: obj.x,
              y: obj.y,
              width: obj.width,
              height: obj.height,
            });

            setIngredientId(clickedIngredient.key);
          }
        });
      }
    }, [clickedIngredient]);

    return (
      <Button
        onPress={() => {
          setClickedIngredient({
            key: item.key,
            image: item.image,
          });
        }}
      >
        <Block
          reference={elementRef}
          onLayout={(event) => {
            if (elementRef) {
              elementRef.current.measureInWindow((x, y, width, height) => {
                setIngredientsDimensions([
                  ...ingredientsDimensions,
                  {
                    key: item.key,
                    x,
                    y,
                    width,
                    height,
                  },
                ]);
              });
            }
          }}
          column
          margin={[0, theme.sizes.caption / 2, 0, theme.sizes.caption / 2]}
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
            <Photo width={40} content resizeMode="contain" image={item.icon} />
          </Block>
          <Text center bold secondary>
            {item.name}
          </Text>
        </Block>
      </Button>
    );
  }

  return (
    <Block>
      {response({
        sourceIngredientDimensions: ingredientDimensions,
        ingredientId,
      })}

      <Block
        flex={false}
        margin={[0, 0, theme.sizes.caption, theme.sizes.base]}
      >
        <Text h3 bold secondary>
          Ingredients
        </Text>
      </Block>
      <Block flex={false} row middle space="between">
        {ingredients.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </Block>
    </Block>
  );
}
