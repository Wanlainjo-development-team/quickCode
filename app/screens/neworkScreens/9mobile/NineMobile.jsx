import { View } from 'react-native'
import React from 'react'

// components styles
import nineMobileStyle from '../../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../../components/CodeList'

import { StatusBar } from 'expo-status-bar'

const NineMobile = () => {
    return (
        <View style={nineMobileStyle.container}>
            <StatusBar style="light" />
            <CodeList
                codeList={nineMobileStyle.codeList}
                codeCard={nineMobileStyle.codeCard}
                codeCardButton={nineMobileStyle.codeCardButton}
                codeCardButtonText={nineMobileStyle.codeCardButtonText}
                codeCardName={nineMobileStyle.codeCardName}
                data={DATA}
            />
        </View>
    )
}

export default NineMobile