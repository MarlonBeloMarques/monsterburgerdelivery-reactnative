import React, { useRef, useEffect, useState } from 'react';
import { FlatList, Dimensions, Animated } from 'react-native';
import { Block, Text, Photo, Button } from '../elements';
import { theme } from '../constants';
import { data } from '../utils';
import { CheckBoxBurger } from '../components';

export default function OrderManually() {
  const flatListRef = useRef();

  const [burgers, setBurgers] = useState(data.burgers);
  const [indexToAnimated, setIndexToAnimated] = useState(0);

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [top, setTop] = useState(false);

  const [leftContent, setLeftContent] = useState(new Animated.Value(0));
  const [rightContent, setRightContent] = useState(new Animated.Value(0));
  const [topBreadBurger, setTopBreadBurger] = useState(new Animated.Value(0));
  const [bottomBurger, setBottomBurger] = useState(new Animated.Value(0));
  const [widthBurger, setWidthBurger] = useState(new Animated.Value(100));

  const scrollToIndex = (item, index) => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: burgers.indexOf(item),
      viewPosition: 0.5,
    });

    if (index !== indexToAnimated) {
      topBreadBurger.setValue(0);
      bottomBurger.setValue(0);
      widthBurger.setValue(100);
    }

    setIndexToAnimated(index);
    setTop(true);

    setTimeout(() => {
      setTop(false);
    }, 100);
  };

  useEffect(() => {
    if (start) {
      Animated.spring(leftContent, {
        toValue: Dimensions.get('window').width / 2 - 100,
        duration: 150,
        useNativeDriver: false,
      }).start();
    } else if (!start) {
      Animated.spring(leftContent, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: false,
      }).start();
    }

    if (end) {
      Animated.spring(rightContent, {
        toValue: -(Dimensions.get('window').width / 3.5),
        duration: 150,
        useNativeDriver: false,
      }).start();
    } else if (!end) {
      Animated.spring(rightContent, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: false,
      }).start();
    }
  }, [start, end]);

  useEffect(() => {
    if (top) {
      Animated.spring(topBreadBurger, {
        toValue: -150,
        duration: 9000,
        useNativeDriver: false,
      }).start();

      Animated.timing(bottomBurger, {
        toValue: 80,
        duration: 400,
        useNativeDriver: false,
      }).start();

      Animated.timing(widthBurger, {
        toValue: 160,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  }, [top]);

  useEffect(() => {
    setTimeout(() => {
      scrollToIndex(
        burgers[Math.abs(burgers.length / 2)],
        burgers.indexOf(burgers[Math.abs(burgers.length / 2)])
      );
    }, 100);
  }, []);

  const checkScroll = ({ layoutMeasurement, contentOffset, contentSize }) => {
    if (contentOffset.x <= 20) {
      setStart(true);
    } else {
      setStart(false);
      setEnd(false);
    }
    if (layoutMeasurement.width + contentOffset.x >= contentSize.width - 20) {
      setEnd(true);
    }
  };

  return (
    <Block color="white">
      <Block flex={false} padding={[theme.sizes.padding, theme.sizes.padding]}>
        <Block flex={false}>
          <Text bold secondary h3>
            Order Manually
          </Text>
        </Block>
        <Block row flex={false} padding={[theme.sizes.padding, 0]}>
          <Block
            card
            flex={false}
            color="tertiary"
            padding={[theme.sizes.caption / 2, theme.sizes.base]}
          >
            <Text white>{burgers[indexToAnimated].type}</Text>
          </Block>
        </Block>
        <CheckBoxBurger sizes={data.sizes} />
      </Block>
      <Block
        flex={false}
        animated
        style={{ left: (start && leftContent) || (end && rightContent) }}
      >
        <FlatList
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          data={burgers}
          getItemLayout={(data, index) => ({
            length: Dimensions.get('window').width / 2,
            offset: (Dimensions.get('window').width / 2) * index,
            index,
          })}
          horizontal
          snapToAlignment="center"
          snapToInterval={Dimensions.get('window').width / 2}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item, index }) => (
            <Button style onPress={() => scrollToIndex(item, index)}>
              <Block
                flex={false}
                width={Dimensions.get('window').width / 2}
                height={Dimensions.get('window').height / 2}
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
                    index={3}
                    center
                    middle
                    style={{
                      top: index === indexToAnimated ? topBreadBurger : 0,
                    }}
                  >
                    <Photo
                      width={index === indexToAnimated ? widthBurger : 100}
                      animated
                      absolute
                      content
                      resizeMode="contain"
                      image={item.image_burgerTop}
                    />
                  </Block>
                  <Block flex={false} absolute animated index={2} center middle>
                    <Photo
                      width={index === indexToAnimated ? widthBurger : 100}
                      animated
                      absolute
                      content
                      resizeMode="contain"
                      image={item.image_content}
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
                      absolute
                      content
                      resizeMode="contain"
                      image={item.image_burgerBottom}
                    />
                  </Block>
                </Block>
              </Block>
            </Button>
          )}
          onScroll={({ nativeEvent }) => checkScroll(nativeEvent)}
        />
      </Block>
    </Block>
  );
}
