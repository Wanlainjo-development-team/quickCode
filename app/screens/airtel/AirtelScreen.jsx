import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import airtelStyle from './style'

const AirtelScreen = () => {
    return (
        <View style={airtelStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={airtelStyle.headBackground}>
                <View style={airtelStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/airtel.png')} style={airtelStyle.headBackgroundLogo} />
                    <Text style={airtelStyle.headBackgroundText}>Airtel Nigeria</Text>
                </View>
            </ImageBackground>
            <Text>AirtelScreen</Text>
        </View>
    )
}

export default AirtelScreen