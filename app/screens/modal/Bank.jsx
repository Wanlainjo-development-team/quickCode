import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import bank from '../../style/bank'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import color from '../../style/color'
import CodeList from '../../components/CodeList'
import network from '../../style/network'

const Bank = () => {
    const navigation = useNavigation()
    const { currentBank } = useRoute().params

    return (
        <View style={bank.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={bank.goBack} />

            <View style={bank.sheet}>
                <View style={bank.head}>
                    <Text style={bank.headTitle}>{currentBank.bankName}</Text>

                    <TouchableOpacity style={bank.goBackButton} onPress={() => navigation.goBack()}>
                        <AntDesign name="back" size={24} color={color.accent} />
                    </TouchableOpacity>
                </View>

                <CodeList
                    codeList={network.CodeList}
                    codeCard={network.codeCard}
                    codeCardButton={network.codeCardButton}
                    codeCardButtonText={network.codeCardButtonText}
                    codeCardName={network.codeCardName}
                    data={currentBank.ussd}
                />
            </View>
        </View>
    )
}

export default Bank