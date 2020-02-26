import React from 'react';
import { Platform, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, tabBarOptions } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StackNavigator from '../navigation/StackNavigator'
import LinksScreen from '../screens/LinksScreen';
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
    // Home: HomeScreen,
    Home: {
      screen: HomeScreen
      
         // headerLayoutPreset: 'center',
      
      //     initialRouteName: 'Home',
      //     /* The header config from HomeScreen is now here */
      //     defaultNavigationOptions: {
      //       headerStyle: {
      //         backgroundColor: Colors.interPassDarkBlue,
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //       },
      //     },
     //   config
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
          style={{width: 180, height: 60, alignItems: "center", justifyContent: "center", position: 'absolute', left: '25%', marginTop: 28}}
          source={ require('../images/Logo_InterPass-02.png')}
        />
      ),
      //headerTitle: 'InterPASS',
      headerStyle: {
        backgroundColor: Colors.interPassDarkBlue,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: 'Back',
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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  {
    initialRouteName: 'Links',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.interPassDarkBlue,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: FavouritesScreen,
  },
  {
    initialRouteName: 'Settings',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.interPassDarkBlue,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};


SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
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
