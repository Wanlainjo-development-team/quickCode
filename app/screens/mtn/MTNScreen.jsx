import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import mtnStyle from './style'

const MTNScreen = () => {
    return (
        <View style={mtnStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={mtnStyle.headBackground}>
                <View style={mtnStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/mtn.png')} style={mtnStyle.headBackgroundLogo} />
                    <Text style={mtnStyle.headBackgroundText}>MTN Nigeria</Text>
                </View>
            </ImageBackground>
            <Text>MTNScreen</Text>
        </View>
    )
}

export default MTNScreen