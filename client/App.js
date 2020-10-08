import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("sara");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Mina drycker</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.body}>
        <Text style={styles.logga}>Dryckesakuten</Text>
        <Text style={styles.bodyText}>
          Generera den ultimata drycken att köpa på ditt Systembolag.
        </Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <Text style={styles.fotter}>Inget valt bolag</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    backgroundColor: "pink",
  },
  body: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logga: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "yellow",
  },
  bodyText: {
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "blue",
    paddingLeft: 50,
    paddingRight: 50,
  },
  startButton: {
    backgroundColor: "#36575C",
    margin: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 15,
  },
  fotter: {
    fontWeight: "bold",
    backgroundColor: "green",
  },
});
