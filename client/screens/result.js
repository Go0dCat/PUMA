import React, { useState, useEffect } from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

export default function Result({ navigation }) {

  // TODO: Fixa så att 'responseJson[0].ProductNameBold' syns i vyn

  function testFunction() {

    const [value, setValue] = useState(null);

    useEffect(() => {
      console.log('fetch');
        fetch('http://172.23.130.126:8081/api/client/category/Öl')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('Response: ' + responseJson[0].ProductId);
            setValue({value: responseJson[0].ProductNameBold});
          })
          .catch((error) => {
            console.log(error);
            //return 'hej';
          });
        console.log('utanför');
        //return 'test';
    });

    if (value === null) {
      return 'Loading...';
    }
    return value;
  }

  function fetchProduct() {
    console.log('fetch');
        fetch('http://172.23.130.126:8081/api/client/category/Cider')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('Response: ' + responseJson[0].ProductNameBold);
            return responseJson[0].ProductNameBold;
          })
          .catch((error) => {
            console.log(error);
            //return 'hej';
          });
        console.log('utanför');
        //return 'test';
  }
  
  const pressHandler = () => {
    // Kolla om det finns en "pop all" för att navigera till Home.
    navigation.goBack();
  };

  return (
    <View style={styles.viewContainer}>

      <View style={styles.firstContainer}>
        <View style={styles.productContainer}>
          <Text style={styles.productBold}>Produkt: {fetchProduct()}</Text>
          <Text style={styles.productThin}>Peach Passion</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>24:18</Text>
          <Text style={styles.volume}>330 ml</Text>
        </View>
      </View>

      <View style={styles.attributeContainer}>
        <Text style={styles.bold}>Kategori</Text>
        <Text>Cider</Text>
      </View>

      <View style={styles.attributeContainer}>
        <Text style={styles.bold}>Alkoholhalt</Text>
        <Text>4,5 %</Text>
      </View>
         
    </View>
  );
}

const styles = StyleSheet.create ({

  viewContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  firstContainer: {
    flexDirection: 'row',
  },
  productContainer: {
    width: '70%',
  },
  priceContainer: {
    width: '30%',
  },
  attributeContainer: {
    marginTop: 15,
  },

  productBold: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  productThin: {
    fontSize: 17,
  },
  price: {
    textAlign: 'right',
    fontSize: 19,
    fontWeight: 'bold',
  },
  volume: {
    textAlign: 'right',
    fontSize: 13,
  },
  bold: {
    fontWeight: 'bold',
  },
  
})
