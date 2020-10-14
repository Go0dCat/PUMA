import React, { useState } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { globalStyles } from "../styles/global";

export default function Quiz2({ navigation }) {

  const [character, setCharacter] = useState([
    { title: 'Snälla Nalle Puh', key: '1' },
    { title: 'Know-it-all Hermione', key: '3' },
    { title: 'Festsugna Annie', key: '4' },
    { title: 'Hungriga Gustaf', key: '2' },
    { title: 'Äventyrliga Dora', key: '6' },
    { title: 'Flörtiga Barney', key: '5' },
  ])

  return (


    <View styles={globalStyles.container}>
      <Text>{navigation.getParam('quizAnswers.title')}</Text>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 2 - Vilken karaktär är mest du?</Text>
    </View>

  );
}
