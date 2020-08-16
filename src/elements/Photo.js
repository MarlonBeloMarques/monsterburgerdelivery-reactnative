/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Image, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default function Photo(props) {
  const {
    width,
    height,
    style,
    content,
    avatar,
    animated,
    absolute,
    onLayout,
  } = props;

  const blockStyles = [
    content === true && { width },
    // eslint-disable-next-line no-use-before-define
    width && height && { width, height },
    avatar && styles.avatar,
    style, // reescrever estilos predefinidos
  ];

  if (animated) {
    return (
      <Animated.Image
        {...props}
        style={
          (absolute === true ? StyleSheet.absoluteFill : null, blockStyles)
        }
        source={
          typeof props.image === 'string' ? { uri: props.image } : props.image
        }
        onLayout={onLayout}
      />
    );
  }

  return (
    <Image
      {...props}
      style={blockStyles}
      source={
        typeof props.image === 'string' ? { uri: props.image } : props.image
      }
      onLayout={onLayout}
    />
  );
}

export const styles = StyleSheet.create({
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 26,
  },
});

Photo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  image: PropTypes.string,
};
