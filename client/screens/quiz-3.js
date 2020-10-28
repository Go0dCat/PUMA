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
  ]);

  const getItemArray = ()  => {
    let isEmpty = false;

    return isEmpty;
  }

  const [ansArr, setAnsArr] = useState(navigation.getParam('answerArr'));

  const getAnswers = item => {
    console.log('this is on quiz 3 :' + item.key);
    ansArr.push({value: item.key, key: 3});
    console.log('ansArr :' + JSON.stringify(ansArr));

    return ansArr;
  }


  return (
    <View style={globalStyles.quizContainer}>

      <Text style={globalStyles.quizText}>Vem är du på festen?</Text>

      <FlatList
        numColumns={2}
        data={partyPersons}
        renderItem={({ item }) => (
          // Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('Quiz4', {answerArr: getAnswers(item)})}>
            <Image style={globalStyles.quizAnsImg} source={images.partyPersons[item.title]} />
          </TouchableOpacity>
        )}
      />

      <View style={globalStyles.quizFooter}>
        <View style={globalStyles.navbarContainer}>
          <Image style={globalStyles.navbarImg} source={require('../assets/navbar_3.png')} />
        </View>
      </View>

    </View>
  );


}
