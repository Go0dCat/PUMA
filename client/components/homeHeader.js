import React, { useState } from "react";
import { TouchableOpacity, Button, StyleSheet, Text, View } from "react-native";


export default function HomeHeader({ navigation }) {



  return (
    <View>

    </View>
    /*<View style={styles.header}>
      <TouchableOpacity onPress={() => { navigation.push("my-bev") }}>
        <Text style={styles.headerText}>Mina drycker</Text>
      </TouchableOpacity>
    </View>*/
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",

  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000"
  },
});
