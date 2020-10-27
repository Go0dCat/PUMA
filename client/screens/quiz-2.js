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

  //let answers = navigation.getParam('answers')
  //console.log("I Quiz 2" + JSON.stringify(navigation.getParam('answerKey')))

  return (


    <View style={globalStyles.quizContainer}>

      <Text style={globalStyles.quizText}>Vilken karaktär är mest du?</Text>

      <FlatList
        numColumns={2}
        data={characters}
        renderItem={({ item }) => (
          // Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('Quiz3', item)}>
            <Image style={globalStyles.quizAnsImg} source={images.characters[item.title]} />
          </TouchableOpacity>
        )}
      />

      <View style={globalStyles.quizFooter}>
        <View style={globalStyles.navbarContainer}>
          <Image style={globalStyles.navbarImg} source={require('../assets/navbar_2.png')} />
        </View>
      </View>

    </View>

  );
}
