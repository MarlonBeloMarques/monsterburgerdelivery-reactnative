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
    type: 'Bacon',
    price: 9.99,
    image_content: require('../assets/images/bacon.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 4,
    type: 'Chicken',
    price: 12.99,
    image_content: require('../assets/images/chicken.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 3,
    type: 'Cheddar Meat',
    price: 12.99,
    image_content: require('../assets/images/cheddar_meat.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 5,
    type: 'Tuna',
    price: 14.99,
    image_content: require('../assets/images/tuna.png'),
    image_burgerTop: require('../assets/images/burger-top.png'),
    image_burgerBottom: require('../assets/images/burger-bottom.png'),
  },
  {
    key: 6,
    type: 'Beef',
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
    image: require('../assets/images/lettuce.png'),
  },
  {
    key: 2,
    name: 'Cheese',
    color: '#FFED9F',
    icon: require('../assets/icons/cheese.png'),
    image: require('../assets/images/cheese.png'),
  },
  {
    key: 3,
    name: 'Tomato',
    color: '#FE7672',
    icon: require('../assets/icons/tomato.png'),
    image: require('../assets/images/tomato.png'),
  },
  {
    key: 4,
    name: 'Egg',
    color: '#F5F5F5',
    icon: require('../assets/icons/egg.png'),
    image: require('../assets/images/egg.png'),
  },
  {
    key: 5,
    name: 'Onion',
    color: '#FFC1DE',
    icon: require('../assets/icons/onion.png'),
    image: require('../assets/images/onion.png'),
  },
];

export { burgers, sizes, ingredients };
