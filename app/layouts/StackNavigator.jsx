import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

const { Navigator, Screen, Group } = createStackNavigator()

// Screens
import GetStarted from '../screens/getStarted/GetStarted'
import TabNavigation from './TabNavigation'

const StackNavigation = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                keyboardHandlingEnabled: true,
                animationEnabled: true,
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Screen name="GetStarted" component={GetStarted} />
            <Screen name="Home" component={TabNavigation} />
        </Navigator>
    )
}

export default StackNavigation