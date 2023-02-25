import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import mainNav from '../style/mainNav'

import { createDrawerNavigator } from '@react-navigation/drawer'
import NetworkNavigation from './NetworkNavigation'
import BankingNavigation from './BankingNavigation'
import Header from '../components/Header'
import color from '../style/color'

const { Navigator, Screen } = createDrawerNavigator()

const Navigation = () => {
    return (
        <View style={mainNav.container}>
            <StatusBar style="light" />
            <Header />
            <Navigator
                screenOptions={{
                    headerShown: false,
                    drawerPosition: 'right',
                    drawerType: 'back',
                    drawerActiveBackgroundColor: color.accentLighten1,
                    drawerActiveTintColor: color.accent,
                    drawerInactiveTintColor: color.black,
                    drawerStyle: {
                    },
                }}
            >
                <Screen name="Networks" component={NetworkNavigation} />
                <Screen name="Banks" component={BankingNavigation} />
            </Navigator>
        </View>
    )
}

export default Navigation