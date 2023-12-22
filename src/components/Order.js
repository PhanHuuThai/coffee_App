import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, orderList } from '../Constant'
import axios from 'axios';
import { BASE_URL } from '../../ipconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Order = ({id}) => {

  

  const navigation = useNavigation();

  const [listOrder, setListOrder] = useState([]);

  const [refreshKey, setRefreshKey] = useState(0);
  
  console.log(id);

 
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('loginInfor');
      return token ? JSON.parse(token) : "";
    } catch (error) {
      console.log(error)
    }

  };


  useEffect(() => {
    const getListOrder = async () => {
      try {
        const token = await getToken();
        const response = await axios.get(`${BASE_URL}/api/order/onlineOrderOfUser`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          });
        if (response.status >= 200 && response.status < 300) {
          setListOrder(response.data.reverse());
          console.log("get List Order success");
        }


      } catch (error) {
        console.log(error)
      }
    }
    getListOrder().catch(err => {
      console.log(err);
    })
  }, [id])


  return (
    <View style={{
      width: '95%',
      marginTop: 20,
      marginBottom: 150
    }}>
      <FlatList
        data={listOrder}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderDetails', { listOrder: item })}
            activeOpacity={0.8}
          >
            <View key={item.id}
              style={{
                backgroundColor: colors.COLOR_LIGHT,
                height: 60,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                elevation: 5,
                marginVertical: 13,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Image
                source={require('../../assets/images/bill-icon.png')}
                style={{
                  width: 45,
                  height: 45,
                  marginLeft: 10
                }}
              />
              <View style={{
                marginLeft: 10
              }}>
                <Text style={{
                  fontSize: 13,
                  color: 'black',
                  fontWeight: 'bold'
                }}>IDHD: {item.id}</Text>
                <Text>{item.orderTime[2]}-{item.orderTime[1]}-{item.orderTime[0]}</Text>
              </View>
              <View
                style={{
                  marginLeft: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100
                }}
              >
                <Text
                  style={{
                    color: 'black',

                  }}
                >{item.orderStatus}</Text>

              </View>
              <View>
                <Text
                  style={{
                    paddingLeft: 20,
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                >{item.totalPrice}đ</Text>
              </View>

            </View>

          </TouchableOpacity>

        )}
      />
    </View>
  )
}

export default Order