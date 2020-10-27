import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { Divider } from 'react-native-elements';
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

        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('../assets/Logga.png')} />
        </View>        

        <Text style={styles.bodyText}>
          Generera den ultimata drycken att köpa på ditt Systembolag.
        </Text>

        <TouchableOpacity style={styles.startButton} onPress={pressHandler}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider}></Divider>

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.footerImgText}>
            <Image style={styles.footerImg} source={require('../assets/sitelogo.png')} />
            <Text style={styles.footerTextBold}>Rådhusesplanaden</Text>
          </View>
          
          <Text style={styles.footerTextThin}>Rådhusesplanaden 6 E, Umeå</Text>
          <Text style={styles.footerTextThin}>Öppet idag 10:00-19:00</Text>
        </View>
        <TouchableOpacity style={styles.footerBtn} onPress={() => navigation.push("Search")}>
          <Text style={styles.footerBtnText}>Byt bolag</Text>
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
  imgContainer: {
    paddingTop: 50,
    height: 350,
  },
  img: {
    flex: 1,
    alignSelf: "center",
    resizeMode: 'contain',
  },
  bodyText: { //ta bort
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    marginTop: 20,
  },
  startButton: { 
    backgroundColor: "#36575C",
    borderRadius: 30,
    marginHorizontal: 35,
    margin: 20,
    marginBottom: "20%",
  },
  buttonText: { 
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 15,
  },
  footer: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingBottom: 50,
  },
  footerLeft: {
    flexDirection: "column",
  },
  footerImgText: {
    flexDirection: 'row',
  },
  footerImg: {
    width: 24,
    height: 24,
  },
  footerTextBold: {
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000",
  },
  footerTextThin: {
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
    marginVertical: 10,
  },
  footerBtnText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    width: '100%',
    marginTop: 20,
    marginEnd: 20,
  },
});
