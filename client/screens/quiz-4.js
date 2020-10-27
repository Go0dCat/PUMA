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
      {/*<Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>*/}
      <Text style={globalStyles.quizText}>Vad är viktigast för dig?</Text>

      <FlatList
        style={globalStyles.quizAnswers}
        data={prices}
        renderItem={({ item }) => (
          //Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('Categories', item)}>
            <Image source={images.prices[item.title]} />
          </TouchableOpacity>
        )}
      />

      <View style = {globalStyles.quizFooter}>
        <Image source={require('../assets/navbar_4.png')}/>
      </View>

    </View>
  );
    
}
