import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#f5deb3', flex: 1 }} >
      <TouchableOpacity
      onPress={() => navigation.navigate('EditProfile')}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 40
        }}>
        <Image source={require('../../assets/images/edit.png')}
          style={{
            height: 40,
            width: 40,
            tintColor: '#2f4f4f'
          }} />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: 150,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: 'center',
          paddingHorizontal: 16
        }}>
        <Image source={require('../../assets/images/avatar.png')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            marginTop: -70
          }} />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            padding: 10,
            color: 'black'
          }}
        >Hữu Thái</Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey'
          }}
        >21, Male</Text>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '95%',
          padding: 15,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Image source={require('../../assets/images/work.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15
            }} />
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey'
          }}>Developer</Text>
        </View>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '95%',
          padding: 15,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Image source={require('../../assets/images/address.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15
            }} />
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'grey'
          }}>250 Nguyễn Chơn, Liên Chiễu, Đà Nẵng</Text>
        </View>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '95%',
          padding: 15,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Image source={require('../../assets/images/phone.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15
            }} />
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey'
          }}>0768773248</Text>
        </View>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '95%',
          padding: 15,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Image source={require('../../assets/images/mail.png')}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 15
            }} />
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey'
          }}>phanhuuthai2807@gmail.com</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#d2b48c',
            width: '95%',
            padding: 15,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 15
          }}>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#fff'
          }}>Logout</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default AccountScreen