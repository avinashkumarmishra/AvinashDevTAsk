import React from 'react'
import { View, Text } from 'react-native'
import * as Progress from 'react-native-progress'
import { colors } from '../resources/Colors'

export default function LoadingItem({text}) {
    return (
        <View style={styles.container}>
            <Progress.Circle size={35} 
                indeterminate={true}
                color={colors.white}
                borderWidth={2} />
            <Text testID="text" style={styles.text}>{text}</Text>
        </View>
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
