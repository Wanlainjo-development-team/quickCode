import { View } from 'react-native'
import React from 'react'

// components styles
import mtnStyle from '../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../components/CodeList'
import { StatusBar } from 'expo-status-bar'

const MTNScreen = () => {
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