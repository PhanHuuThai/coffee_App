import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Order from '../components/Order'
import { useRoute } from '@react-navigation/native';

const BillScreen = () => {

  const [orderId, setOrderId] = useState({})
  
  const route = useRoute();

  
  useEffect(() => {
        const setParam = () => {
            if (route.params) {
                setOrderId(route.params);
                console.log("route", route.params);
            }
            else {
                console.log("no route");
            }
        }
        setParam();
    }, [route.params]);
  
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10, marginHorizontal: 16 }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black'
        }}>My Orders</Text>
        <Order id={orderId} />
      </View>
    </SafeAreaView>
  )
}

export default BillScreen