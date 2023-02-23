import { View } from 'react-native'
import React from 'react'

// components styles
import airtelStyle from '../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../components/CodeList'
import Header from '../../components/Header'

const AirtelScreen = () => {
    return (
        <View style={airtelStyle.container}>
            <Header
                source={require('../../../assets/headBackground.png')}
                headBackground={airtelStyle.headBackground}
                headBackgroundFlex={airtelStyle.headBackgroundFlex}
                logo={require('../../../assets/airtel.png')}
                headBackgroundLogo={airtelStyle.headBackgroundLogo}
                headBackgroundText={airtelStyle.headBackgroundText}
                text={'Airtel Nigeria'}
            />
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