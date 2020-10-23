import React, { useState, useEffect } from "react";
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { globalStyles } from '../styles/global'

export default function Result({ navigation }) {

  const pressHandlerStart = () => {
    // Lägger skräm Quiz1 på stacken.
    navigation.popToTop();
  };

  console.log('-------Start------');


  //This is values for product
  var [product, setProduct] = useState('Default');
  var [product, setProduct] = useState('Default');
  const [productState, setProductState] = useState({
    ProductId: 'productid',
    ProductNumber: 'productnumber',
    ProductNameBold: 'productnamebold',
    ProductNameThin: 'productnamethin',
    Category: 'category',
    BottleTextShort: 'bottletextshort',
    AlcoholPercentage: 'alcoholpercentage',
    Volume: 'volume',
    Price: 'price',
    SubCategory: 'subcategotegory',
    Type: 'type',
   });
    console.log(productState.ProductId + ' test');
    console.log(productState.ProductNameBold + ' test 2');


  //var product = 'Default';
  var status = false;

  // TODO: Fixa så att 'json[0].ProductNameBold' syns i vyn

  useEffect(() => {
    console.log('useEffect()');
    //TODO set up to automatically get ip
    let lanIP = '172.23.133.137';

    async function asyncFunction() {
      //console.log('asyncFuntion()');
      try {
        //console.log('try');
        // IP-adress till datorn som kör servern
        //lokala LAN
        //console.log(product + ' 1');
        let response = await fetch('http://'+lanIP+':8081/api/client/category/Cider');

        let json = await response.json();
        //console.log('Value 1: ' + json[0].ProductNameBold);
        //return json[0].ProductNameBold;
        //console.log(product + ' 2');

        //TODO make algoritm for this
        let x = 1;

        //TODO replace with object
        setProduct(json[x].ProductNameBold);

        setProductState(prevProductState => ({
          ...prevProductState,
          ProductId: json[x].ProductId,
          ProductNumber: json[x].ProductNumber,
          ProductNameBold: json[x].ProductNameBold,
          ProductNameThin: json[x].ProductNameThin,
          Category: json[x].Category,
          BottleTextShort: json[x].BottleTextShort,
          AlcoholPercentage: json[x].AlcoholPercentage,
          Volume: json[x].Volume,
          Price: json[x].Price,
          SubCategory: json[x].SubCategory,
          Type: json[x].Type,
        }));
        //product = json[0].ProductNameBold;
        //console.log(product + ' 2');
        //console.log('Value 2: ' + json[0].ProductNameBold);
        //product = json[0].ProductNameBold;
        status = true;
      } catch (error) {
        console.log(error);
        //console.log(product + ' error');
        return 'error';
      }
      //console.log(product + ' out');
    };
    asyncFunction();
  }, [])

  function fetchProduct() {
    console.log('fetch');
    fetch('http://172.23.130.126:8081/api/client/category/Cider')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('Response: ' + responseJson[0].ProductNameBold);
        //product.setValue({product: responseJson[0].ProductNameBold});
        product = responseJson[0].ProductNameBold;
        //return responseJson[0].ProductNameBold;
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



  //if (status) {
  return (
    <View style={styles.outerContainer}>

      <View style={styles.innerContainer}>
        <View style={styles.productPriceContainer}>
          <View style={styles.productContainer}>
            <Text style={styles.productBold}>{productState.ProductNameBold}</Text>
            <Text style={styles.productThin}>{productState.ProductNameThin}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{productState.Price}</Text>
            <Text style={styles.volume}>{productState.Volume}</Text>
          </View>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.bold}>Kategori</Text>
          <Text>{productState.Category}</Text>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.bold}>Alkoholhalt</Text>
          <Text>{productState.AlcoholPercentage} %</Text>
        </View>
      </View>

      <Divider style={styles.divider}></Divider>

      <View style={styles.innerContainer}>
        <Text>I lager hos:</Text>
        <Text style={styles.bold}>Rådhusesplanaden</Text>
        <Text>Rådhusesplanaden 6E, Umeå</Text>
        <Text>Öppet idag 10.00 - 19.00</Text>
      </View>

      <Divider style={styles.divider}></Divider>

      <TouchableOpacity style={globalStyles.startButton} onPress={pressHandlerStart}>
        <Text style={globalStyles.buttonText}>Börja om</Text>
      </TouchableOpacity>

    </View>
  );
}
//}

const styles = StyleSheet.create({

  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 20,
  },
  productPriceContainer: {
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
  divider: {
    width: '100%',
    marginTop: 20,
    marginEnd: 20,
  }

})


/*
function testFunction() {

    //const [value, setValue] = useState(null);

    useEffect(() => {
      console.log('fetch');
        fetch('http://192.168.1.223:8081/api/client/category/Öl')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('Response: ' + responseJson[0].ProductId);
            //value = responseJson[0].ProductNameBold;
            console.log('Value 1: ' + value);
            value.setValue(responseJson[0].ProductNameBold);
            console.log('Value 2: ' + value);
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
    console.log('Value: ' + value);
    return value;
  }
  */
