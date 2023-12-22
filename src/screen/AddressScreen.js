import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../ipconfig';
import { colors } from '../Constant';

const AddressScreen = ({ navigation,route }) => {

    const [refreshKey, setRefreshKey] = useState(0);

    const [addressList, setAddressList] = useState([]);

    const [selectedAddress, setSelectedAddress] = useState(0);

    const [userAddress, setUserAddress] = useState({});

    

    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('loginInfor');
            return token ? JSON.parse(token) : "";
        } catch (error) {
            console.log(error)
        }

    };

    const aa = () => {
        console.log(userAddress);
    }


    useEffect(() => {
        const getAddress = async () => {
            try {
                const token = await getToken();
                const response = await axios.get(`${BASE_URL}/api/user/userLocations`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
                if (response.status >= 200 && response.status < 300) {
                    setAddressList(response.data);
                    // console.log(response.data)
                    console.log("get List address success");
                    setUserAddress(response.data[0]);
                }

            } catch (error) {
                console.log(error)
            }
        }
        getAddress().catch((error) => { console.log(error) })
    }, [refreshKey]);
    
    useEffect(() => {
        const setParam = () => {
            setRefreshKey(prevKey => prevKey + 1);
            console.log(refreshKey);
        }
        setParam();
    },[route.params])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 20
                    }}>
                    <Image
                        source={require('../../assets/images/back.png')}
                        style={{ width: 30, height: 30 }}
                    />
                    <Text style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: 'black'
                    }}>Address</Text>
                </TouchableOpacity>
            </View>
            <View>
                {addressList.map((address, index) => {
                    return (
                        <TouchableOpacity activeOpacity={0.8}
                            key={address.id}
                            onPress={() => {
                                setSelectedAddress(index);
                                setUserAddress(address);
                            }}
                        >
                            <View style={{
                                backgroundColor: selectedAddress === index ? "#ffebcd" : colors.COLOR_LIGHT,
                                height: 90,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.1,
                                shadowRadius: 7,
                                elevation: 15,
                                borderRadius: 10,
                                marginVertical: 10,
                                marginHorizontal: 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>

                                <Image source={require('../../assets/images/address.png')}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                />
                                <View>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 17
                                    }}>Địa chỉ nhận hàng</Text>
                                    <Text style={{
                                        color: 'black'
                                    }}>{address.fullName} | {address.phoneNumber}</Text>
                                    <Text style={{
                                        color: 'black'
                                    }}>{address.address}</Text>

                                </View>
                            </View>
                        </TouchableOpacity>


                    )
                })}
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 20,
                marginTop: 20,
            }}>
                <View style={{
                    height: 2,
                    width: '90%',
                    backgroundColor: 'black',
                }}></View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.COLOR_LIGHT,
                }}>
                    <Image
                        style={{
                            height: 30,
                            width: 30
                        }}
                        source={require('../../assets/images/add-button.png')} />
                    <Text style={{
                        color: 'black'
                    }}>   Add new address</Text>
                </View>
            </TouchableOpacity>


            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 20,
                left: 0,
                right: 0
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart', { userAddress })}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#d2b48c',
                        width: '70%',
                        padding: 15,
                        borderRadius: 30,
                        shadowOpacity: 80,
                        elevation: 15,
                        marginHorizontal: 10,
                        marginBottom: 10,
                    }}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddressScreen