import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, recipeList } from '../Constant'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { BASE_URL } from '../../ipconfig';


const Product = ({ nameCategory }) => {
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [products, setProduct] = useState([]);
  // const [choosedCategory, setChoosedCategory] = useState("ALL");

  useEffect(() => {
    const getData = async () => {
      try {
        let endpoint = ''
        // if (choosedCategory == 'ALL') {
        //   endpoint = `http://192.168.1.10:8080/api/product`
        //   // setIsCombo(false)
        // }
        // else if (choosedCategory == 'COMBO') {
        //   endpoint = `http://192.168.1.10:8080/api/combo/`
        //   // setIsCombo(true)
        // }
        // else {
          endpoint = `${BASE_URL}/api/product/?categoryName=${nameCategory}`
          // setIsCombo(false)
        // }
        const response = await axios.get(endpoint);
        if (response.status >= 200 && response.status < 300) {
          // let data = response.data
          // if (data[0].hasOwnProperty('detailsProducts')) {
          //   data = data.map(combo => ({
          //     ...combo,
          //     images: combo.detailsProducts.map(detail => (
          //       detail.product.images[0]
          //     ))
          //   }))
          // }
          setProduct(response.data);
          setError('');
        } else {
          setError(response.status);
        }
      } catch (error) {
        if (error.response) {
          // Server trả về lỗi status code khác 2xx
          console.error('Lỗi từ server:', error.response.data);
        } else if (error.request) {
          // Không nhận được phản hồi từ server
          console.error('Không nhận được phản hồi từ server:', error.request);
        } else {
          // Có lỗi xảy ra khi thiết lập yêu cầu
          console.error('Lỗi khi thiết lập yêu cầu:', error.message);
        }
      }
    };
    getData().catch(error => console.error(error));
  }, [nameCategory]);


  if (error) {
    // Rendering when there is an error
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  else {
    return (
      <View style={{ marginVertical: 5, paddingBottom: 250 }}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ProductDetail', { item })}>
              <View key={item.id} style={{
                backgroundColor: colors.COLOR_LIGHT,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                elevation: 5,
                marginVertical: 15,
                borderRadius: 15,
                alignItems: 'center',
                paddingHorizontal: 8,
                paddingVertical: 20,
  
              }}>
  
                <Image source={{ uri: item.images[0].imageUrl }}
                  style={{ width: 150, height: 150, resizeMode: "center" }} />
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <View
                  style={{
                    marginHorizontal: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>
  
                  <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                  }}>{item.price}</Text>
  
                  <TouchableOpacity style={{
                    position: 'absolute',
                    left: 72
                  }}
                  >
                    <View style={{
                      height: 23,
                      width: 23,
                      borderRadius: 20,
                      backgroundColor: '#bc8f8f',
                      justifyContent: "center",
                      alignItems: "center",
  
                    }}>
                      <Image source={require('../../assets/images/add.png')}
                        style={{ width: 21, height: 21 }}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
  
              </View>
            </TouchableOpacity>
  
  
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }

  
}

export default Product