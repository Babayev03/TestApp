import React from 'react';
import RootStack from './src/navigation/stacks/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <KeyboardProvider>
      <PaperProvider theme={MD3LightTheme}>
        <NavigationContainer>
          <GestureHandlerRootView>
            <FlashMessage />
            <RootStack />
          </GestureHandlerRootView>
        </NavigationContainer>
      </PaperProvider>
    </KeyboardProvider>
  );
};

export default App;
