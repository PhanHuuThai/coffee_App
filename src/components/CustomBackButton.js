import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

import tw from 'twrnc'

const CustomBackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        left: 1
      }}
      onPress={onPress}
    >
      <Image
        source={require('../../assets/images/back.png')}
        style={{ width: 30, height: 30 }}
      />

    </TouchableOpacity>
  )
}

export default CustomBackButton