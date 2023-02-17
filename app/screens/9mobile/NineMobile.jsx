import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

// components styles
import nineMobileStyle from './style'

// import codes array
import DATA from './codes'

const NineMobile = ({ navigation }) => {
    return (
        <View style={nineMobileStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={nineMobileStyle.headBackground}>
                <View style={nineMobileStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/9mobile.png')} style={nineMobileStyle.headBackgroundLogo} />
                    <Text style={nineMobileStyle.headBackgroundText}>9Mobile Nigeria</Text>
                </View>
            </ImageBackground>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                style={nineMobileStyle.codeList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Codeinfo', { code: item })} style={nineMobileStyle.codeCard}>
                        <View style={nineMobileStyle.codeCardButton}>
                            <Text style={nineMobileStyle.codeCardButtonText}>{item.code}</Text>
                        </View>
                        <Text style={nineMobileStyle.codeCardName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NineMobile