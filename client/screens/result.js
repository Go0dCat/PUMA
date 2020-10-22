import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Result({ navigation }) {

/*export default class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }*/

  /*render() {
    if (this.state.isLoading) {
      return (
        <View>ActivityIndicator</View>
      )
    } else {
      return (
        <View>Yay</View>
      )
    }
  }*/

  // TODO: Fixa så att 'responseJson[0].ProductId' syns i vyn
  function fetchProduct() {
    console.log('fetch');
    fetch('http://192.168.1.223:8081/api/client/category/Öl')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('Response: ' + responseJson[0].ProductId);
        return responseJson[0].ProductId;
      })
      .catch((error) => {
        console.log(error);
        return 'hej';
      });
      console.log('utanför');
      return 'test';
  }

  const pressHandler = () => {
    // Kolla om det finns en "pop all" för att navigera till Home.
    navigation.goBack();
  };

  return (
    <View>
      <Text>Din genererade dryck</Text>
      <Text>Produkt: {fetchProduct()}</Text>
      <Text></Text>
      <TouchableOpacity onPress={pressHandler}>
        <Text>Tillbaka till start.</Text>
      </TouchableOpacity>
    </View>
  );
}
