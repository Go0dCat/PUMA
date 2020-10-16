import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Result({ navigation }) {

  const pressHandler = () => {
    // Kolla om det finns en "pop all" för att navigera till Home.
    navigation.goBack();
  };

  return (
    <View>
      <Text>Din genererade dryck</Text>
      <TouchableOpacity onPress={pressHandler}>
        Tillbaka till start.
      </TouchableOpacity>
    </View>
  );
}
