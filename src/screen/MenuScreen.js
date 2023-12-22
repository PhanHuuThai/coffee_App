import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import MenuSearch from '../components/MenuSearch'
import Categories from '../components/Categories'
import Product from '../components/Product'
import { useNavigation } from '@react-navigation/native';


const MenuScreen = () => {

  const navigation = useNavigation();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [nameCategory, setNameCategories] = useState('Trà');

  const onSetSelectedCategoryIndex = index => {
    setSelectedCategoryIndex(index);
  };

  const onsetNameCategories = index => {
    setNameCategories(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10, marginHorizontal: 16 }}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 1,
            fontSize: 22,
            fontWeight: "bold"

          }}
        >Hi, Thai</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image source={require('../../assets/images/cart.png')}
          style={{ width: 40, height: 35 }}></Image>
        </TouchableOpacity>
        
      </View>
      <MenuSearch />
      <View>
        <Categories selectedCategoryIndex={selectedCategoryIndex} onSetSelectedCategoryIndex={onSetSelectedCategoryIndex} onsetNameCategories={onsetNameCategories} />
      </View>
      <View>
        <Product nameCategory={nameCategory}/>
      </View>

    </SafeAreaView>

  )
}

export default MenuScreen