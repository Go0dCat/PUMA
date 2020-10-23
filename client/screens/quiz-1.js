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

<<<<<<< HEAD
  // let quizAnswers = [];
  // const situation = navigation.getParam('title');
=======
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
>>>>>>> f275a77c43ba92000a5e50cdd7ced6e2b66fef5f

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

          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => { setAnswerArr(item), navigation.navigate('Quiz2', answers) }}>
            <Image source={images.situations[item.title]} />
          </TouchableOpacity>
        )}
      />
<<<<<<< HEAD
      <View style = {globalStyles.quizFooter}>
        <Image source={require('../assets/navbar_1.png')}/>
      </View>
=======
>>>>>>> f275a77c43ba92000a5e50cdd7ced6e2b66fef5f

    </View>
  );
}