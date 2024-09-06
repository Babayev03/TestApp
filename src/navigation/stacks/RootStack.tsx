import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import TabMain from './Tab';
import Detail from '../screens/Detail';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Tab" component={TabMain} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default RootStack;
