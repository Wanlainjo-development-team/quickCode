import { View } from 'react-native'
import React from 'react'

// components styles
import gloStyle from '../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../components/CodeList'

import { StatusBar } from 'expo-status-bar'

const GLOScreen = () => {

    return (
        <View style={gloStyle.container}>
            <StatusBar style="light" />
            <CodeList
                codeList={gloStyle.codeList}
                codeCard={gloStyle.codeCard}
                codeCardButton={gloStyle.codeCardButton}
                codeCardButtonText={gloStyle.codeCardButtonText}
                codeCardName={gloStyle.codeCardName}
                data={DATA}
            />
        </View>
    )
}

export default GLOScreen