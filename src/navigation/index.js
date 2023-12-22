import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screen/SignInScreen';
import SignUpScreen from '../screen/SignUpScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import Tabs from './tabs';
import ProductDetailScreen from '../screen/ProductDetailScreen';
import CartScreen from '../screen/CartScreen';
import EditProfile from '../screen/EditProfile';
import AddressScreen from '../screen/AddressScreen';
import AddAddressScreen from '../screen/AddAddressScreen';
import OrderDetailSreen from '../screen/OrderDetailSreen';
import BillScreen from '../screen/BillScreen';
import WebViewScreen from '../screen/WebviewScreen';
import PaymentResult from '../screen/PaymentResult';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='Address' component={AddressScreen} />
        <Stack.Screen name='AddAddress' component={AddAddressScreen} />
        <Stack.Screen name='OrderDetails' component={OrderDetailSreen} />
        <Stack.Screen name='WebView' component={WebViewScreen} />
        <Stack.Screen name='PaymentResult' component={PaymentResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;