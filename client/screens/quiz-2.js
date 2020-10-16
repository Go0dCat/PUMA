import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { images, globalStyles } from "../styles/global";

export default function Quiz2({ navigation }) {

  const [characters, setCharacter] = useState([
    { title: 'snalla-puh', key: '1' },
    { title: 'know-it-all-hermione', key: '3' },
    { title: 'festsugna-annie', key: '4' },
    { title: 'hungriga-gustaf', key: '2' },
    { title: 'aventyrliga-dora', key: '6' },
    { title: 'flortiga-barney', key: '5' },
  ])

  return (


    <View style={globalStyles.quizContainer}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 2 - Vilken karaktär är mest du?</Text>

      <FlatList
        style={globalStyles.quizAnswers}
        //horizontal={false}
        numColumns={2}
        data={characters}
        renderItem={({ item }) => (
          // Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('Quiz3', item)}>
            <Image source={images.characters[item.title]} />
          </TouchableOpacity>
        )}
      />


    </View>

  );
}
