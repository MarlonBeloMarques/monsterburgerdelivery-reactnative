import React, { useEffect, useState, useRef, useMemo } from 'react';
import { FlatList, Dimensions, Animated } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import Toast from 'react-native-tiny-toast';
import { Block, Text, Photo } from '../elements';
import { theme } from '../constants';
import { data } from '../utils';
import { CheckBoxBurger, Burger, MessageBurgerToast } from '../components';
import CheckBoxIngredients from '../components/CheckBoxIngredients';

const maxWidth = Dimensions.get('window').width;

export const toastError = (msg) =>
  Toast.show(msg, {
    position: Toast.position.center,
    containerStyle: {
      backgroundColor: '#f00',
      borderRadius: 15,
    },
    textStyle: {
      color: '#fff',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 2000,
    animation: true,
  });

export default function OrderManually() {
  const flatListRef = useRef();
  const headerHeight = useHeaderHeight();

  const [burgers, setBurgers] = useState(data.burgers);
  const [initialSelect, setInitialSelect] = useState(true);
  const [myMountedBurger, setMyMountedBurger] = useState(false);
  const [indexToAnimated, setIndexToAnimated] = useState(0);

  const [sourceIngredient, setSourceIngredient] = useState({});
  const [destineIngredient, setDestineIngredient] = useState({});
  const [openMeasurements, setOpenMeasurements] = useState({});

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [top, setTop] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const [leftContent, setLeftContent] = useState(new Animated.Value(0));
  const [rightContent, setRightContent] = useState(new Animated.Value(0));
  const [topBreadBurger, setTopBreadBurger] = useState(new Animated.Value(0));
  const [bottomBurger, setBottomBurger] = useState(new Animated.Value(0));
  const [widthBurger, setWidthBurger] = useState(new Animated.Value(100));

  const [openingInitScale, setOpeningInitScale] = useState(0);
  const [openingInitTranslateY, setOpeningInitTranslateY] = useState(0);
  const [openingInitTranslateX, setOpeningInitTranslateX] = useState(0);

  const [openProgress, setOpenProgress] = useState(new Animated.Value(0));
  const [selectedProgress, setSelectedProgress] = useState(
    new Animated.Value(0)
  );

  const [ingredientId, setIngredientId] = useState(0);

  const [ingredients, setIngredients] = useState([]);

  const [ingredientSelected, setIngredientSelected] = useState({});

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
      setIngredients([]);
    }

    setIngredientSelected({});
    selectedProgress.setValue(0);
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
      setInitialSelect(false);
      scrollToIndex(
        burgers[Math.abs(burgers.length / 2)],
        burgers.indexOf(burgers[Math.abs(burgers.length / 2)])
      );
    }, 100);
  }, []);

  useEffect(() => {
    setIngredientSelected({});
    setAnimationComplete(false);
    if (Object.entries(sourceIngredient).length !== 0) {
      Animated.timing(openProgress, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setAnimationComplete(true);
        setOpenMeasurements({});
        setSourceIngredient({});
        openProgress.setValue(0);
      });

      if (ingredients.length === 0) {
        setOpenMeasurements({
          sourceX: sourceIngredient.x,
          sourceY: sourceIngredient.y - headerHeight,
          sourceWidth: sourceIngredient.width,
          sourceHeight: sourceIngredient.height,
          destX: destineIngredient.x,
          destY:
            destineIngredient.y - (headerHeight + destineIngredient.height + 6),
          destWidth: destineIngredient.width * 1.2,
          destHeight: destineIngredient.height,
        });
      } else {
        setOpenMeasurements({
          sourceX: sourceIngredient.x,
          sourceY: sourceIngredient.y - headerHeight,
          sourceWidth: sourceIngredient.width,
          sourceHeight: sourceIngredient.height,
          destX: destineIngredient.x,
          destY:
            destineIngredient.y -
            (headerHeight + destineIngredient.height + 6) -
            ingredientSelected.height / 2.8,
          destWidth: destineIngredient.width * 1.2,
          destHeight: destineIngredient.height,
        });
      }
    }
  }, [ingredientId]);

  useEffect(() => {
    const aspectRatio = destineIngredient.width / destineIngredient.height;

    if (Object.entries(openMeasurements).length !== 0) {
      const maxDim = openMeasurements.destHeight;
      const srcShortDim = openMeasurements.sourceWidth;
      const srcMaxDim = srcShortDim / aspectRatio;
      setOpeningInitScale(srcMaxDim / maxDim);
      const translateInitY =
        openMeasurements.sourceY + openMeasurements.sourceHeight / 2;
      const translateDestY =
        openMeasurements.destY + openMeasurements.destHeight / 2;
      setOpeningInitTranslateY(translateInitY - translateDestY);
      const translateInitX =
        openMeasurements.sourceX + openMeasurements.sourceWidth / 2;
      const translateDestX =
        openMeasurements.destX + openMeasurements.destWidth / 2;
      setOpeningInitTranslateX(translateInitX - translateDestX);

      Animated.timing(selectedProgress, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setIngredientSelected({
        width: openMeasurements.destWidth,
        height: openMeasurements.destHeight,
        top: openMeasurements.destY,
        left: openMeasurements.destX,
        id: ingredientId,
      });
    }
  }, [openMeasurements]);

  useEffect(() => {
    if (Object.entries(ingredientSelected).length !== 0) {
      if (ingredients.length === 0) {
        setIngredients([
          ...ingredients,
          {
            width: ingredientSelected.width,
            height: ingredientSelected.height,
            top: ingredientSelected.top,
            left: ingredientSelected.left,
            id: ingredientSelected.id,
            zIndex: 6,
          },
        ]);
      } else {
        setIngredients([
          ...ingredients,
          {
            width: ingredientSelected.width,
            height: ingredientSelected.height,
            top:
              ingredients[
                ingredients.indexOf(ingredients[ingredients.length - 1])
              ].top -
              ingredientSelected.height / 2.8,
            left: ingredientSelected.left,
            id: ingredientSelected.id,
            zIndex:
              ingredients[
                ingredients.indexOf(ingredients[ingredients.length - 1])
              ].zIndex + 1,
          },
        ]);
      }
    }
  }, [ingredientSelected]);

  useEffect(() => {
    if (ingredients.length > 2) {
      MessageBurgerToast('mounted burger, drag to cart!');
    }
  }, [ingredients]);

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

  const SelectedCheckBoxIngredients = () => {
    return (
      <CheckBoxIngredients
        ingredients={data.ingredients}
        response={({ sourceIngredientDimensions, ingredientId }) => {
          if (ingredients.length < 2) {
            setSourceIngredient(sourceIngredientDimensions);
            setIngredientId(ingredientId);
          }
        }}
      />
    );
  };

  const memorizedCheckBoxIngredients = useMemo(
    () => SelectedCheckBoxIngredients(),
    [ingredientSelected]
  );

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
            <Burger
              scrollToIndex={scrollToIndex}
              item={item}
              index={index}
              indexToAnimated={indexToAnimated}
              bottomBurger={bottomBurger}
              topBreadBurger={topBreadBurger}
              widthBurger={widthBurger}
              dimensionBurgerClicked={setDestineIngredient}
              response={({ dimensions }) => {
                if (
                  item.key === burgers[Math.abs(burgers.length / 2)].key &&
                  initialSelect
                ) {
                  setDestineIngredient(dimensions);
                }
              }}
              ingredients={ingredients}
            />
          )}
          onScroll={({ nativeEvent }) => checkScroll(nativeEvent)}
          scrollEnabled={false}
        />
      </Block>
      <Block
        absolute
        row
        middle
        flex={false}
        style={{
          alignSelf: 'center',
          top: Dimensions.get('window').height / 1.9,
        }}
      >
        <Text h1 primary center middle bold>
          {burgers[indexToAnimated].price}
        </Text>
        <Text h2 primary center middle bold>
          {'  '}R$
        </Text>
      </Block>
      {memorizedCheckBoxIngredients}
      {ingredients.length !== 0 &&
        ingredients.map((item) => {
          return (
            <Photo
              resizeMode="contain"
              width={item.width}
              height={item.height}
              animated
              absolute
              image={data.findKey(item.id)[0].image}
              style={{
                alignSelf: 'center',
                zIndex: item.zIndex,
                top: item.top,
                left: item.left,
                opacity:
                  ingredientSelected.id === item.id
                    ? selectedProgress.interpolate({
                        inputRange: [0, 0.99, 0.995],
                        outputRange: [0, 0, 1],
                      })
                    : 1,
              }}
            />
          );
        })}
      {Object.entries(openMeasurements).length !== 0 && !animationComplete && (
        <Photo
          style={{
            zIndex: 9,
            alignSelf: 'center',
            width: openMeasurements.destWidth,
            height: openMeasurements.destHeight,
            top: openMeasurements.destY,
            left: openMeasurements.destX,
            opacity: openProgress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateX: openProgress.interpolate({
                  inputRange: [0.01, 0.99],
                  outputRange: [openingInitTranslateX, 0],
                }),
              },
              {
                translateY: openProgress.interpolate({
                  inputRange: [0.01, 0.99],
                  outputRange: [openingInitTranslateY, 0],
                }),
              },
              {
                scale: openProgress.interpolate({
                  inputRange: [0.01, 0.99],
                  outputRange: [openingInitScale, 1],
                }),
              },
            ],
          }}
          image={data.findKey(ingredientId)[0].image}
          absolute
          resizeMode="contain"
          animated
        />
      )}
    </Block>
  );
}
