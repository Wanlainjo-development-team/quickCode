import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform, Linking } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import color from '../../style/color'

const { width } = Dimensions.get('window')

const Codeinfo = () => {
    const { code } = useRoute().params
    const navigation = useNavigation()

    const openDialer = () => {
        Linking.openURL(Platform.OS === 'android' ? `tel:${code.code}` : `telprompt:${code?.code}`)
    }

    const gotoPrompt = () => {
        navigation.goBack()
        navigation.navigate('Prompt', { code })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.invisibleButton} />
            <View style={styles.card}>
                <Text style={styles.description}>{code.description}</Text>
                <View style={styles.controles}>
                    <TouchableOpacity onPress={() => code.dial != false ? openDialer() : gotoPrompt()} style={styles.dialButton}>
                        <Text style={styles.dialButtonText}>Dial {code?.code}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
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

    description: {
        color: color.black,
        fontSize: 18,
        textAlign: 'center',
    },

    controles: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },

    dialButton: {
        backgroundColor: color.accent,
        width: '80%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dialButtonText: {
        color: color.white,
        fontSize: 14
    },

    cancelButton: {
        backgroundColor: `${color.accent}20`,
        width: '18%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cancelButtonText: {
        color: color.accent,
        fontSize: 14,
    },
})

export default Codeinfo