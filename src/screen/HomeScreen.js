import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#f5deb3',
        flex: 1,
        alignItems: 'center',

      }}>

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: 150,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: 'center',
          width: '100%'
          // paddingHorizontal: 16
        }}
      >
        <Image
          source={require('../../assets/images/HT_logo.png')}
          style={{
            position: 'absolute',
            top: -130,
            height: 200,
            width: 200,
            tintColor: 'black'
          }}
        ></Image>
        <View
          style={{
            // position: 'absolute',
            // top: 130
          }}
        >
          <Image
            source={require('../../assets/images/coffee.png')}
            style={{ height: 150, width: 250 }}
          ></Image>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 130,
            alignItems: 'center',
          }}
          
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingHorizontal: 40,
              paddingTop: 20,
              paddingBottom: 15,
              color: 'black'
            }}
          >Kẻ hủy diệt giấc ngủ</Text>
          {/* <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingHorizontal: 40,
              color: 'black'
            }}
          >Giúp bạn tỉnh táo mỗi ngày</Text> */}
        </View>
        <Image
            source={require('../../assets/images/coffee-cup.png')}
            style={{ 
              position: 'absolute',
              top: 230,
              height: 50, 
              width: 50,
              left: 70
            }}
          ></Image>
          <Image
            source={require('../../assets/images/coffee-cup2.png')}
            style={{ 
              position: 'absolute',
              top: 220,
              height: 58, 
              width: 58,
              left: 130
            }}
          ></Image>
          <Image
            source={require('../../assets/images/coffee-cup4.png')}
            style={{ 
              position: 'absolute',
              top: 227,
              height: 58, 
              width: 58,
              left: 190
            }}
          ></Image>
          <Image
            source={require('../../assets/images/coffee-cup3.png')}
            style={{ 
              position: 'absolute',
              top: 225,
              height: 58, 
              width: 58,
              left: 255
            }}
          ></Image>
        <View style={{
          position: 'absolute',
          top: 310,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '95%',
          padding: 15,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 5,
          marginTop: 20
        }}>
          <Image source={require('../../assets/images/address.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15,
              top: 13
            }} />
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black'
          }}>250 Nguyễn Chơn, Liên Chiễu, Đà Nẵng</Text>
          <Image source={require('../../assets/images/address.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15,
              top: 50
            }} />
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 15,
          }}>45 Quang Trung, Sơn Trà, Đà Nẵng</Text>
          <Image source={require('../../assets/images/phone.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 17,
              top: 83
            }} />
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 15
          }}>0768773248</Text>
          <Image source={require('../../assets/images/mail.png')}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              left: 20,
              top: 120
            }} />
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 15
          }}>htcoffee@gmail.com</Text>
          
        </View>
      </View>
    </View>
  )
}

export default HomeScreen