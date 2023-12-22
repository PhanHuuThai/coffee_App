import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../../ipconfig';

const PaymentResult = ({ route }) => {
  const status = route.params?.status;

  const [Orders, setOrders] = useState({});

  const navigation = useNavigation();
  
  const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('loginInfor');
        return token ? JSON.parse(token) : "";
    } catch (error) {
        console.log(error)
    }

};

const getValue = async () => {
  try {
      const value = await AsyncStorage.getItem('valueInfo');
      return value ? JSON.parse(value) : "";
  } catch (error) {
      console.log(error)
  }
};



const addOrder = async () => {
  try {
          
          const token = await getToken();
          const value = await getValue();
          console.log(value);
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

  const handleButtonPress = async () => {
    if(status === 'success'){
      await addOrder();
      navigation.navigate('Tabs', { screen: 'Bill', params: { orderId: Orders.id } });
    }
    else {
      navigation.navigate('Cart');
    }
    
  };

  return (
    <View style={styles.container}>
      {status === 'success' ? (
        <Image
          source={require('../../assets/images/success.png')}
          style={styles.resultImage}
        />

      ) : (
        <Image
          source={require('../../assets/images/failed.png')}
          style={styles.resultImage}
        />
      )}
      <Text style={styles.resultText}>
        {status === 'success' ? 'Payment Successful' : 'Payment Failed'}
      </Text>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PaymentResult