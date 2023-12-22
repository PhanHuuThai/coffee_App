import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const EditProfile = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,

        }}>
            <View style={{
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,

            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        left: 10,
                        top: 5
                    }}
                >
                    <Image source={require('../../assets/images/back.png')}
                        style={{
                            width: 35,
                            height: 35,

                        }} />
                </TouchableOpacity>

                <Text style={{
                    marginTop: 8,
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: 'black'
                }}>Edit Profile</Text>

            </View>
            <View style={{
                alignItems: 'center',
                marginVertical: 15
            }}>
                <Image source={require('../../assets/images/avatar.jpg')}
                    style={{
                        height: 170,
                        width: 170,
                        borderRadius: 85,
                        borderWidth: 2,
                        borderColor: 'black'
                    }} />
            </View>
            <View>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'column',
                    marginBottom: 6,
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>Name</Text>
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
                            placeholder='name'
                            editable={true}
                            style={{ paddingLeft: 10 }}
                        />
                    </View>

                </View>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'column',
                    marginBottom: 6,
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>Phone Number</Text>
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
                            placeholder='phone number'
                            editable={true}
                            style={{ paddingLeft: 10 }}
                        />
                    </View>

                </View>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'column',
                    marginBottom: 6,
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>Email</Text>
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
                            placeholder='email'
                            editable={true}
                            style={{ paddingLeft: 10 }}
                        />
                    </View>

                </View>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'column',
                    marginBottom: 6,
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>Address</Text>
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
                            placeholder='address'
                            editable={true}
                            style={{ paddingLeft: 10 }}
                        />
                    </View>

                </View>
            </View>

            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <TouchableOpacity
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
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditProfile