import React from 'react';
import {View, StyleSheet, Platform, Vibration} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Notification from '../screens/Notification';
import HomeStack from '../stacks/HomeStack';
import SvgHomeIcon from '../../assets/icons/HomeIcon';
import SvgCartIcon from '../../assets/icons/CartIcon';
import SvgIconNotification from '../../assets/icons/NotificationIcon';
import SvgProfileIcon from '../../assets/icons/ProfileIcon';

const Tab = AnimatedTabBarNavigator();

const TabMain: React.FC = () => {
  const renderTabIcon = ({
    route,
    focused,
  }: {
    route: {
      name: string;
    };
    focused: boolean;
  }) => {
    let iconComponent;

    switch (route.name) {
      case 'HomeStack':
        iconComponent = <SvgHomeIcon color={focused ? '#FFFFFF' : '#000000'} />;
        break;
      case 'Cart':
        iconComponent = <SvgCartIcon color={focused ? '#FFFFFF' : '#000000'} />;
        break;
      case 'Notification':
        iconComponent = (
          <SvgIconNotification color={focused ? '#FFFFFF' : '#000000'} />
        );
        break;
      case 'Profile':
        iconComponent = (
          <SvgProfileIcon color={focused ? '#FFFFFF' : '#000000'} />
        );
        break;
      default:
        break;
    }

    return (
      <View style={[styles.tabIconWrapper, focused && styles.activeIcon]}>
        {iconComponent}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}: {route: {name: string}}) => ({
          tabBarIcon: ({focused}: {focused: boolean}) =>
            renderTabIcon({route, focused}),
        })}
        tabBarOptions={{
          tabStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            ...Platform.select({
              android: {
                elevation: 10,
              },
              ios: {
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
              },
            }),
          },
        }}
        appearance={{
          tabBarBackground: '#fff',
          activeTabBackgrounds: '#EEEEEE',
          topPadding: 15,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{tabBarLabel: 'Cart'}}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{tabBarLabel: 'Notification'}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{tabBarLabel: 'Profile'}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIcon: {
    position: 'absolute',
    left: -40,
    top: -20,
    backgroundColor: 'black',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});

export default TabMain;
