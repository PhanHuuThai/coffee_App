import { View, Text, SafeAreaView, TextInput, ScrollView, Image, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'
import { colors } from '../Constant';
import axios from 'axios';
import { BASE_URL } from '../../ipconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'

const CartScreen = ({ navigation, route }) => {

    const [paramValue, setParamValue] = useState({})
    const Navigation = useNavigation();

    const [totalPrice, setTotalPrice] = useState(0);

    const [listItem, setListItem] = useState([]);

    const [userAddress, setUserAddress] = useState({});

    const [listUserAddress, setListUserAddress] = useState([]);

    const [note, setNote] = useState('');

    const [selected, setSelected] = useState("CASH");

    const [listId, setListId] = useState([]);

    const [Orders, setOrders] = useState({});

    const data = [
        { key: '1', value: 'CASH' },
        { key: '2', value: 'BANKING' },
    ]

    useEffect(() => {
        const setParam = () => {
            if (route.params) {
                setParamValue(route.params.userAddress);
                console.log("route", route.params.userAddress);
            }
            else {
                console.log("no route");
            }
        }
        setParam();
    }, [route.params]);

    useEffect(() => {
        try {
            setListId([]);
            setTotalPrice(0);
            for (const element of listItem) {
                setTotalPrice(preTotalPrice => preTotalPrice + element.totalPrice);
                setListId(prevNumbers => [...prevNumbers, element.id]);
            }
        } catch (error) {
            console.log(error);
        }
    }, [listItem]);


    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('loginInfor');
            return token ? JSON.parse(token) : "";
        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        const getAddress = async () => {
            try {
                const token = await getToken();
                // console.log("t",token);
                const response = await axios.get(`${BASE_URL}/api/user/userLocations`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
                if (response.status >= 200 && response.status < 300) {
                    setListUserAddress(response.data);
                    // console.log(response.data)
                    console.log("get List address success");
                    setUserAddress(response.data[0]);
                    // console.log(userAddress);
                }

            } catch (error) {
                console.log(error)
            }
        }
        getAddress().catch((error) => { console.log(error) })
    }, []);

    useEffect(() => {
        const setNewAddress = () => {
            if (Object.keys(paramValue).length > 0) {
                setUserAddress(paramValue);
                console.log("set new address success");
            }
            else {
                console.log("xxx");
            }
        }
        setNewAddress()
    }, [paramValue])

    const checkVAlid = () => {
        Alert.alert("invalid product or address");

    }


    const addOrder = async () => {
        try {
            const value = {
                location: String(userAddress.address),
                phoneNumber: String(userAddress.phoneNumber),
                paymentMethod: selected,
                isPaid: false,
                note: note,
                cartItemIds: listId,
            };

            // console.log(userAddress.address);
            // console.log(userAddress.phoneNumber);
            // console.log(selected);

            // console.log(listId)
            console.log(value)

            const token = await getToken();

            const response = await axios.post(`${BASE_URL}/api/order/addOnlineOrder`,
                value
                ,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
            if (response.status >= 200 && response.status < 300) {
                console.log("add order success");
                setOrders(response.data);
                console.log(response.data);
            }



        } catch (error) {
            console.log(error);
        }
    }

    const initiatePayment = async (totalPrice) => {
        try {

            const value = {
                location: String(userAddress.address),
                phoneNumber: String(userAddress.phoneNumber),
                paymentMethod: selected,
                isPaid: true,
                note: note,
                cartItemIds: listId,
            };

            const response = await axios.get(`${BASE_URL}/api/payment/create_VNPay_payment`, {
                params: {
                    amount: totalPrice,
                }
            });

            if (response.status >= 200 && response.status < 300) {
                await AsyncStorage.setItem('valueInfo', JSON.stringify(value));
                const paymentUrl = response.data.url;
                Navigation.navigate("WebView", { url: paymentUrl });
            }


        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
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
                    }}>Cart</Text>
                </TouchableOpacity>

            </View>
            <View style={{
                paddingBottom: 150
            }}>
                <ScrollView>
                    {listUserAddress.length === 0 ? (
                        <TouchableOpacity onPress={() => Navigation.navigate('AddAddress')}>
                            <View style={{
                                height: 85,
                                backgroundColor: colors.COLOR_LIGHT,
                                marginBottom: 10,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image style={{
                                    height: 40,
                                    width: 40,
                                    marginLeft: 10
                                }} source={require('../../assets/images/address.png')} />
                                <View>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 17
                                    }}>Vui lòng thêm địa chỉ nhận hàng</Text>

                                </View>
                                <Image style={{
                                    width: 20,
                                    height: 20,
                                    position: 'absolute',
                                    right: 20
                                }} source={require('../../assets/images/right_button.png')} />
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => Navigation.navigate('Address')}>
                            <View style={{
                                height: 85,
                                backgroundColor: colors.COLOR_LIGHT,
                                marginBottom: 10,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image style={{
                                    height: 40,
                                    width: 40,
                                    marginLeft: 10
                                }} source={require('../../assets/images/address.png')} />
                                <View>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 17
                                    }}>Địa chỉ nhận hàng</Text>
                                    <Text style={{
                                        color: 'black'
                                    }}>{userAddress.fullName} | {userAddress.phoneNumber}</Text>
                                    <Text style={{
                                        color: 'black'
                                    }}>{userAddress.address}</Text>

                                </View>
                                <Image style={{
                                    width: 20,
                                    height: 20,
                                    position: 'absolute',
                                    right: 20
                                }} source={require('../../assets/images/right_button.png')} />
                            </View>
                        </TouchableOpacity>
                    )}


                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 20
                    }}>
                        <View style={{
                            height: 2,
                            width: '90%',
                            backgroundColor: 'black',
                        }}></View>
                    </View>


                    <Cart listItem={listItem} setListItem={setListItem} />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 0,
                        paddingHorizontal: 20
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'black'
                        }}>Total Price</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'black'
                        }}>{totalPrice}</Text>
                    </View>
                    <View style={{
                        marginTop: 15,
                        flexDirection: 'column',
                        marginBottom: 6,
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'black'
                        }}>Note</Text>
                        <View style={{
                            backgroundColor: 'white',
                            width: '95%',
                            marginLeft: 10,
                            borderColor: '#e8e8e8',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingHorizontal: 10,
                            marginVertical: 5,
                            paddingLeft: 10
                        }}>
                            <TextInput
                                placeholder='note'
                                editable={true}
                                style={{ paddingLeft: 10 }}
                                onChangeText={setNote}
                            />
                        </View>
                    </View>

                    <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            search={false}
                            save="value"
                        />
                    </View>
                </ScrollView>
            </View>


            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 10,
                left: 0,
                right: 0
            }}>
                <TouchableOpacity
                    onPress={async () => {
                        if (selected === "BANKING") {
                            initiatePayment(totalPrice);
                        } else {
                            if (userAddress.length === 0 || listId.length === 0) {
                                checkVAlid();
                            }
                            else {
                                await addOrder();
                                Navigation.navigate('Tabs', { screen: 'Bill', params: { orderId: Orders.id } });
                            }
                                
                        }

                    }}
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
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>CHECKOUT</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

export default CartScreen