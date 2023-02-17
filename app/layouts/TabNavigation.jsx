import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

// Colors
import color from '../color';

// style
import nav from './navigation';

// Screens
import MTNScreen from '../screens/mtn/MTNScreen';
import GLOScreen from '../screens/glo/GLOScreen';
import AirtelScreen from '../screens/airtel/AirtelScreen';
import NineMobile from '../screens/9mobile/NineMobile';

const TabNavigation = () => {
    return (
        <Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: color.accent,
                },

                tabBarStyle: {
                    ...nav.barStyle
                }
            }}
            tabBarPosition="bottom"
        >
            <Screen name="MTN" component={MTNScreen} />
            <Screen name="GLO" component={GLOScreen} />
            <Screen name="Airtel" component={AirtelScreen} />
            <Screen name="9 Mobile" component={NineMobile} />
        </Navigator>
    )
}

export default TabNavigation