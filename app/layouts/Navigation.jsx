import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import mainNav from '../style/mainNav'

import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigation from './TabNavigation'
import Header from '../components/Header'

const { Navigator, Screen } = createDrawerNavigator()

const Navigation = () => {
    return (
        <View style={mainNav.container}>
            <StatusBar style="light" />
            <Header />
            <Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Screen name="Networks" component={TabNavigation} />
            </Navigator>
        </View>
    )
}

export default Navigation