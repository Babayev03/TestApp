import {ImageRequireSource} from 'react-native';

export interface ProductData {
  id: number;
  image: ImageRequireSource;
  title: string;
  text: string;
  price: number;
}

export const productData: ProductData[] = [
  {
    id: 1,
    image: require('../assets/images/product-img1.png'),
    title: 'The Marc Jacobs',
    text: 'Traveler Tote',
    price: 195,
  },
  {
    id: 2,
    image: require('../assets/images/product-img2.png'),
    title: 'Axel Arigato',
    text: 'Clean 90 Triple Sneakers',
    price: 245,
  },
  {
    id: 3,
    image: require('../assets/images/product-img3.png'),
    title: 'Roller Rabbit',
    text: 'Vado Odelle Dress',
    price: 198,
  },
  {
    id: 4,
    image: require('../assets/images/product-img1.png'),
    title: 'The Marc Jacobs',
    text: 'Traveler Tote',
    price: 195,
  },
  {
    id: 5,
    image: require('../assets/images/product-img2.png'),
    title: 'Axel Arigato',
    text: 'Clean 90 Triple Sneakers',
    price: 245,
  },
  {
    id: 6,
    image: require('../assets/images/product-img3.png'),
    title: 'Roller Rabbit',
    text: 'Vado Odelle Dress',
    price: 198,
  },
  {
    id: 7,
    image: require('../assets/images/product-img1.png'),
    title: 'The Marc Jacobs',
    text: 'Traveler Tote',
    price: 195,
  },
  {
    id: 8,
    image: require('../assets/images/product-img2.png'),
    title: 'Axel Arigato',
    text: 'Clean 90 Triple Sneakers',
    price: 245,
  },
  {
    id: 9,
    image: require('../assets/images/product-img3.png'),
    title: 'Roller Rabbit',
    text: 'Vado Odelle Dress',
    price: 198,
  },
  {
    id: 10,
    image: require('../assets/images/product-img1.png'),
    title: 'The Marc Jacobs',
    text: 'Traveler Tote',
    price: 195,
  },
];
