import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../Constant';
import { useNavigation } from '@react-navigation/native';

const OrderDetailSreen = ({ navigation, route }) => {

    const { listOrder } = route.params;

    const Navigation = useNavigation();

    return (
        <View>
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
                    }}>Order Details</Text>
                </TouchableOpacity>
            </View>
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
                    }}>{listOrder.username} | {listOrder.phoneNumber}</Text>
                    <Text style={{
                        color: 'black'
                    }}>{listOrder.location}</Text>

                </View>
            </View>
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
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={listOrder.orderDetails}
                renderItem={({ item }) =>
                    <View style={{
                        height: 100,
                        // shadowColor: "#000",
                        // shadowOffset: { width: 0, height: 4 },
                        // shadowOpacity: 0.1,
                        // shadowRadius: 7,
                        // elevation: 15,
                        borderRadius: 10,
                        backgroundColor: colors.COLOR_LIGHT,
                        marginVertical: 10,
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <Image source={{ uri: item.product.images[0].imageUrl }}
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
                            }}>{item.product.name}</Text>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                marginTop: 5,
                                color: 'black'
                            }}>{item.product.price}</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>Quantity: </Text>
                        </View>
                        <View style={{
                            marginRight: 20, alignItems: 'center'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: 'black',
                            }}>{item.quantity}</Text>

                        </View>
                    </View>
                }
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
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
                }}>{listOrder.totalPrice}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                paddingHorizontal: 20
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black'
                }}>Payment Method</Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black'
                }}>{listOrder.paymentMethod}</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                paddingHorizontal: 20
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black'
                }}>isPaid</Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black'
                }}>{listOrder.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                paddingHorizontal: 20
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black'
                }}>Status</Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black'
                }}>{listOrder.orderStatus}</Text>
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
                        editable={false}
                        style={{ paddingLeft: 10 }}
                        value={listOrder.note}
                        fontSize={15}
                        fontWeight={'bold'}
                    />
                </View>
            </View>
        </View>
    )
}

export default OrderDetailSreen