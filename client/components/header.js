import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mina drycker</Text>
    </View>
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
