import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../Constant'
import axios from 'axios';
import { BASE_URL } from '../../ipconfig';

const Categories = ({ selectedCategoryIndex, onSetSelectedCategoryIndex, onsetNameCategories }) => {
  // const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  
  const [error, setError] = useState(null);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const responseCategory = await axios.get(`${BASE_URL}/api/category`);
        setCategories(responseCategory.data);

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
    getCategories().catch(error => console.error(error));
  }, []);
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
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            return (
              <TouchableOpacity
                key={category.id}
                activeOpacity={0.8}
                onPress={() => {
                  onSetSelectedCategoryIndex(index);
                  onsetNameCategories(category.name);
                }}
              >
                <View style={{
                  backgroundColor: selectedCategoryIndex === index ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                  height: 44,
                  width: 95,
                  alignItems: 'center',
                  marginRight: 36,
                  borderRadius: 20,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 7,
                  elevation: 5,
                  marginTop: 10
                }}>
                  <Text key={index}
                    style={{
                      color: selectedCategoryIndex === index ? colors.COLOR_LIGHT : colors.COLOR_DARK,
                      fontSize: 14,
                      fontWeight: 'bold'
                    }}
                  >{category.name}</Text>
                </View>
              </TouchableOpacity>

            )
          })}
        </ScrollView>
      </View>
    )
  }

}

export default Categories