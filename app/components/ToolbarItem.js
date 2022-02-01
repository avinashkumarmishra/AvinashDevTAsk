import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import {images} from '../resources/Images'

export default function ToolbarItem({isBackVisible, onPress}) {
    return (
        <View style={styles.container}>
            {
                isBackVisible ? (
                    <TouchableOpacity onPress={onPress}>
                        <Image source={images.backArrow} 
                            style={styles.backArrow}/>
                    </TouchableOpacity>
                ) : <View />
            }
            <Image source={images.aspireLogoGreen} 
                style={{
                    marginRight: 20
                }}/>
        </View>
    )
}

const styles = {
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
    },
    backArrow: {
        marginLeft: 20,
        height: 16,
        width: 14
    }
}
