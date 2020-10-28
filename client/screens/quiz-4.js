import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { images, globalStyles } from "../styles/global";

export default function Quiz4({ navigation }) {
  const [prices, setPrice] = useState([
    { title: 'billigt', name: 'low', key: '1' },
    { title: 'mellan', name: 'medium', key: '2' },
    { title: 'dyrt', name: 'high', key: '3' },
  ])

  const [ansArr, setAnsArr] = useState(navigation.getParam('answerArr'));

  const getAnswers = () => {
    console.log('this is on quiz 4');
    console.log('ansArr :' + JSON.stringify(ansArr));

    return ansArr;
  }

  return (
    <View style={globalStyles.quizContainer}>
      {/*<Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>*/}
      <Text style={globalStyles.quizText}>Hur mår ditt bankkonto just nu?</Text>

      <FlatList
        style={globalStyles.quizAnswers}
        data={prices}
        renderItem={({ item }) => (
          //Fixa så att objektet både sparas och arrayen skickas med i onPress
          <TouchableOpacity style={globalStyles.quizAnswer} onPress={() => navigation.navigate('Categories', {pricelevel: item.name, answerArr: getAnswers()})}>
            <Image style={styles.img} source={images.prices[item.title]} />
          </TouchableOpacity>
        )}
      />

      <View style={globalStyles.quizFooter}>
        <View style={globalStyles.navbarContainer}>
          <Image style={globalStyles.navbarImg} source={require('../assets/navbar_4.png')} />
        </View>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  img: {
    width: 310,
    height: 155,
    alignSelf: 'center',
  },
});
