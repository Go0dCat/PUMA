import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    // Lägger skräm Quiz1 på stacken.
    navigation.push("Quiz1");
  };

  return (
    <View style={globalStyles.container}>

      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("MyBev")}>
            <Text style={styles.headerText}>Mina drycker</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.img} source={require('../assets/Logga.png')} />

        <Text style={styles.bodyText}>
          Generera den ultimata drycken att köpa på ditt Systembolag.
        </Text>

        <TouchableOpacity style={styles.startButton} onPress={pressHandler}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Image style={styles.footerImg} source={require('../assets/icon.png')} />
          <Text style={styles.footerText}>Inget valt bolag</Text>
        </View>
        <TouchableOpacity style={styles.footerBtn} onPress={() => navigation.push("Search")}>
          <Text style={styles.footerBtnText}>Välj bolag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 100,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 40,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    padding: 20,
  },
  logga: {
    flex: 2,
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "yellow",
  },
  img: {
    alignSelf: "center",
  },
  bodyText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20,
  },
  startButton: {
    backgroundColor: "#36575C",
    borderRadius: 30,
    margin: 20,
    marginBottom: "10%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 15,
  },
  footer: {
    height: "10%",
    fontWeight: "bold",
    backgroundColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLeft: {
    flexDirection: "row",
  },
  footerImg: {
    width: 24,
    height: 24,
  },
  footerText: {
    fontSize: 16,
    color: "#000",
  },
  footerBtn: {
    backgroundColor: "#F2A478",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    height: 40,
    width: 100,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  footerBtnText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
