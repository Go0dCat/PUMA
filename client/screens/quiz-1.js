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

  const [answers, setAnswers] = useState([
    { question: '1', answerKey: '', },
    { question: '2', answerKey: '', },
    { question: '3', answerKey: '', },
    { question: '4', answerKey: '', },
  ])

  /*let answers = [
    { question: '1', answerKey: '', },
    { question: '2', answerKey: '', },
    { question: '3', answerKey: '', },
    { question: '4', answerKey: '', },
  ]*/
  /*var answers = [
    { answerKey: '' },
    { answerKey: '' },
    { answerKey: '' },
    { answerKey: '' },
  ]*/

  /*const setAnswerArr = (item) => {
    answers[0].answerKey = item.key
    console.log("I funktion" + JSON.stringify(answers))
  }*/

  function setAnswerArr(item) {
    setAnswers({ answerKey: item.key })
    //answers[0].answerKey = item.key
    console.log("I funktion" + JSON.stringify(answers))
  }

  return (
    <View style={globalStyles.quizContainer}>
      <Text>Fråga 1 - Vad bjuder kvällen på?</Text>

      <FlatList
        style={globalStyles.quizAnswers}
        //horizontal={false}
        numColumns={2}
        data={situations}
        renderItem={({ item }) => (
          // Fixa så att objektet både sparas och arrayen skickas med i onPress

          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => { setAnswerArr(item), navigation.navigate('Quiz2', answers) }}>
            <Image source={images.situations[item.title]} />
          </TouchableOpacity>
        )}
      />

    </View>
  );
}