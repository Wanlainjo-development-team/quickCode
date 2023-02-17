import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity, Platform, Linking } from 'react-native'
import React from 'react'

// components styles
import mtnStyle from './style'

// import codes array
import DATA from './codes'


const MTNScreen = ({ navigation }) => {
    return (
        <View style={mtnStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={mtnStyle.headBackground}>
                <View style={mtnStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/mtn.png')} style={mtnStyle.headBackgroundLogo} />
                    <Text style={mtnStyle.headBackgroundText}>MTN Nigeria</Text>
                </View>
            </ImageBackground>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                style={mtnStyle.codeList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Codeinfo', { code: item })} style={mtnStyle.codeCard}>
                        <View style={mtnStyle.codeCardButton}>
                            <Text style={mtnStyle.codeCardButtonText}>{item.code}</Text>
                        </View>
                        <Text style={mtnStyle.codeCardName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default MTNScreen