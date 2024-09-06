import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductData} from '../constants/productData';

type ParamListBase = {
  Home: undefined;
  ProductList: undefined;
  Detail: {
    data: ProductData;
  };
  Auth: undefined;
  Tab: undefined;
};

export type StackParamList = NativeStackNavigationProp<ParamListBase>;
export type RouteParamList = RouteProp<ParamListBase, 'Detail'>;
