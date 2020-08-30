import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { Button, Block, Photo } from '../elements';

export default function Burger({
  scrollToIndex,
  item,
  index,
  indexToAnimated,
  bottomBurger,
  topBreadBurger,
  widthBurger,
  dimensionBurgerClicked,
  response,
}) {
  const elementRef = useRef();
  const [dimensions, setDimensions] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  return (
    <Button
      style
      onPress={() => {
        scrollToIndex(item, index);
        dimensionBurgerClicked(dimensions);
      }}
    >
      {response({ dimensions })}
      <Block
        center
        flex={false}
        width={Dimensions.get('window').width / 2}
        height={Dimensions.get('window').height / 2.8}
      >
        <Block
          flex={false}
          animated
          absolute
          style={{
            bottom: index === indexToAnimated ? bottomBurger : 0,
          }}
        >
          <Block
            key={index}
            flex={false}
            absolute
            animated
            index={10}
            center
            middle
            style={{
              top: index === indexToAnimated ? topBreadBurger : 0,
            }}
          >
            <Photo
              width={index === indexToAnimated ? widthBurger : 100}
              animated
              content
              resizeMode="contain"
              image={item.image_burgerTop}
            />
          </Block>
          <Block flex={false} absolute animated index={2} center middle>
            <Photo
              reference={elementRef}
              width={index === indexToAnimated ? widthBurger : 100}
              animated
              content
              resizeMode="contain"
              image={item.image_content}
              onLayout={(event) => {
                if (elementRef) {
                  elementRef.current.measureInWindow((x, y, width, height) => {
                    setDimensions({
                      x: Dimensions.get('window').width / 2 - (width * 1.2) / 2,
                      y,
                      height,
                      width,
                    });
                  });
                }
              }}
            />
          </Block>
          <Block
            flex={false}
            absolute
            animated
            index={1}
            center
            middle
            style={{ top: 40 }}
          >
            <Photo
              width={index === indexToAnimated ? widthBurger : 100}
              animated
              content
              resizeMode="contain"
              image={item.image_burgerBottom}
            />
          </Block>
        </Block>
      </Block>
    </Button>
  );
}
