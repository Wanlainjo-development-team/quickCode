import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

// Colors
import color from '../style/color';

// style
import nav from '../style/navigation';

// Screens
import MTNScreen from '../screens/neworkScreens/mtn/MTNScreen';
import GLOScreen from '../screens/neworkScreens/glo/GLOScreen';
import AirtelScreen from '../screens/neworkScreens/airtel/AirtelScreen';
import NineMobile from '../screens/neworkScreens/9mobile/NineMobile';
import { useDispatch } from 'react-redux';
import { setCurrentLogo, setCurrentTab, setLogo, setText } from '../features/useHeaderSlice';
import { Image, Text } from 'react-native';

// mtn
import mtnDark from '../../assets/mtnDark.png';
import mtnLight from '../../assets/mtnLight.png';

// glo
import gloDark from '../../assets/gloDark.png';
import gloLight from '../../assets/gloLight.png';

// airtel
import airtelDark from '../../assets/airtelDark.png';
import airtelLight from '../../assets/airtelLight.png';

// 9mobile
import nineDark from '../../assets/nineDark.png';
import nineLight from '../../assets/nineLight.png';

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
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? mtnLight : mtnDark} style={{ width: 40, height: 13, marginTop: 10 }} />
                    ),
                    tabBarLabel: () => null
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('MTN')
                        dispatch(setText('MTN Nigeria'))
                        dispatch(setLogo('MTN'))
                        dispatch(setCurrentTab('MTN'))
                        dispatch(setCurrentLogo('MTN'))
                    }
                })}
            />
            <Screen
                name="GLO"
                component={GLOScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? gloLight : gloDark} style={{ width: 30, height: 30, marginTop: 2 }} />
                    ),
                    tabBarLabel: () => null
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('GLO')
                        dispatch(setText('GLO Nigeria'))
                        dispatch(setLogo('GLO'))
                        dispatch(setCurrentTab('GLO'))
                        dispatch(setCurrentLogo('GLO'))
                    }
                })}
            />
            <Screen
                name="Airtel"
                component={AirtelScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? airtelLight : airtelDark} style={{ width: 50, height: 16, marginTop: 10 }} />
                    ),
                    tabBarLabel: () => null
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('Airtel')
                        dispatch(setText('Airtel Nigeria'))
                        dispatch(setLogo('AIRTEL'))
                        dispatch(setCurrentTab('AIRTEL'))
                        dispatch(setCurrentLogo('AIRTEL'))
                    }
                })}
            />
            <Screen
                name="NineMobile"
                component={NineMobile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? nineLight : nineDark} style={{ width: 50, height: 16, marginTop: 10 }} />
                    ),
                    tabBarLabel: () => null
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        navigation.jumpTo('NineMobile')
                        dispatch(setText('9Mobile Nigeria'))
                        dispatch(setLogo('9MOBILE'))
                        dispatch(setCurrentTab('9MOBILE'))
                        dispatch(setCurrentLogo('9MOBILE'))
                    }
                })}
            />
        </Navigator>
    )
}

export default NetworkNavigation