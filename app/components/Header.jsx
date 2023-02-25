import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import head from '../style/head'
import { Feather } from '@expo/vector-icons';

import color from '../style/color';
import { useSelector } from 'react-redux';

const Header = () => {
    const { text, logo, drawer } = useSelector(state => state.header)
    const navigation = drawer

    const image = () => {
        if (logo == 'MTN') return require('../../assets/mtn.png')

        if (logo == 'GLO') return require('../../assets/glo.png')

        if (logo == 'AIRTEL') return require('../../assets/airtel.png')

        if (logo == '9MOBILE') return require('../../assets/9mobile.png')

        if (logo == 'BANK') return require('../../assets/bank.png')

    }

    return (
        <ImageBackground source={require('../../assets/headBackground.png')} style={head.headBackground}>
            <View style={head.headBackgroundFlex}>
                <Image source={image()} style={{
                    ...head.headBackgroundLogo,
                    width: logo == 'BANK' ? 35 : 50,
                    height: logo == 'BANK' ? 35 : 50,
                }} />
                <Text style={head.headBackgroundText}>{text}</Text>
            </View>
            <TouchableOpacity style={head.menuButton} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={24} color={color.white} />
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Header