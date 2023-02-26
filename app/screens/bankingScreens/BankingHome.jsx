import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import bankingHome from '../../style/bankingHome'

// import banking USSD codes
import accessBank from '../../bankCodes/accessBank'
import echobank from '../../bankCodes/echobank'
import fidelityBank from '../../bankCodes/fidelityBank'
import firstBank from '../../bankCodes/firstBank'
import firstCitiMonumentBank from '../../bankCodes/firstCitiMonumentBank'
import guarantyTrustBank from '../../bankCodes/guarantyTrustBank'
import heritageBankPlc from '../../bankCodes/heritageBankPlc'
import keystoneBankLimited from '../../bankCodes/keystoneBankLimited'
import polarisBankLimited from '../../bankCodes/polarisBankLimited'
import stanbicIBTCBankNigeriaLimited from '../../bankCodes/stanbicIBTCBankNigeriaLimited'
import standardCharteredBankNigeria from '../../bankCodes/standardCharteredBankNigeria'
import sterlingBank from '../../bankCodes/sterlingBank'
import unionBankOfNigeria from '../../bankCodes/unionBankOfNigeria'
import unitedBankForAfrica from '../../bankCodes/unitedBankForAfrica'
import UnityBankplc from '../../bankCodes/UnityBankplc'
import wemaBank from '../../bankCodes/wemaBank'
import color from '../../style/color'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const bankCodes = [
    {
        id: 1,
        code: "*901#",
        bankName: 'Access Bank',
        ussd: [...accessBank]
    },
    {
        id: 2,
        code: "*326#",
        bankName: 'Echobank',
        ussd: [...echobank]
    },
    {
        id: 3,
        code: "*770#",
        bankName: 'Fidelity Bank',
        ussd: [...fidelityBank]
    },
    {
        id: 4,
        code: "*894#",
        bankName: 'First Bank',
        ussd: [...firstBank]
    },
    {
        id: 5,
        code: "*329#",
        bankName: 'First Citi Monument Bank',
        ussd: [...firstCitiMonumentBank]
    },
    {
        id: 6,
        code: "*737#",
        bankName: 'Guaranty Trust Bank',
        ussd: [...guarantyTrustBank]
    },
    {
        id: 7,
        code: "*322#",
        bankName: 'Heritage Bank Plc',
        ussd: [...heritageBankPlc]
    },
    {
        id: 8,
        code: "*533#",
        bankName: 'Keystone Bank Limited',
        ussd: [...keystoneBankLimited]
    },
    {
        id: 9,
        code: "*833#",
        bankName: 'Polaris Bank Limited',
        ussd: [...polarisBankLimited]
    },
    {
        id: 10,
        code: '*909#',
        bankName: 'Stanbic IBTC Bank Nigeria Limited',
        ussd: [...stanbicIBTCBankNigeriaLimited]
    },
    {
        id: 11,
        code: '*977#',
        bankName: 'Standard Chartered Bank Nigeria',
        ussd: [...standardCharteredBankNigeria]
    },
    {
        id: 12,
        code: "*822#",
        bankName: 'Sterling Bank',
        ussd: [...sterlingBank]
    },
    {
        id: 13,
        code: "*826#",
        bankName: 'Union Bank Of Nigeria',
        ussd: [...unionBankOfNigeria]
    },
    {
        id: 14,
        code: "*919#",
        bankName: 'United Bank For Africa',
        ussd: [...unitedBankForAfrica]
    },
    {
        id: 15,
        code: '*7799#',
        bankName: 'Unity Bank Plc',
        ussd: [...UnityBankplc]
    },
    {
        id: 16,
        code: "*945#",
        bankName: 'Wema Bank',
        ussd: [...wemaBank]
    }
]

const BankingHome = () => {
    const navigation = useNavigation()

    return (
        <View style={bankingHome.container}>
            <FlatList
                data={bankCodes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Bank', { currentBank: item })} style={bankingHome.card}>
                        <View style={bankingHome.leftSide}>
                            <View style={bankingHome.iconContainer}>
                                <MaterialCommunityIcons name="bank-outline" size={24} color={color.accent} />
                            </View>
                            <Text style={bankingHome.bankName}>{item.bankName}</Text>
                        </View>
                        <Text style={bankingHome.bankCode}>{item.code}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default BankingHome