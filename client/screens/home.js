import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";

/*const pressHandler = (id) => {
    console.log(id);
  }*/

export default function Home({ navigation }) {
  const pressHandler = () => {
    // Lägger skräm Quiz1 på stacken.
    navigation.push("Quiz1");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mina drycker</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.logga}>Dryckesakuten</Text>
        <Text style={styles.bodyText}>
          Generera den ultimata drycken att köpa på ditt Systembolag.
        </Text>
        <TouchableOpacity style={styles.startButton} onPress={pressHandler}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Inget valt bolag</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "pink",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    padding: 20,
    backgroundColor: "coral",
  },
  logga: {
    flex: 2,
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "yellow",
  },
  bodyText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "blue",
    paddingLeft: 50,
    paddingRight: 50,
  },
  startButton: {
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 15,
    backgroundColor: "#36575C",
  },
  footer: {
    flex: 1,
    fontWeight: "bold",
    backgroundColor: "green",
  },
});
