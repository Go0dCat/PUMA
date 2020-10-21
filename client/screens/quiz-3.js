import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { images, globalStyles } from "../styles/global";

export default function Quiz3({ navigation }) {
  const [partyPersons, setPartyPerson] = useState([
    { title: 'beratta-livshistoria', key: '2' },
    { title: 'finsmakaren', key: '6' }, //bilden ska bytas ut
    { title: 'dryckesspelfantasten', key: '3' },
    { title: 'gar-inte-dit', key: '1' },
    { title: 'startar-dansgolvet', key: '4' },
    { title: 'trubaduren', key: '5' },
  ])
  
  return (
    <View style={globalStyles.quizContainer}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 3 - Vem är du på festen?</Text>

      <FlatList
        style={globalStyles.quizAnswers}
        //horizontal={false}
        numColumns={2}
        data={partyPersons}
        renderItem={({ item }) => (
          // Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('Quiz4', item)}>
            <Image source={images.partyPersons[item.title]} />
          </TouchableOpacity>
        )}
      />

    </View>
  );
  
  
}
