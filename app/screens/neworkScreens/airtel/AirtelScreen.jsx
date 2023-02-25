import { View } from 'react-native'
import React from 'react'

// components styles
import airtelStyle from '../../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../../components/CodeList'

import { StatusBar } from 'expo-status-bar'

const AirtelScreen = () => {
    return (
        <View style={airtelStyle.container}>
            <StatusBar style="light" />
            <CodeList
                codeList={airtelStyle.codeList}
                codeCard={airtelStyle.codeCard}
                codeCardButton={airtelStyle.codeCardButton}
                codeCardButtonText={airtelStyle.codeCardButtonText}
                codeCardName={airtelStyle.codeCardName}
                data={DATA}
            />
        </View>
    )
}

export default AirtelScreen