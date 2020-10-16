import React, { useState } from "react";
import { Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Categories() {
  return (
    <View style={globalStyles.quizContainer}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 5 - Vad föredrar du?</Text>
    </View>
  )
    
}
