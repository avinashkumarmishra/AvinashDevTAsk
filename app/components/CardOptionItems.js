import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native'
import { colors } from '../resources/Colors'
import { images } from '../resources/Images'

export default function CardOptionItems({onPress, onToggle}) {
    return (
        <View style={{
            paddingBottom: 20,
            backgroundColor: colors.white
        }}>
            {
                listOfOptions.map((item, index) => (
                    <OptionItem key={index} 
                        icon={item.icon} 
                        title={item.title} 
                        subText={item.subTitle}
                        isClickable={item.id === 2 || item.id === 3 && true}
                        isSwitchable={item.togglable}
                        onPress={() => onPress(item.id)}
                        onToggle={(isToggled) => onToggle(item.id, isToggled)}
                        />
                ))
            }
        </View>
    )
}

const OptionItem = ({icon, title, subText, isClickable, isSwitchable, onPress, onToggle}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: "row"}} 
                onPress={onPress}
                disabled={isClickable}
            >
                <Image source={icon}/>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subText}</Text>
                </View>
            </TouchableOpacity>
            {
                isSwitchable ? (
                    <Switch
                        style={{transform: [{ scaleX: .8 }, { scaleY: .8 }]}}
                        trackColor={{ false: colors.grey, true: colors.accent }}
                        thumbColor={colors.white}
                        value={isActive}
                        onValueChange={() => {
                            setIsActive(!isActive)
                            onToggle(!isActive)
                        }}
                    />
                ) : null
            }
        </View>
    )
}

const styles = {
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        width: "100%"
    },
    title: {
        fontSize: 14,
        fontFamily: "AvenirNextLTPro-Medium",
        color: colors.blue,
        marginLeft: 10,
        marginTop: 5
    },
    subTitle: {
        fontSize: 13,
        fontFamily: "AvenirNextLTPro-Regular",
        color: colors.grey,
        marginLeft: 10,
        marginTop: 5
    }
}

const listOfOptions = [
    {
      id: 1,
      title: 'Top-up account',
      subTitle: 'Deposit money to your account to use with card',
      icon: images.topUp
    },
    {
      id: 2,
      title: 'Weekly spending limit',
      subTitle: 'You haven’t set any spending limit on card',
      icon: images.gaugeFilled,
      togglable: true
    },
    {
      id: 3,
      title: 'Freeze card',
      subTitle: 'Your debit card is currently active',
      icon: images.freezeCard,
      togglable: true
    },
    {
      id: 4,
      title: 'Get a new card',
      subTitle: 'This deactivates your current debit card',
      icon: images.newCard
    },
    {
      id: 5,
      title: 'Deactivated cards',
      subTitle: 'Your previously deactivated cards',
      icon: images.deactivate
    }
];
