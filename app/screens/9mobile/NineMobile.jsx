import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import nineMobileStyle from './style'

const NineMobile = () => {
    return (
        <View style={nineMobileStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={nineMobileStyle.headBackground}>
                <View style={nineMobileStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/9mobile.png')} style={nineMobileStyle.headBackgroundLogo} />
                    <Text style={nineMobileStyle.headBackgroundText}>9Mobile Nigeria</Text>
                </View>
            </ImageBackground>
            <Text>NineMobile</Text>
        </View>
    )
}

export default NineMobile