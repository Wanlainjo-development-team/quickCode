import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

const { Navigator, Screen, Group } = createStackNavigator()

// Screens
import TabNavigation from './TabNavigation'
import Codeinfo from '../screens/modal/Codeinfo'
import Prompt from '../screens/modal/Prompt'
import color from '../style/color'

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
            <Screen name="Home" component={TabNavigation} options={{ gestureEnabled: false }} />

            <Group screenOptions={{ presentation: 'transparentModal' }}>
                <Screen name="Codeinfo" component={Codeinfo} options={{
                    gestureEnabled: true,
                    ...TransitionPresets.FadeFromBottomAndroid,
                    cardStyle: {
                        backgroundColor: color.transparent
                    }
                }} />
                <Screen name="Prompt" component={Prompt} options={{
                    gestureEnabled: true,
                    ...TransitionPresets.FadeFromBottomAndroid,
                    cardStyle: {
                        backgroundColor: color.transparent
                    }
                }} />
            </Group>
        </Navigator>
    )
}

export default StackNavigation