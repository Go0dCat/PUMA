import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { images, globalStyles } from "../styles/global";

export default function Quiz4({ navigation }) {
  const [prices, setPrice] = useState([
    { title: 'billigt', key: '1' },
    { title: 'mellan', key: '2' }, 
    { title: 'dyrt', key: '3' },
  ])

  return (
    <View style={globalStyles.quizContainer}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 4 - Vad är viktigast för dig?</Text>

      <FlatList
        style={globalStyles.quizAnswers}
        data={prices}
        renderItem={({ item }) => (
          // Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('categories', item)}>
            <Image source={images.prices[item.title]} />
          </TouchableOpacity>
        )}
      />

    </View>
  )
    
}
