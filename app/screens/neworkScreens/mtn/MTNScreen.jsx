import { View } from 'react-native'
import React, { useEffect } from 'react'

// components styles
import mtnStyle from '../../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../../components/CodeList'
import { StatusBar } from 'expo-status-bar'
import { useDispatch } from 'react-redux'
import { setDrawer } from '../../../features/useHeaderSlice'

const MTNScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDrawer(navigation))
    }, [])


    return (
        <View style={mtnStyle.container}>
            <StatusBar style="light" />
            <CodeList
                codeList={mtnStyle.codeList}
                codeCard={mtnStyle.codeCard}
                codeCardButton={mtnStyle.codeCardButton}
                codeCardButtonText={mtnStyle.codeCardButtonText}
                codeCardName={mtnStyle.codeCardName}
                data={DATA}
            />
        </View>
    )
}

export default MTNScreen