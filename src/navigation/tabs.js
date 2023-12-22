import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import BillScreen from '../screen/BillScreen';
import MenuScreen from '../screen/MenuScreen';
import AccountScreen from '../screen/AccountScreen';
import { Image, View, Text } from 'react-native'


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 15,
                marginHorizontal: 20,

                height: 60,
                borderRadius: 15,
                shadowColor: '#000',
                shadowOpacity: 0.06,
                shadowOffset: {
                    width: 10,
                    height: 10,
                }
            }
        }}>
            {

            }
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/images/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#a0522d' : '#748c94',
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Menu" component={MenuScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/images/menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 27,
                                height: 27,
                                tintColor: focused ? '#a0522d' : '#748c94',
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Bill" component={BillScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/images/bill.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#a0522d' : '#748c94',
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/images/account.png')}
                            resizeMode='contain'
                            style={{
                                width: 32,
                                height: 32,
                                tintColor: focused ? '#a0522d' : '#748c94',
                            }}
                        />
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

export default Tabs;