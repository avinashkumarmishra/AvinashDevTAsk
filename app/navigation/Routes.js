import React from 'react';
import {Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EmptyScreen from '../screens/Empty';
import DebitCardScreen from '../screens/DebitCard';
import WeeklySpendingScreen from '../screens/WeeklySpendings';
import {colors} from '../resources/Colors';
import {images} from '../resources/Images';

const BottomTabs = createBottomTabNavigator();
const NavStack = createStackNavigator();

const HomeTabs = () => {
    return (
        <BottomTabs.Navigator
                initialRouteName={routes[2]}
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.accent,
                    tabBarInActiveTintColor: colors.grey,
                    tabBarLabelStyle: styles.tabText
                }}>
                <BottomTabs.Screen
                    name={routes[1]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.aspireLogoGrey}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        )
                    }}
                />
                <BottomTabs.Screen
                    name={routes[2]}
                    component={DebitCardScreen}
                    options={{
                        tabBarLabel: 'Debit Card',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.debitCard}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                    listeners={({navigation}) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{name: routes[2]}],
                        });
                        },
                    })}
                />
                <BottomTabs.Screen
                    name={routes[5]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Payments',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.payments}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                />
                <BottomTabs.Screen
                    name={routes[6]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Credit',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.credit}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                />
                <BottomTabs.Screen
                    name={routes[7]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.user}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                />
            </BottomTabs.Navigator>
    )
}

export const routes = [
    "MainScreen",
    "Home",
    "DebitCard",
    "DebitCardScreen",
    "WeeklySpendingScreen",
    "Payments",
    "Credit",
    "Profile"
]

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="inverted"/>
            <NavStack.Navigator screenOptions={{headerShown: false}}>
                <NavStack.Screen name={routes[0]} component={HomeTabs} />
                <NavStack.Screen name={routes[4]} component={WeeklySpendingScreen} />
            </NavStack.Navigator>
        </NavigationContainer>
    )
}

const styles = {
    tabActiveIcon: {
        width: 24,
        height: 24,
        tintColor: colors.accent
    },
    tabInActiveIcon: {
        width: 24,
        height: 24,
        tintColor: colors.grey
    },
    tabText: {
        fontFamily: 'AvenirNextLTPro-DemiBold',
        fontSize: 12,
        fontWeight: '900'
    }
}
