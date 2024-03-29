import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Linking, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import color from '../../style/color'

const { width } = Dimensions.get('window')

const Prompt = () => {
    const { code } = useRoute().params
    const navigation = useNavigation()

    // open dialer
    const openDialer = (code) => Linking.openURL(Platform.OS === 'android' ? `tel:${code}` : `telprompt:${code}`)

    // MTN CODE STARTS HERE
    const [buyMTNAirtimeFromBank, setMTNBuyAirtimeFromBank] = useState({ amount: '' })
    const [shareAirtemFromMTNToMTN, setShareAirtemFromMTNToMTN] = useState({ number: '', amount: '' })
    const [ninLinking, setNinLinking] = useState({ nin: '' })
    // MTN CODE ENDS HERE

    // 9Mobile starts here
    const [NMPin, setNMPin] = useState({ pin: '' })
    // 9Mobile ends  here

    // Airtel starts here
    const [AirtelPin, setAirtelPin] = useState({ pin: '' })
    const [AirtelAmount, setAirtelAmount] = useState({ amount: '' })
    // Airtel ends here

    // Access bank start here
    const [AccessBankBVN, setAccessBankBVN] = useState({ bvn: '' })
    // Access bank end here

    // Fidelity bank start here
    const [FidelityBankAirtimeAmount, setFidelityBankAirtimeAmount] = useState({ amount: '' })
    const [FidelityBankTransfer, setFidelityBankTransfer] = useState({ account: '', amount: '' })
    const [FidelityBankBillPayment, setFidelityBankBillPayment] = useState({ card: '', amount: '' })
    // Fidelity bank end here

    // First bank end here
    const [FirstBankTransfer, setFirstBankTransfer] = useState({ amount: '', account: '' })
    const [FirstBankAirtime, setFirstBankAirtime] = useState({ amount: '' })
    const [FirstBankOTP, setFirstBankOTP] = useState({ otp: '' })
    const [FirstBankDataPurchase, setFirstBankDataPurchase] = useState({ amount: '', phone: '' })
    // First bank end here

    // FCMB starts here
    const [FCMBTransfer, setFCMBTransfer] = useState({ amount: '', account: '' })
    const [FCMBAirtime, setFCMBAirtime] = useState({ amount: '' })
    const [FCMBPayBills, setFCMBPayBills] = useState({ amount: '', code: '' })
    // FCMB end here

    // GTB starts here
    const [GTBAirtime, setGTBAirtime] = useState({ amount: '', phone: '' })
    const [GTBTransfer, setGTBTransfer] = useState({ amount: '', account: '' })
    const [GTBTransferToOther, setGTBTransferToOther] = useState({ amount: '', account: '' })
    const [GTBPayBills, setGTBPayBills] = useState({ amount: '', code: '' })
    // GTB end here

    // Heritage Bank starts here
    const [HBAirtime, setHBAirtime] = useState({ amount: '' })
    const [HBTransfer, setHBTransfer] = useState({ amount: '', account: '' })
    const [HBPayBills, setHBPayBills] = useState({ id: '', amount: '' })
    // Heritage Bank end here

    // Keystone Bank starts here
    const [KSBAirtime, setKSBAirtime] = useState({ amount: '', phone: '' })
    const [KSBTransfer, setKSBTransfer] = useState({ amount: '', account: '' })
    // Keystone Bank end here

    // PLSB start here
    const [PLSBAirtime, setPLSBAirtime] = useState({ amount: '', phone: '' })
    const [PLSBTransfer, setPLSBTransfer] = useState({ amount: '', account: '' })
    // PLSB end here

    // Stanbic IBTC starts here
    const [SIBTSBAirtime, setSIBTSBAirtime] = useState({ amount: '' })
    const [SIBTSBTransfer, setSIBTSBTransfer] = useState({ amount: '', account: '' })
    // Stanbic IBTC end here

    // Sterling bank end here
    const [SterlingAirtime, setSterlingAirtime] = useState({ amount: '' })
    const [SterlingTransfer, setSterlingTransfer] = useState({ amount: '', account: '' })
    const [SterlingData, setSterlingData] = useState({ amount: '', phone: '' })
    const [SterlingBillPayment, setSterlingBillPayment] = useState({ amount: '', code: '' })
    // Sterling bank end here

    // unity bank end here
    const [UnionbankAirtime, setUnionbankAirtime] = useState({ amount: '' })
    const [UnionBankTransfer, setUnionBankTransfer] = useState({ amount: '', account: '' })
    // unity bank end here

    // united bank of Africa starts here
    const [UBAAirtime, setUBAAirtime] = useState({ amount: '' })
    const [UBATransfer, setUBATransfer] = useState({ amount: '', account: '' })
    // united bank of Africa end here

    // unity bank of Africa starts here
    const [UnityAirtime, setUnityAirtime] = useState({ amount: '' })
    const [UnityTransfer, setUnityTransfer] = useState({ amount: '', account: '' })
    // unity bank of Africa end here

    // wema bank of Africa starts here
    const [WemaTransfer, setWemaTransfer] = useState({ account: '', amount: '' })
    const [WemaTransferToOther, setWemaTransferToOther] = useState({ account: '', amount: '', code: '' })
    const [WemaAirtime, setWemaAirtime] = useState({ phone: '', amount: '' })
    const [WemaPayBills, setWemaPayBills] = useState({ code: '', card: '', amount: '' })
    // wema bank of Africa end here

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.invisibleButton} />
            <View style={styles.card}>
                <Text style={styles.description}>{code.description}</Text>
                {/* MTN USSD CODES START HERE */}
                {
                    code?.code == '*904*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={buyMTNAirtimeFromBank.amount} onChange={e => setMTNBuyAirtimeFromBank({ ...buyMTNAirtimeFromBank, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*904*${buyMTNAirtimeFromBank.amount == '' ? 'Amount' : buyMTNAirtimeFromBank.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*904*${buyMTNAirtimeFromBank.amount == '' ? 'Amount' : buyMTNAirtimeFromBank.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*777*Number*Amount*Pin#' &&
                    <>
                        <TextInput placeholder='Number' style={styles.input} value={shareAirtemFromMTNToMTN.number} onChange={e => setShareAirtemFromMTNToMTN({ ...shareAirtemFromMTNToMTN, number: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={shareAirtemFromMTNToMTN.amount} onChange={e => setShareAirtemFromMTNToMTN({ ...shareAirtemFromMTNToMTN, amount: e.nativeEvent.text })} />

                        <TouchableOpacity onPress={() => openDialer(`*777*${shareAirtemFromMTNToMTN.number}*${shareAirtemFromMTNToMTN.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*777*${shareAirtemFromMTNToMTN.number}*${shareAirtemFromMTNToMTN.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*785*Your NIN#' &&
                    <>
                        <TextInput placeholder='Your NIN' style={styles.input} value={ninLinking.nin} onChange={e => setNinLinking({ ...ninLinking, nin: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*785*${ninLinking.nin == '' ? 'Your NIN' : ninLinking.nin}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*785*${ninLinking.nin == '' ? 'Your NIN' : ninLinking.nin}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* MTN USSD CODES END HERE */}

                {/* 9MOBILE USSD CODES START HERE */}
                {
                    code?.code == '*232*PIN#' &&
                    <>
                        <TextInput placeholder='PIN' style={styles.input} value={NMPin.pin} onChange={e => setNMPin({ ...NMPin, pin: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*232*${NMPin.pin == '' ? '' : NMPin.pin}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*232*${NMPin.pin == '' ? '' : NMPin.pin}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* 9MOBILE USSD CODES END HERE */}

                {/* AIRTEL USSD CODES START HERE */}
                {
                    code?.code == '*123*PIN#' &&
                    <>
                        <TextInput placeholder='PIN' style={styles.input} value={AirtelPin.pin} onChange={e => setAirtelPin({ ...AirtelPin, pin: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*123*${AirtelPin.pin == '' ? '' : AirtelPin.pin}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*123*${AirtelPin.pin == '' ? '' : AirtelPin.pin}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*123*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={AirtelAmount.amount} onChange={e => setAirtelAmount({ ...AirtelAmount, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*123*${AirtelAmount.amount == '' ? '' : AirtelAmount.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*123*${AirtelAmount.amount == '' ? '' : AirtelAmount.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* AIRTEL USSD CODES END HERE */}

                {/* ACCESS BANK USSD CODES START HERE */}
                {
                    code?.code == '*901*BVN#' &&
                    <>
                        <TextInput placeholder='BVN' style={styles.input} value={AccessBankBVN.bvn} onChange={e => setAccessBankBVN({ ...AccessBankBVN, bvn: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*901*${AccessBankBVN.bvn == '' ? '' : AccessBankBVN.bvn}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*901*${AccessBankBVN.bvn == '' ? '' : AccessBankBVN.bvn}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* ACCESS BANK USSD CODES END HERE */}

                {/* FIDELITY BANK USSD CODES START HERE */}
                {
                    code?.code == '*770*AMOUNT#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FidelityBankAirtimeAmount.amount} onChange={e => setFidelityBankAirtimeAmount({ ...FidelityBankAirtimeAmount, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*770*${FidelityBankAirtimeAmount.amount == '' ? '' : FidelityBankAirtimeAmount.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*770*${FidelityBankAirtimeAmount.amount == '' ? '' : FidelityBankAirtimeAmount.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*770*ACCOUNT_NUMBER*AMOUNT#' &&
                    <>
                        <TextInput placeholder='Account' style={styles.input} value={FidelityBankTransfer.account} onChange={e => setFidelityBankTransfer({ ...FidelityBankTransfer, account: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={FidelityBankTransfer.amount} onChange={e => setFidelityBankTransfer({ ...FidelityBankTransfer, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*770*${FidelityBankTransfer.account == '' ? '' : FidelityBankTransfer.account}*${FidelityBankTransfer.amount == '' ? '' : FidelityBankTransfer.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*770*${FidelityBankTransfer.account == '' ? '' : FidelityBankTransfer.account}*${FidelityBankTransfer.amount == '' ? '' : FidelityBankTransfer.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*770*CODE*SMART CARD NUMBER*AMOUNT#' &&
                    <>
                        <TextInput placeholder='Card Number' style={styles.input} value={FidelityBankBillPayment.account} onChange={e => setFidelityBankBillPayment({ ...FidelityBankBillPayment, card: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={FidelityBankBillPayment.amount} onChange={e => setFidelityBankBillPayment({ ...FidelityBankBillPayment, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*770*${FidelityBankBillPayment.card == '' ? '' : FidelityBankBillPayment.card}*${FidelityBankBillPayment.amount == '' ? '' : FidelityBankBillPayment.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*770*${FidelityBankBillPayment.card == '' ? '' : FidelityBankBillPayment.card}*${FidelityBankBillPayment.amount == '' ? '' : FidelityBankBillPayment.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* FIDELITY BANK USSD CODES END HERE */}

                {/* FIRST BANK USSD CODES STARTS HERE */}
                {
                    code?.code == '*894*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FirstBankTransfer.amount} onChange={e => setFirstBankTransfer({ ...FirstBankTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account' style={{ ...styles.input, marginTop: 0 }} value={FirstBankTransfer.account} onChange={e => setFirstBankTransfer({ ...FirstBankTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankTransfer.amount == '' ? '' : FirstBankTransfer.amount}*${FirstBankTransfer.account == '' ? '' : FirstBankTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankTransfer.amount == '' ? '' : FirstBankTransfer.amount}*${FirstBankTransfer.account == '' ? '' : FirstBankTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*894*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FirstBankAirtime.amount} onChange={e => setFirstBankAirtime({ ...FirstBankAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankAirtime.amount == '' ? '' : FirstBankAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankAirtime.amount == '' ? '' : FirstBankAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*894*OTP#' &&
                    <>
                        <TextInput placeholder='OTP' style={styles.input} value={FirstBankOTP.otp} onChange={e => setFirstBankOTP({ ...FirstBankOTP, otp: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankOTP.otp == '' ? '' : FirstBankOTP.otp}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankOTP.otp == '' ? '' : FirstBankOTP.otp}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*894*Amount*PhoneNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FirstBankDataPurchase.amount} onChange={e => setFirstBankDataPurchase({ ...FirstBankDataPurchase, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Phone' style={{ ...styles.input, marginTop: 0 }} value={FirstBankDataPurchase.phone} onChange={e => setFirstBankDataPurchase({ ...FirstBankDataPurchase, phone: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankDataPurchase.amount == '' ? '' : FirstBankDataPurchase.amount}*${FirstBankDataPurchase.phone == '' ? '' : FirstBankDataPurchase.phone}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankDataPurchase.amount == '' ? '' : FirstBankDataPurchase.amount}*${FirstBankDataPurchase.phone == '' ? '' : FirstBankDataPurchase.phone}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* FIRST BANK USSD CODES END HERE */}

                {/* FCMB USSD CODES STARTS HERE */}
                {
                    code?.code == '*329*Amount*AccountNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FCMBTransfer.amount} onChange={e => setFCMBTransfer({ ...FCMBTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={FCMBTransfer.account} onChange={e => setFCMBTransfer({ ...FCMBTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*329*${FCMBTransfer.amount == '' ? '' : FCMBTransfer.amount}*${FCMBTransfer.account == '' ? '' : FCMBTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*329*${FCMBTransfer.amount == '' ? '' : FCMBTransfer.amount}*${FCMBTransfer.account == '' ? '' : FCMBTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*329*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FCMBAirtime.amount} onChange={e => setFCMBAirtime({ ...FCMBAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*329*${FCMBAirtime.amount == '' ? '' : FCMBAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*329*${FCMBAirtime.amount == '' ? '' : FCMBAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*329*2*Amount*MerchantCode#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FCMBPayBills.amount} onChange={e => setFCMBPayBills({ ...FCMBPayBills, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Merchant Code' style={{ ...styles.input, marginTop: 0 }} value={FCMBPayBills.code} onChange={e => setFCMBPayBills({ ...FCMBPayBills, code: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*329*${FCMBPayBills.amount == '' ? '' : FCMBPayBills.amount}*${FCMBPayBills.code == '' ? '' : FCMBPayBills.code}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*329*${FCMBPayBills.amount == '' ? '' : FCMBPayBills.amount}*${FCMBPayBills.code == '' ? '' : FCMBPayBills.code}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* FCMB USSD CODES END HERE */}

                {/* GTB USSD CODES STARTS HERE */}
                {
                    code?.code == '*737*Amount*MobileNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={GTBAirtime.amount} onChange={e => setGTBAirtime({ ...GTBAirtime, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Mobile Number' style={{ ...styles.input, marginTop: 0 }} value={GTBAirtime.phone} onChange={e => setGTBAirtime({ ...GTBAirtime, phone: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*737*${GTBAirtime.amount == '' ? '' : GTBAirtime.amount}*${GTBAirtime.phone == '' ? '' : GTBAirtime.phone}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*737*${GTBAirtime.amount == '' ? '' : GTBAirtime.amount}*${GTBAirtime.phone == '' ? '' : GTBAirtime.phone}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*737*1*Amount*RecipientAccountNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={GTBTransfer.amount} onChange={e => setGTBTransfer({ ...GTBTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={GTBTransfer.account} onChange={e => setGTBTransfer({ ...GTBTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*737*${GTBTransfer.amount == '' ? '' : GTBTransfer.amount}*${GTBTransfer.account == '' ? '' : GTBTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*737*${GTBTransfer.amount == '' ? '' : GTBTransfer.amount}*${GTBTransfer.account == '' ? '' : GTBTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*737*2*Amount*RecipientAccountNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={GTBTransferToOther.amount} onChange={e => setGTBTransferToOther({ ...GTBTransferToOther, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={GTBTransferToOther.account} onChange={e => setGTBTransferToOther({ ...GTBTransferToOther, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*737*${GTBTransferToOther.amount == '' ? '' : GTBTransferToOther.amount}*${GTBTransferToOther.account == '' ? '' : GTBTransferToOther.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*737*${GTBTransferToOther.amount == '' ? '' : GTBTransferToOther.amount}*${GTBTransferToOther.account == '' ? '' : GTBTransferToOther.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*737*3*Amount*MerchantCode#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={GTBPayBills.amount} onChange={e => setGTBPayBills({ ...GTBPayBills, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Merchant Code' style={{ ...styles.input, marginTop: 0 }} value={GTBPayBills.code} onChange={e => setGTBPayBills({ ...GTBPayBills, code: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*737*${GTBPayBills.amount == '' ? '' : GTBPayBills.amount}*${GTBPayBills.code == '' ? '' : GTBPayBills.code}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*737*${GTBPayBills.amount == '' ? '' : GTBPayBills.amount}*${GTBPayBills.code == '' ? '' : GTBPayBills.code}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* GTB USSD CODES END HERE */}

                {/* HERITAGE BANK USSD CODES STARTS HERE */}
                {
                    code?.code == '*322*030*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={HBAirtime.amount} onChange={e => setHBAirtime({ ...HBAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*322*030*${HBAirtime.amount == '' ? '' : HBAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*322*030*${HBAirtime.amount == '' ? '' : HBAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*322*030*AccountNumber*Amount#' &&
                    <>
                        <TextInput placeholder='Account Number' style={styles.input} value={HBTransfer.account} onChange={e => setHBTransfer({ ...HBTransfer, account: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={HBTransfer.amount} onChange={e => setHBTransfer({ ...HBTransfer, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*322*030*${HBTransfer.account == '' ? '' : HBTransfer.account}*${HBTransfer.amount == '' ? '' : HBTransfer.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*322*030*${HBTransfer.account == '' ? '' : HBTransfer.account}*${HBTransfer.amount == '' ? '' : HBTransfer.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*322*030*BillerID*Amount#' &&
                    <>
                        <TextInput placeholder='Biller ID' style={styles.input} value={HBPayBills.id} onChange={e => setHBPayBills({ ...HBPayBills, id: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={HBPayBills.amount} onChange={e => setHBPayBills({ ...HBPayBills, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*322*030*${HBPayBills.id == '' ? '' : HBPayBills.id}*${HBPayBills.amount == '' ? '' : HBPayBills.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*322*030*${HBPayBills.id == '' ? '' : HBPayBills.id}*${HBPayBills.amount == '' ? '' : HBPayBills.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* HERITAGE BANK USSD CODES END HERE */}

                {/* KEYSTONE BANK USSD CODES STARTS HERE */}
                {
                    code?.code == '*7111*Amount*Mobile Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={KSBAirtime.amount} onChange={e => setKSBAirtime({ ...KSBAirtime, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Phone Number' style={{ ...styles.input, marginTop: 0 }} value={KSBAirtime.phone} onChange={e => setKSBAirtime({ ...KSBAirtime, phone: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*7111*${KSBAirtime.amount == '' ? '' : KSBAirtime.amount}*${KSBAirtime.phone == '' ? '' : KSBAirtime.phone}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*7111*${KSBAirtime.amount == '' ? '' : KSBAirtime.amount}*${KSBAirtime.phone == '' ? '' : KSBAirtime.phone}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*7111*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={KSBTransfer.amount} onChange={e => setKSBTransfer({ ...KSBTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={KSBTransfer.account} onChange={e => setKSBTransfer({ ...KSBTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*7111*${KSBTransfer.amount == '' ? '' : KSBTransfer.amount}*${KSBTransfer.account == '' ? '' : KSBTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*7111*${KSBTransfer.amount == '' ? '' : KSBTransfer.amount}*${KSBTransfer.account == '' ? '' : KSBTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* KEYSTONE BANK USSD CODES END HERE */}

                {/* POLARIS BANK USSD CODES STARTS HERE */}
                {
                    code?.code == '*833*Amount*Phone Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={PLSBAirtime.amount} onChange={e => setPLSBAirtime({ ...PLSBAirtime, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Phone Number' style={{ ...styles.input, marginTop: 0 }} value={PLSBAirtime.phone} onChange={e => setPLSBAirtime({ ...PLSBAirtime, phone: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*833*${PLSBAirtime.amount == '' ? '' : PLSBAirtime.amount}*${PLSBAirtime.phone == '' ? '' : PLSBAirtime.phone}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*833*${PLSBAirtime.amount == '' ? '' : PLSBAirtime.amount}*${PLSBAirtime.phone == '' ? '' : PLSBAirtime.phone}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*833*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={PLSBTransfer.amount} onChange={e => setPLSBTransfer({ ...PLSBTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={PLSBTransfer.account} onChange={e => setPLSBTransfer({ ...PLSBTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*833*${PLSBTransfer.amount == '' ? '' : PLSBTransfer.amount}*${PLSBTransfer.account == '' ? '' : PLSBTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*833*${PLSBTransfer.amount == '' ? '' : PLSBTransfer.amount}*${PLSBTransfer.account == '' ? '' : PLSBTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* POLARIS BANK USSD CODES END HERE */}

                {/* STANDBIC IBTC USSD CODES START HERE */}
                {
                    code?.code == '*909*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={SIBTSBAirtime.amount} onChange={e => setSIBTSBAirtime({ ...SIBTSBAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*909*${SIBTSBAirtime.amount == '' ? '' : SIBTSBAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*909*${SIBTSBAirtime.amount == '' ? '' : SIBTSBAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*909*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={SIBTSBTransfer.amount} onChange={e => setSIBTSBTransfer({ ...SIBTSBTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={SIBTSBTransfer.account} onChange={e => setSIBTSBTransfer({ ...SIBTSBTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*909*${SIBTSBTransfer.amount == '' ? '' : SIBTSBTransfer.amount}*${SIBTSBTransfer.account == '' ? '' : SIBTSBTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*909*${SIBTSBTransfer.amount == '' ? '' : SIBTSBTransfer.amount}*${SIBTSBTransfer.account == '' ? '' : SIBTSBTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* STANDBIC IBTC USSD CODES END HERE */}

                {/* STERLING USSD CODES STARTS HERE */}
                {
                    code?.code == '*822*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={SterlingAirtime.amount} onChange={e => setSterlingAirtime({ ...SterlingAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*822*${SterlingAirtime.amount == '' ? '' : SterlingAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*822*${SterlingAirtime.amount == '' ? '' : SterlingAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*822*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={SterlingTransfer.amount} onChange={e => setSterlingTransfer({ ...SterlingTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={SterlingTransfer.account} onChange={e => setSterlingTransfer({ ...SterlingTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*822*${SterlingTransfer.amount == '' ? '' : SterlingTransfer.amount}*${SterlingTransfer.account == '' ? '' : SterlingTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*822*${SterlingTransfer.amount == '' ? '' : SterlingTransfer.amount}*${SterlingTransfer.account == '' ? '' : SterlingTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*822*Amount*Phone Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={SterlingData.amount} onChange={e => setSterlingData({ ...SterlingData, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={SterlingData.phone} onChange={e => setSterlingData({ ...SterlingData, phone: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*822*${SterlingData.amount == '' ? '' : SterlingData.amount}*${SterlingData.phone == '' ? '' : SterlingData.phone}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*822*${SterlingData.amount == '' ? '' : SterlingData.amount}*${SterlingData.phone == '' ? '' : SterlingData.phone}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*822*Amount*Merchant Code#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={SterlingBillPayment.amount} onChange={e => setSterlingBillPayment({ ...SterlingBillPayment, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={SterlingBillPayment.code} onChange={e => setSterlingBillPayment({ ...SterlingBillPayment, code: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*822*${SterlingBillPayment.amount == '' ? '' : SterlingBillPayment.amount}*${SterlingBillPayment.code == '' ? '' : SterlingBillPayment.code}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*822*${SterlingBillPayment.amount == '' ? '' : SterlingBillPayment.amount}*${SterlingBillPayment.code == '' ? '' : SterlingBillPayment.code}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* STERLING USSD CODES END HERE */}

                {/* UNION BANK USSD CODES STARTS HERE */}
                {
                    code?.code == '*826*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={UnionbankAirtime.amount} onChange={e => setUnionbankAirtime({ ...UnionbankAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*826*${UnionbankAirtime.amount == '' ? '' : UnionbankAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*826*${UnionbankAirtime.amount == '' ? '' : UnionbankAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*826*2*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={UnionBankTransfer.amount} onChange={e => setUnionBankTransfer({ ...UnionBankTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={UnionBankTransfer.account} onChange={e => setUnionBankTransfer({ ...UnionBankTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*826*${UnionBankTransfer.amount == '' ? '' : UnionBankTransfer.amount}*${UnionBankTransfer.account == '' ? '' : UnionBankTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*826*${UnionBankTransfer.amount == '' ? '' : UnionBankTransfer.amount}*${UnionBankTransfer.account == '' ? '' : UnionBankTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* UNION BANK USSD CODES END HERE */}

                {/* UNITED BANK OF AFRICA USSD CODES STARTS HERE */}
                {
                    code?.code == '*919*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={UBAAirtime.amount} onChange={e => setUBAAirtime({ ...UBAAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*919*${UBAAirtime.amount == '' ? '' : UBAAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*919*${UBAAirtime.amount == '' ? '' : UBAAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*919*3*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={UBATransfer.amount} onChange={e => setUBATransfer({ ...UBATransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={UBATransfer.account} onChange={e => setUBATransfer({ ...UBATransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*919*${UBATransfer.amount == '' ? '' : UBATransfer.amount}*${UBATransfer.account == '' ? '' : UBATransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*919*${UBATransfer.amount == '' ? '' : UBATransfer.amount}*${UBATransfer.account == '' ? '' : UBATransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* UNITY BANK USSD CODES END HERE */}

                {/* UNITY BANK USSD CODES STARTS HERE */}
                {
                    code?.code == '*7799*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={UnityAirtime.amount} onChange={e => setUnityAirtime({ ...UnityAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*7799*${UnityAirtime.amount == '' ? '' : UnityAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*7799*${UnityAirtime.amount == '' ? '' : UnityAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*7799*Amount*AccountNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={UnityTransfer.amount} onChange={e => setUnityTransfer({ ...UnityTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={UnityTransfer.account} onChange={e => setUnityTransfer({ ...UnityTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*7799*${UnityTransfer.amount == '' ? '' : UnityTransfer.amount}*${UnityTransfer.account == '' ? '' : UnityTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*7799*${UnityTransfer.amount == '' ? '' : UnityTransfer.amount}*${UnityTransfer.account == '' ? '' : UnityTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* UNITY BANK USSD CODES END HERE */}

                {/* WEMA BANK USSD CODES END HERE */}
                {
                    code?.code == '*945*account number*amount#' &&
                    <>
                        <TextInput placeholder='Account Number' style={styles.input} value={WemaTransfer.account} onChange={e => setWemaTransfer({ ...WemaTransfer, account: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={WemaTransfer.amount} onChange={e => setWemaTransfer({ ...WemaTransfer, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*945*${WemaTransfer.account == '' ? '' : WemaTransfer.account}*${WemaTransfer.amount == '' ? '' : WemaTransfer.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*945*${WemaTransfer.account == '' ? '' : WemaTransfer.account}*${WemaTransfer.amount == '' ? '' : WemaTransfer.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*945*account number*amount*bank code#' &&
                    <>
                        <TextInput placeholder='Account Number' style={styles.input} value={WemaTransferToOther.account} onChange={e => setWemaTransferToOther({ ...WemaTransferToOther, account: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={WemaTransferToOther.amount} onChange={e => setWemaTransferToOther({ ...WemaTransferToOther, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Bank Code' style={{ ...styles.input, marginTop: 0 }} value={WemaTransferToOther.code} onChange={e => setWemaTransferToOther({ ...WemaTransferToOther, code: e.nativeEvent.text })} />

                        <TouchableOpacity onPress={() => openDialer(`*945*${WemaTransferToOther.account == '' ? '' : WemaTransferToOther.account}*${WemaTransferToOther.amount == '' ? '' : WemaTransferToOther.amount}*${WemaTransferToOther.code == '' ? '' : WemaTransferToOther.code}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*945*${WemaTransferToOther.account == '' ? '' : WemaTransferToOther.account}*${WemaTransferToOther.amount == '' ? '' : WemaTransferToOther.amount}*${WemaTransferToOther.code == '' ? '' : WemaTransferToOther.code}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*945*phone number*amount#' &&
                    <>
                        <TextInput placeholder='Phone Number' style={styles.input} value={WemaAirtime.phone} onChange={e => setWemaAirtime({ ...WemaAirtime, phone: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={WemaAirtime.amount} onChange={e => setWemaAirtime({ ...WemaAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*945*${WemaAirtime.phone == '' ? '' : WemaAirtime.phone}*${WemaAirtime.amount == '' ? '' : WemaAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*945*${WemaAirtime.phone == '' ? '' : WemaAirtime.phone}*${WemaAirtime.amount == '' ? '' : WemaAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*945*service code*smart card number*amount#' &&
                    <>
                        <TextInput placeholder='Service Code' style={styles.input} value={WemaPayBills.code} onChange={e => setWemaPayBills({ ...WemaPayBills, code: e.nativeEvent.text })} />
                        <TextInput placeholder='Smart Card' style={{ ...styles.input, marginTop: 0 }} value={WemaPayBills.card} onChange={e => setWemaPayBills({ ...WemaPayBills, card: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={WemaPayBills.amount} onChange={e => setWemaPayBills({ ...WemaPayBills, amount: e.nativeEvent.text })} />

                        <TouchableOpacity onPress={() => openDialer(`*945*${WemaPayBills.code == '' ? '' : WemaPayBills.code}*${WemaPayBills.card == '' ? '' : WemaPayBills.card}*${WemaPayBills.amount == '' ? '' : WemaPayBills.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*945*${WemaPayBills.code == '' ? '' : WemaPayBills.code}*${WemaPayBills.card == '' ? '' : WemaPayBills.card}*${WemaPayBills.amount == '' ? '' : WemaPayBills.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* WEMA BANK USSD CODES END HERE */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${color.black}20`,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    invisibleButton: {
        width,
        flex: 1,
    },

    card: {
        width,
        backgroundColor: color.background,
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
        backgroundColor: `${color.accent}20`,
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
        fontSize: 14,
    }
})

export default Prompt