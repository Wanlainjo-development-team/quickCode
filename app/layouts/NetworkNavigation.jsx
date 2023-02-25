import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

// Colors
import color from '../style/color';

// style
import nav from '../style/navigation';

// Screens
import MTNScreen from '../screens/mtn/MTNScreen';
import GLOScreen from '../screens/glo/GLOScreen';
import AirtelScreen from '../screens/airtel/AirtelScreen';
import NineMobile from '../screens/9mobile/NineMobile';
import { useDispatch } from 'react-redux';
import { setLogo, setText } from '../features/useHeaderSlice';

const NetworkNavigation = () => {
    const dispatch = useDispatch()

    return (
        <Navigator
            screenOptions={{
                lazy: true,
                swipeEnabled: false,
                tabBarIndicatorStyle: {
                    backgroundColor: color.accent,
                },

                tabBarStyle: {
                    ...nav.barStyle
                }
            }}
            tabBarPosition="bottom"
        >
            <Screen
                name="MTN"
                component={MTNScreen}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('MTN')
                        dispatch(setText('MTN Nigeria'))
                        dispatch(setLogo('MTN'))
                    }
                })}
            />
            <Screen
                name="GLO"
                component={GLOScreen}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('GLO')
                        dispatch(setText('GLO Nigeria'))
                        dispatch(setLogo('GLO'))
                    }
                })}
            />
            <Screen
                name="Airtel"
                component={AirtelScreen}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('Airtel')
                        dispatch(setText('Airtel Nigeria'))
                        dispatch(setLogo('AIRTEL'))
                    }
                })}
            />
            <Screen
                name="NineMobile"
                component={NineMobile}
                options={{ title: '9 Mobile' }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('NineMobile')
                        dispatch(setText('9Mobile Nigeria'))
                        dispatch(setLogo('9MOBILE'))
                    }
                })}
            />
        </Navigator>
    )
}

export default NetworkNavigation