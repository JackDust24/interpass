/*jshint esversion: 6 */
/* This is the main navigation screen from Home */

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import FacultyScreen from '../screens/FacultyScreen';
import MajorsScreen from '../screens/MajorsScreen';
import MajorsDetailsScreen from '../screens/MajorsDetailsScreen';
import Colors from '../constants/Colors';

// CAN REMOVE THIS PART
const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const StackNavigator = createStackNavigator({
    Universities: {
        screen: HomeScreen
    },
    Faculties: {
        screen: FacultyScreen
    },
    Majors: {
        screen: MajorsScreen
    },
    Details: MajorsDetailsScreen
});

export default createAppContainer(StackNavigator);