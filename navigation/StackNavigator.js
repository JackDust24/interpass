import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import FacultyScreen from '../screens/FacultyScreen';
import MajorsScreen from '../screens/MajorsScreen';
import MajorsDetailsScreen from '../screens/MajorsDetailsScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const StackNavigator = createStackNavigator({
    Universities: {
        screen: HomeScreen,
        
            headerLayoutPreset: 'center',
        
        //     initialRouteName: 'Home',
        //     /* The header config from HomeScreen is now here */
        //     defaultNavigationOptions: {
        //       headerStyle: {
        //         backgroundColor: '#1B3D6D',
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
});

export default createAppContainer(StackNavigator);