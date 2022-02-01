import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../resources/Colors'
import * as Progress from 'react-native-progress';

export default function SpendingProgressItem({spentAmount, totalAmount}) {
    const progressValue = spentAmount/totalAmount;
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.header}>Debit card spending limit</Text>
                <Text testID="spend-limit" style={styles.totalText}>
                    <Text testID="spent-amount" style={styles.spentText}>${spentAmount}</Text> | ${totalAmount}
                </Text>
            </View>
            <Progress.Bar progress={progressValue} 
                width={350} 
                height={12} 
                color={colors.accent} 
                unfilledColor={colors.accent2} 
                borderWidth={0}
                style={styles.progressBar}/>
        </View>
    )
}

const styles = {
    container: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginLeft: 20, 
        marginRight: 20
    },
    header: {
        fontSize: 13,
        fontFamily: 'AvenirNextLTPro-Medium'
    },
    spentText: {
        fontSize: 13,
        fontFamily: 'AvenirNextLTPro-DemiBold',
        color: colors.accent
    },
    totalText: {
        fontSize: 13,
        fontFamily: 'AvenirNextLTPro-Medium',
        color: colors.grey
    },
    progressBar: {
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    }
}
