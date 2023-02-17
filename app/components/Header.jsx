import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

const Header = ({ source, headBackground, headBackgroundFlex, logo, headBackgroundLogo, headBackgroundText, text }) => {
    return (
        <ImageBackground source={source} style={headBackground}>
            <View style={headBackgroundFlex}>
                <Image source={logo} style={headBackgroundLogo} />
                <Text style={headBackgroundText}>{text}</Text>
            </View>
        </ImageBackground>
    )
}

export default Header