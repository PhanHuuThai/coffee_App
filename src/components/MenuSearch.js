import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const MenuSearch = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        flexDirection: "row",
        // paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        elevation: 5,
      }}
    >
      <Image source={require('../../assets/images/search.png')}
        style={{ width: 20, height: 20 }} />
      <TextInput
        placeholder='enter your food'
        style={{
          paddingLeft: 8,
          fontSize: 16,
        }}
      ></TextInput>
    </View>
  )
}

export default MenuSearch