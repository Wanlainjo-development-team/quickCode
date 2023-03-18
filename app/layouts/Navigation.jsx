import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import mainNav from '../style/mainNav'

import { createDrawerNavigator } from '@react-navigation/drawer'
import NetworkNavigation from './NetworkNavigation'
import BankingNavigation from './BankingNavigation'
import Header from '../components/Header'
import color from '../style/color'
import { useDispatch, useSelector } from 'react-redux'
import { setLogo, setText } from '../features/useHeaderSlice'

const { Navigator, Screen } = createDrawerNavigator()

const Navigation = () => {
    const dispatch = useDispatch()
    const { currentTab, currentLogo } = useSelector(state => state.header)

    return (
        <View style={mainNav.container}>
            <StatusBar style="light" />
            <Header />
            <Navigator
                screenOptions={{
                    headerShown: false,
                    drawerPosition: 'right',
                    drawerType: 'back',
                    drawerActiveBackgroundColor: `${color.accent}20`,
                    drawerActiveTintColor: color.accent,
                    drawerInactiveTintColor: color.black,
                    drawerStyle: {
                        backgroundColor: color.background,
                    },
                }}
            >
                <Screen
                    name="Networks"
                    component={NetworkNavigation}
                    listeners={({ navigation, route }) => ({
                        drawerItemPress: e => {
                            // Prevent default action
                            e.preventDefault();
                            navigation.jumpTo('Networks')
                            dispatch(setText(currentTab))
                            dispatch(setLogo(currentLogo))
                        }
                    })}
                />
                <Screen
                    name="Banks"
                    component={BankingNavigation}
                    listeners={({ navigation, route }) => ({
                        drawerItemPress: e => {
                            // Prevent default action
                            e.preventDefault();
                            navigation.jumpTo('Banks')
                            dispatch(setText('Banking'))
                            dispatch(setLogo('BANK'))
                        }
                    })}
                />
            </Navigator>
        </View>
    )
}

export default Navigation