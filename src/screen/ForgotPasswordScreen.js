import React, { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions, } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomBackButton from '../components/CustomBackButton';
import { useNavigation } from '@react-navigation/native'

import tw from 'twrnc'

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn("send");
  }

  const onBackPressed = () => {
    navigation.navigate('SignIn');
  }


  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <View style={{
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CustomBackButton onPress={onBackPressed} />
        <Text style={styles.title}>Reset your password</Text>
      </View>


      <CustomInput placeholder='Username' value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomButton text="Send" onPress={onSendPressed} />

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  }
});

export default ForgotPasswordScreen;
