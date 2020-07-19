/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function Photo(props) {
  const { size, size2, style, content, avatar } = props;

  const blockStyles = [
    content === true && { width: size },
    // eslint-disable-next-line no-use-before-define
    size && size2 && { width: size, height: size2 },
    avatar && styles.avatar,
    style, // reescrever estilos predefinidos
  ];

  return (
    <Image
      {...props}
      style={blockStyles}
      source={
        typeof props.image === 'string' ? { uri: props.image } : props.image
      }
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
