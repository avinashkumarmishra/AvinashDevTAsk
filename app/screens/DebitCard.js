import React, {useEffect, useState} from 'react'
import { 
    View, 
    Text, 
    SafeAreaView, 
    ScrollView, 
    Platform, 
    StatusBar 
} from 'react-native'
import AvailableBalanceItem from '../components/AvailableBalanceItem'
import CardItem from '../components/CardItem'
import CardOptionItems from '../components/CardOptionItems'
import SpendingProgressItem from '../components/SpendingProgressItem'
import ToolbarItem from '../components/ToolbarItem'
import { colors } from '../resources/Colors'
import { useSelector, useDispatch } from 'react-redux'
import {getCardDetails} from '../redux/actions/card'
import {setCardLimit} from '../redux/actions/limit'
import LoadingItem from '../components/LoadingItem'

export default function DebitCard({navigation}) {
    const dispatch = useDispatch();
    const card = useSelector(state => state.card.card);
    const isLoading = useSelector(state => state.card.loading);
    const error = useSelector(state => state.card.error);
    const spendLimit = useSelector(state => state.limit.amount);
    const [isSpendLimitActive, setSpendLimitActive] = useState(spendLimit ? true : false);

    useEffect(() => {
        dispatch(getCardDetails())
    }, [dispatch])

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {card === null && <LoadingItem text={"Syncing Details"}/> }
            {card !== null && !isLoading && (
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <ToolbarItem />
                            <Text style={styles.header}>Debit Card</Text>
                            <AvailableBalanceItem amount={card.balance_amount}/>
                            <View style={styles.backgroundCard} />
                            <CardItem ownerName={card.owner_name}
                                expiry={card.expiry_date} 
                                cvv={card.cvv_number}
                                cardNumber={card.card_number}/>
                            {isSpendLimitActive ? (
                                <SpendingProgressItem spentAmount={card.amount_spent} 
                                totalAmount={spendLimit === 0 ? card.spend_limit : spendLimit}/>
                            ) : null
                            }
                            <CardOptionItems onPress={() => {}}
                            onToggle={(id, isToggled) => {
                                if(id === 2) {
                                    if(isToggled) {
                                        if(spendLimit === 0) {
                                            dispatch(setCardLimit(card.spend_limit))
                                        }
                                        setSpendLimitActive(true)
                                        navigation.navigate("WeeklySpendingScreen")
                                    } else {
                                        setSpendLimitActive(false)
                                    }
                                }
                            }}
                            />
                        </View>
                    </ScrollView>
                </View>
            )}
            {error && !isLoading && <Text>{error}</Text>}
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        backgroundColor: colors.background, 
        flexGrow: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        height: "100%",
        width: "100%"
    },
    header: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 24,
        fontFamily: 'AvenirNextLTPro-Bold',
        color: colors.white
    },
    backgroundCard: {
        backgroundColor: colors.white,
        height: "100%",
        width: "100%",
        position: "absolute",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 280
    }
}
