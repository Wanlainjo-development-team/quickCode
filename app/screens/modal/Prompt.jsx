import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Linking, Platform } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import color from '../../style/color'

const { width } = Dimensions.get('window')

const Prompt = () => {
    const { code } = useRoute().params
    const navigation = useNavigation()

    // MTN CODE STARTS HERE
    const [buyMTNAirtimeFromBank, setMTNBuyAirtimeFromBank] = React.useState(`*904*${buyMTNAirtimeFromBank == undefined ? 'Amount' : buyMTNAirtimeFromBank}#`)
    const [shareAirtemFromMTNToMTN, setShareAirtemFromMTNToMTN] = React.useState({ number: 'Number', amount: 'Amount' })
    const [ninLinking, setNinLinking] = React.useState(`*785*${ninLinking == undefined ? 'Your Number' : ninLinking}#`)

    const openDialer = (code) => Linking.openURL(Platform.OS === 'android' ? `tel:${code}` : `telprompt:${code}`)
    const changeShareAirtemFromMTNToMTNNumber = e => setShareAirtemFromMTNToMTN({ ...shareAirtemFromMTNToMTN, number: e.nativeEvent.text })
    const changeShareAirtemFromMTNToMTNAmount = e => setShareAirtemFromMTNToMTN({ ...shareAirtemFromMTNToMTN, amount: e.nativeEvent.text })
    // MTN CODE ENDS HERE

    // 9Mobile starts here
    const [NMPin, setNMPin] = React.useState(`*232*${NMPin == undefined ? 'PIN' : NMPin}#`)

    const openNMPinDialer = (code) => Linking.openURL(Platform.OS === 'android' ? `tel:${code}` : `telprompt:${code}`)
    // 9Mobile ends  here

    // Airtel starts here
    const [AirtelPin, setAirtelPin] = React.useState(`*123*${AirtelPin == undefined ? 'PIN' : AirtelPin}#`)
    const [AirtelAmount, setAirtelAmount] = React.useState(`*123*${AirtelAmount == undefined ? 'Amount' : AirtelAmount}#`)

    const openAirtelPinDialer = (code) => Linking.openURL(Platform.OS === 'android' ? `tel:${code}` : `telprompt:${code}`)
    const openAirtelAmountDialer = (code) => Linking.openURL(Platform.OS === 'android' ? `tel:${code}` : `telprompt:${code}`)
    // Airtel ends here

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.invisibleButton} />
            <View style={styles.card}>
                <Text style={styles.description}>{code.description}</Text>
                {
                    code?.code == '*904*Amount#' &&
                    <>
                        <Text style={styles.description}>{buyMTNAirtimeFromBank}</Text>
                        <TextInput placeholder='Amount' style={styles.input} value={buyMTNAirtimeFromBank} onChangeText={setMTNBuyAirtimeFromBank} />
                        <TouchableOpacity onPress={() => openDialer(buyMTNAirtimeFromBank)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {buyMTNAirtimeFromBank}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*777*Number*Amount*Pin#' &&
                    <>
                        <Text style={styles.description}>{`*777*${shareAirtemFromMTNToMTN.number}*${shareAirtemFromMTNToMTN.amount}#`}</Text>

                        <TextInput placeholder='Number' style={styles.input} value={shareAirtemFromMTNToMTN.number} onChange={changeShareAirtemFromMTNToMTNNumber} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={shareAirtemFromMTNToMTN.amount} onChange={changeShareAirtemFromMTNToMTNAmount} />

                        <TouchableOpacity onPress={() => openDialer(`*777*${shareAirtemFromMTNToMTN.number}*${shareAirtemFromMTNToMTN.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*777*${shareAirtemFromMTNToMTN.number}*${shareAirtemFromMTNToMTN.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*785*Your NIN#' &&
                    <>
                        <Text style={styles.description}>{ninLinking}</Text>
                        <TextInput placeholder='Your NIN' style={styles.input} value={ninLinking} onChangeText={setNinLinking} />
                        <TouchableOpacity onPress={() => openDialer(ninLinking)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {ninLinking}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*232*PIN#' &&
                    <>
                        <Text style={styles.description}>{NMPin}</Text>
                        <TextInput placeholder='PIN' style={styles.input} value={NMPin} onChangeText={setNMPin} />
                        <TouchableOpacity onPress={() => openNMPinDialer(NMPin)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {NMPin}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*123*PIN#' &&
                    <>
                        <Text style={styles.description}>{AirtelPin}</Text>
                        <TextInput placeholder='PIN' style={styles.input} value={AirtelPin} onChangeText={setAirtelPin} />
                        <TouchableOpacity onPress={() => openAirtelPinDialer(AirtelPin)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {AirtelPin}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*123*Amount#' &&
                    <>
                        <Text style={styles.description}>{AirtelAmount}</Text>
                        <TextInput placeholder='Amount' style={styles.input} value={AirtelAmount} onChangeText={setAirtelAmount} />
                        <TouchableOpacity onPress={() => openAirtelAmountDialer(AirtelAmount)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {AirtelAmount}</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.faintBlack,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    invisibleButton: {
        width,
        flex: 1,
    },

    card: {
        width,
        backgroundColor: color.mainBackground,
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },

    input: {
        width: '100%',
        backgroundColor: color.accentLighten1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 20
    },

    description: {
        textAlign: 'center',
    },

    dialerButton: {
        backgroundColor: color.accent,
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dialerButtonText: {
        color: color.white,
        fontSize: 18,
    }
})

export default Prompt