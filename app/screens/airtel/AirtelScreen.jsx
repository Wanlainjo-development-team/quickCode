import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

// components styles
import airtelStyle from './style'

// import codes array
import DATA from './codes'

const AirtelScreen = ({ navigation }) => {
    return (
        <View style={airtelStyle.container}>
            <ImageBackground source={require('../../../assets/headBackground.png')} style={airtelStyle.headBackground}>
                <View style={airtelStyle.headBackgroundFlex}>
                    <Image source={require('../../../assets/airtel.png')} style={airtelStyle.headBackgroundLogo} />
                    <Text style={airtelStyle.headBackgroundText}>Airtel Nigeria</Text>
                </View>
            </ImageBackground>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                style={airtelStyle.codeList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Codeinfo', { code: item })} style={airtelStyle.codeCard}>
                        <View style={airtelStyle.codeCardButton}>
                            <Text style={airtelStyle.codeCardButtonText}>{item.code}</Text>
                        </View>
                        <Text style={airtelStyle.codeCardName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default AirtelScreen