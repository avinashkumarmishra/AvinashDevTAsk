import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { colors } from '../resources/Colors'

export default function Empty() {
    return (
        <SafeAreaView style={{backgroundColor: colors.background, flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>Not part of It</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = {
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: colors.white,
        fontSize: 14,
        marginTop: 20,
        fontFamily: 'AvenirNextLTPro-Medium'
    }
}
