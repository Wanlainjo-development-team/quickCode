import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CodeList = ({ codeList, codeCard, codeCardButton, codeCardButtonText, codeCardName, data }) => {

    const navigation = useNavigation()

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            style={codeList}
            renderItem={({ item }) => (
                <View style={codeCard}>
                    <Text style={codeCardName}>{item.title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Codeinfo', { code: item })} style={codeCardButton}>
                        <Text style={codeCardButtonText}>{item.code}</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    )
}

export default CodeList