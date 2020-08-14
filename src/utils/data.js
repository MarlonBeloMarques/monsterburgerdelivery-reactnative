/* eslint-disable global-require */
const burgers = [
  {
    key: 1,
    type: 'Beef',
    price: 8.99,
    image_content: require('../assets/images/beef.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 2,
    type: 'Chicken',
    price: 9.99,
    image_content: require('../assets/images/beef.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 3,
    type: 'Egg',
    price: 12.99,
    image_content: require('../assets/images/beef.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 4,
    type: 'Ham',
    price: 12.99,
    image_content: require('../assets/images/beef.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 5,
    type: 'Peru',
    price: 14.99,
    image_content: require('../assets/images/beef.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 6,
    type: 'Cheddar',
    price: 16.99,
    image_content: require('../assets/images/beef.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
];

const sizes = [
  {
    key: 1,
    name: 'P',
  },
  {
    key: 2,
    name: 'M',
  },
  {
    key: 3,
    name: 'G',
  },
];

const ingredients = [
  {
    key: 1,
    name: 'Lettuce',
    color: '#D3FEC0',
    icon: require('../assets/icons/lettuce.png'),
  },
  {
    key: 2,
    name: 'Cheese',
    color: '#FFED9F',

    icon: require('../assets/icons/cheese.png'),
  },
  {
    key: 3,
    name: 'Tomato',
    color: '#FE7672',

    icon: require('../assets/icons/tomato.png'),
  },
  {
    key: 4,
    name: 'Egg',
    color: '#F5F5F5',

    icon: require('../assets/icons/egg.png'),
  },
  {
    key: 5,
    name: 'Onion',
    color: '#FFC1DE',
    icon: require('../assets/icons/onion.png'),
  },
];

export { burgers, sizes, ingredients };
