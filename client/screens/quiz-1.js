import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { globalStyles, images } from "../styles/global";

export default function Quiz1({ navigation }) {
  const [situations, setSituation] = useState([
    { title: 'me-time', key: '1' },
    { title: 'dinner-friends', key: '2' },
    { title: 'boardgame', key: '3' },
    { title: 'party', key: '4' },
    { title: 'dinner-romantic', key: '5' },
    { title: 'BBQ', key: '6' },
  ])

  // let quizAnswers = [];
  // const situation = navigation.getParam('title');

  return (
    <View style={globalStyles.quizContainer}>
      <Text style={globalStyles.quizText}>Vad bjuder kvällen på?</Text> 

      <FlatList
        style={globalStyles.quizAnswers}
        //horizontal={false}
        numColumns={2}
        data={situations}
        renderItem={({ item }) => (
          // Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('Quiz2', item)}>
            <Image source={images.situations[item.title]} />
          </TouchableOpacity>
        )}
      />
      <View style = {globalStyles.quizFooter}>
        <Image source={require('../assets/navbar_1.png')}/>
      </View>

    </View>
  );
}
