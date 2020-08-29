import Toast from 'react-native-tiny-toast';
import { theme } from '../constants';

const toastMessageBurger = (msg) =>
  Toast.show(msg, {
    position: Toast.position.center,
    containerStyle: {
      backgroundColor: '#767674',
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

export default toastMessageBurger;
