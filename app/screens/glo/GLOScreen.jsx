import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

// components styles
import gloStyle from './style'

// import codes array
import DATA from './codes'

const GLOScreen = ({ navigation }) => {
    return (
        <View style={gloStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={gloStyle.headBackground}>
                <View style={gloStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/glo.png')} style={gloStyle.headBackgroundLogo} />
                    <Text style={gloStyle.headBackgroundText}>GLO Nigeria</Text>
                </View>
            </ImageBackground>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                style={gloStyle.codeList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Codeinfo', { code: item })} style={gloStyle.codeCard}>
                        <View style={gloStyle.codeCardButton}>
                            <Text style={gloStyle.codeCardButtonText}>{item.code}</Text>
                        </View>
                        <Text style={gloStyle.codeCardName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default GLOScreen