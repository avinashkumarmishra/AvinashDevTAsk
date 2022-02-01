import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../resources/Colors'

export default function AvailableBalanceItem({amount}) {
    return (
        <View style={{padding: 20}}>
            <Text style={styles.headerText}>Available Balance</Text>
            <View style={styles.totalBalanceContainer}>
                <View style={styles.currencyContainer}>
                    <Text style={styles.currencyText}>S$</Text>
                </View>
                <Text testID="amount" style={styles.amountText}>{amount}</Text>
            </View>
        </View>
    )
}

const styles = {
    headerText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'AvenirNextLTPro-Medium',
    },
    totalBalanceContainer: {
        flexDirection: "row",
        marginTop: 12,
        alignItems: "center",
    },
    currencyContainer: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: colors.accent,
        marginRight: 10
    },
    currencyText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: 'AvenirNextLTPro-Bold',
    },
    amountText: {
        color: colors.white,
        fontSize: 24,
        fontFamily: 'AvenirNextLTPro-Bold',
        paddingTop: 3
    }
}
