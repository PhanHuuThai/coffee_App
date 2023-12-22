import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../ipconfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors } from '../Constant'
const Cart = ({ listItem, setListItem }) => {

    const [cartList, setCarrList] = useState([]);

    // const [token, setToken] = useState('');
    const [quantity, setQuantity] = useState(-1);

    


    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('loginInfor');
            return token ? JSON.parse(token) : "";
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        const getCart = async () => {
            try {
                const token = await getToken();
                const response = await axios.get(`${BASE_URL}/api/cart`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
                if (response.status >= 200 && response.status < 300) {
                    setCarrList(response.data);
                    console.log("getCart Success");
                    
                    if (typeof setListItem === 'function') {
                        setListItem(response.data);
                    } else {
                        console.error('onSetTotalPrice is not a function or not provided.');
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        getCart().catch((err) => { console.log(err) })
    }, [quantity]);

    const updateCart = async (cartItemId, newQuantity) => {
        try {
            const token = await getToken();

            const response = await axios.put(`${BASE_URL}/api/cart/update`, {
                cartItemId,
                newQuantity
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
            if (response.status >= 200 && response.status < 300) {
                console.log("update success");
                setQuantity(pre => pre+1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={cartList}
                renderItem={({ item }) =>
                    <View style={{
                        height: 100,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 7,
                        elevation: 15,
                        borderRadius: 10,
                        backgroundColor: colors.COLOR_LIGHT,
                        marginVertical: 10,
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <Image source={{ uri: item.itemImages[0] }}
                            style={{
                                height: 75,
                                width: 75
                            }}
                        />
                        <View
                            style={{
                                height: 100,
                                marginLeft: 10,
                                paddingVertical: 20,
                                flex: 1,
                            }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{item.nameItem}</Text>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                marginTop: 5,
                                color: 'black'
                            }}>{item.unitPrice}</Text>
                        </View>
                        <View style={{
                            marginRight: 20, alignItems: 'center'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: 'black',
                            }}>{item.quantity}</Text>
                            <View style={{
                                width: 80,
                                height: 30,
                                backgroundColor: '#d2b48c',
                                borderRadius: 30,
                                paddingHorizontal: 5,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center'
                            }}>
                                <TouchableOpacity onPress={() => updateCart(item.id, item.quantity - 1)}>
                                    <Image
                                        source={require('../../assets/images/remove.png')}
                                        style={{
                                            height: 30,
                                            width: 30
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => updateCart(item.id, item.quantity + 1)}>
                                    <Image
                                        source={require('../../assets/images/add.png')}
                                        style={{
                                            height: 30,
                                            width: 30
                                        }}
                                    />
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                }
            />

        </View>

    )
}

export default Cart