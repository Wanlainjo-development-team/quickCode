import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import gloStyle from './style'

const GLOScreen = () => {
    return (
        <View style={gloStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={gloStyle.headBackground}>
                <View style={gloStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/glo.png')} style={gloStyle.headBackgroundLogo} />
                    <Text style={gloStyle.headBackgroundText}>GLO Nigeria</Text>
                </View>
            </ImageBackground>
            <Text>GLOScreen</Text>
        </View>
    )
}

export default GLOScreen