import { View } from 'react-native'
import React from 'react'

// components styles
import gloStyle from '../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../components/CodeList'
import Header from '../../components/Header'

const GLOScreen = () => {
    return (
        <View style={gloStyle.container}>
            <Header
                source={require('../../../assets/headBackground.png')}
                headBackground={gloStyle.headBackground}
                headBackgroundFlex={gloStyle.headBackgroundFlex}
                logo={require('../../../assets/glo.png')}
                headBackgroundLogo={gloStyle.headBackgroundLogo}
                headBackgroundText={gloStyle.headBackgroundText}
                text={'GLO Nigeria'}
            />
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