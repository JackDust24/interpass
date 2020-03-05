/*jshint esversion: 6 */

import React from 'react';
import { Platform, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, tabBarOptions } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StackNavigator from '../navigation/StackNavigator';
import LinksScreen from '../screens/LinksScreen';
import ContactScreen from '../screens/ContactScreen';
import PromosScreen from '../screens/PromosScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FacultyScreen from '../screens/FacultyScreen';
import MajorsScreen from '../screens/MajorsScreen';
import MajorsDetailsScreen from '../screens/MajorsDetailsScreen';
import Colors from '../constants/Colors';
import InterPassLogo from '../images/Logo_InterPass-02.png';

const config = Platform.select({
  web: { headerMode: 'screen' },
 default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Faculties: {
      screen: FacultyScreen
    },
    Majors: {
      screen: MajorsScreen
    },
    Details: MajorsDetailsScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerBackground: (
        <Image
          style={{ width: 180, height: 60, alignItems: "center", justifyContent: "center", position: 'absolute', left: '25%', marginTop: 28 }}
          source={require('../images/Logo_InterPass-02.png')}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.interPassDarkBlue,
        borderBottomWidth: 0,
        paddingTop: 20,
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: 'Back',
      // headerBackTitleStyle: {
      //   paddingTop: 20,
      // },
      
    },
  },

  // defaultNavigationOptions: {
  //   headerStyle: {
  //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  //   },
  //   headerTintColor:
  //     Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  //   headerTitle: 'A Screen'
  // }

  config
);

HomeStack.navigationOptions = {
  // header: {
  //   style: { shadowColor: 'transparent' },
  // },
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: Colors.interPassDarkBlue,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : ''}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen,
  },
  {
    initialRouteName: 'Contact',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.interPassDarkBlue,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',

      },
      headerBackground: (
        <Image
          style={{ width: 180, height: 60, alignItems: "center", justifyContent: "center", position: 'absolute', left: '25%', marginTop: 28 }}
          source={require('../images/Logo_InterPass-02.png')}
        />
      ),
    },
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: 'Contact',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: Colors.interPassDarkBlue,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contacts${focused ? '' : ''}`
          : 'md-contact'
      }
    />
  ),
};

ContactStack.path = '';

const PromosStack = createStackNavigator(
  {
    Promos: PromosScreen,
  },
  {
    initialRouteName: 'Promos',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.interPassDarkBlue,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackground: (
        <Image
          style={{ width: 180, height: 60, alignItems: "center", justifyContent: "center", position: 'absolute', left: '25%', marginTop: 28 }}
          source={require('../images/Logo_InterPass-02.png')}
        />
      ),
    },
  },
  config
);

PromosStack.navigationOptions = {
  tabBarLabel: 'Promos',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: Colors.interPassDarkBlue,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pricetag${focused ? '' : ''}`
          : 'md-pricetag'
      }
    />
  ),
};


PromosStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ContactStack,
  PromosStack,
});

tabNavigator.tabBarOptions = {
  style: {
    backgroundColor: '#08457e',
  },
};

tabNavigator.path = '';

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: "center",
    paddingTop: 10,
  },
});

export default tabNavigator;
