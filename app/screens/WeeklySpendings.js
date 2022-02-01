import React, { useState } from 'react'
import { 
    View, 
    Text, 
    SafeAreaView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Platform, 
    StatusBar 
} from 'react-native'
import { colors } from '../resources/Colors'
import ToolbarItem from '../components/ToolbarItem'
import { images } from '../resources/Images'
import { useSelector, useDispatch } from 'react-redux'
import { setCardLimit } from '../redux/actions/limit'

export default function WeeklySpendings({navigation}) {
    const dispatch = useDispatch();
    const spendLimit = useSelector(state => state.limit.amount);
    const [inputAmount, setInputAmount] = useState(spendLimit);
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <ToolbarItem isBackVisible onPress={() => navigation.goBack()}/>
                <Text style={styles.header}>Spending limit</Text>
                <View style={styles.subContainer}>
                    <View style={styles.titleContainer}>
                        <Image source={images.gauge} style={styles.icon}/>
                        <Text style={styles.title}>Set a weekly debit card spending limit</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.currencyContainer}>
                            <Text style={styles.currencyText}>S$</Text>
                        </View>
                        <TextInput style={styles.amountText} 
                            keyboardType="numeric" 
                            placeholder="1,000"
                            value={inputAmount.toString()}
                            onChangeText={(amount) => setInputAmount(amount)}/>
                    </View>
                    <View style={styles.divider}/>
                    <Text style={styles.subTitle}>
                        Here weekly means the last 7 days - not the calendar week
                    </Text>
                    <View style={styles.suggestedAmountRow}>
                        <TouchableOpacity style={styles.suggestedAmountContainer} onPress={() => {
                            setInputAmount(5000)
                        }}>
                            <Text style={styles.suggestedAmountText}>S$ 5,000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestedAmountContainer} onPress={() => {
                            setInputAmount(10000)
                        }}>
                            <Text style={styles.suggestedAmountText}>S$ 10,000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestedAmountContainer} onPress={() => {
                            setInputAmount(20000)
                        }}>
                            <Text style={styles.suggestedAmountText}>S$ 20,000</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={[
                                styles.button, 
                                {backgroundColor: inputAmount > 0 ? colors.accent : colors.grey}
                            ]}
                            onPress={() => {
                                if(inputAmount > 0) {
                                    dispatch(setCardLimit(inputAmount))
                                    navigation.goBack()
                                }
                        }}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        backgroundColor: colors.background, 
        flexGrow: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: Platform.OS === "android" ? (StatusBar.currentHeight + 20) : 0
    },
    container: {
        height: "100%",
        width: "100%"
    },
    subContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        marginTop: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        marginTop: 24,
        marginLeft: 20,
        fontSize: 24,
        fontFamily: 'AvenirNextLTPro-Bold',
        color: colors.white
    },
    titleContainer: {
        flexDirection: "row", 
        paddingLeft: 20, 
        paddingTop: 20, 
        alignItems: "center"
    },
    title: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'AvenirNextLTPro-Medium',
    },
    subTitle: {
        marginLeft: 20,
        marginTop: 12,
        fontSize: 13,
        fontFamily: 'AvenirNextLTPro-Regular',
        color: colors.grey
    }
    ,
    icon: {
        width: 16,
        height: 16,
        resizeMode: "cover"
    },
    inputContainer: {
        flexDirection: "row", 
        marginLeft: 20, 
        marginTop: 20, 
        alignItems: "center"
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
        marginRight: 10,
        height: 24
    },
    currencyText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: 'AvenirNextLTPro-Bold',
    },
    amountText: {
        color: colors.black,
        fontSize: 24,
        fontFamily: 'AvenirNextLTPro-Bold',
        width: "100%",
        height: 25,
        marginTop: 3
    },
    divider: {
        backgroundColor: colors.grey,
        height: .6,
        width: "90%",
        marginTop: 10,
        marginLeft: 20,
        opacity: .5
    },
    suggestedAmountRow: {
        flexDirection: "row", 
        marginTop: 20, 
        justifyContent: "space-evenly"
    },
    suggestedAmountContainer: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: colors.accent2
    },
    suggestedAmountText: {
        color: colors.accent,
        fontSize: 12,
        fontFamily: 'AvenirNextLTPro-DemiBold',
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: 'AvenirNextLTPro-DemiBold'
    },
    buttonContainer: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute'
    },
    button: {
        padding: 15,
        alignItems: "center",
        width: "70%",
        borderRadius: 25
    }
}
