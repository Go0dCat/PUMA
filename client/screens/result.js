import React, { useState, useEffect } from "react";
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { globalStyles } from '../styles/global';


export default function Result({ navigation }) {

  console.log('-------Start result---------');

  //console.log(navigation.getParam('pricelevel'));
  console.log('is empty ' + navigation.getParam('allCategories'));

  //console.log(JSON.stringify(navigation.state.params));
  //console.log(JSON.stringify(navigation.getParam('category')[0]));
  const [ansArr, setAnsArr] = useState(navigation.getParam('answerArr'));

  //This is values for product
  var [product, setProduct] = useState('Default');
  var [product, setProduct] = useState('Default');
  var [categoryResult, setCategoryResult] = useState('Default');
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
  //console.log(productState.ProductId + ' test');
  //console.log(productState.ProductNameBold + ' test 2');

  //var product = 'Default';
  var status = false;
  const [resultJSON, setResultJSON] = useState(null);


  useEffect(() => {
    console.log('useEffect()');
    //TODO set up to automatically get ip
    //let lanIP = '172.23.131.115';
    //let lanIP = '192.168.1.3'; //SJ home IP
    let lanIP = '192.168.0.32';
    console.log('ansArr in result:' + JSON.stringify(ansArr));



    async function asyncFunction() {
      //console.log('asyncFuntion()');
      try {
        //console.log('try');
        // IP-adress till datorn som kör servern
        //lokala LAN
        //console.log(product + ' 1');
        //console.log(navigation.getParam('category').length);
        let y = Math.floor(Math.random() * navigation.getParam('category').length);
        //console.log('this is y: ' + y)


        //TODO ful lösning...



        //console.log('http://'+lanIP+':8081/api/client/category/' + navigation.getParam('category')[y] + '/pricelevel/' + navigation.getParam('pricelevel'));
        //let response = await fetch('http://'+lanIP+':8081/api/client/category/' + navigation.getParam('category')[y]);
        let response = await fetch('http://'+lanIP+':8081/api/client/category/' + navigation.getParam('category')[y] + '/quantity/100/pricelevel/' + navigation.getParam('pricelevel'));

        let json = await response.json();

        let x = Math.floor(Math.random() * json.length);

        //console.log('this is what i get'+json[x].Category);
        setCategoryResult(json[x].Category);

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

        status = true;
      } catch (error) {
        console.log(error);
        return 'error';
      }
    };

    async function allCategoriesFunction() {
      //console.log('asyncFuntion()');
      try {
        //console.log('try');
        // IP-adress till datorn som kör servern
        //lokala LAN
        //console.log(product + ' 1');
        //console.log(navigation.getParam('category').length);
        //console.log('this is y: ' + y)


        //TODO ful lösning...




        //console.log('http://'+lanIP+':8081/api/client/category/' + navigation.getParam('category')[y] + '/pricelevel/' + navigation.getParam('pricelevel'));
        //let response = await fetch('http://'+lanIP+':8081/api/client/category/' + navigation.getParam('category')[y]);
        let response = await fetch('http://'+lanIP + ':8081/api/client/quantity/100/pricelevel/' + navigation.getParam('pricelevel'));

        let json = await response.json();

        let x = Math.floor(Math.random() * json.length);

        //console.log('this is what i get'+json[x].Category);
        setCategoryResult(json[x].Category);

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

        status = true;
      } catch (error) {
        console.log(error);
        return 'error';
      }
    };


    async function testFunction(category) {
      //console.log('asyncFuntion()');
      try {

        let response = await fetch('http://' + lanIP + ':8081/api/client/category/' + category + '/quantity/10');

        //let json = await response.json();

        let json = await response.json();

        setResultJSON(json);
        status = true;

      } catch (error) {
        console.log(error);
        return 'error';
      }
    };

    //console.log('hi');
    async function helpFunction() {
      //console.log('inside helpfunction');
      navigation.getParam('category').forEach((item) => {
        //console.log('item: '+ item);
        testFunction(item);
      });
      //console.log('after helpfunction');

    };
    //console.log('hi there');

    /*
    helpFunction().then(function() {
      console.log('inside then');

       if(resultJSON !== null) {


         console.log('resultat ' + JSON.stringify(resultJSON._W[0]));

         let x = Math.floor(Math.random() * resultJSON._W.length);
         console.log('x is: ' + x);
         //hibjdcadlnc


         setProductState(prevProductState => ({
           ...prevProductState,
           ProductId: resultJSON._W[x].ProductId,
           ProductNumber: resultJSON._W[x].ProductNumber,
           ProductNameBold: resultJSON._W[x].ProductNameBold,
           ProductNameThin: resultJSON._W[x].ProductNameThin,
           Category: resultJSON._W[x].Category,
           BottleTextShort: resultJSON._W[x].BottleTextShort,
           AlcoholPercentage: resultJSON._W[x].AlcoholPercentage,
           Volume: resultJSON._W[x].Volume,
           Price: resultJSON._W[x].Price,
           SubCategory: resultJSON._W[x].SubCategory,
           Type: resultJSON._W[x].Type,
         }));

       } else {
         console.log('hoppsan');
       }

     });
     */

     //componentDidMount(){}
     if (navigation.getParam('allCategories') === true) {
       console.log('sant');
       allCategoriesFunction();
     } else {
       console.log('falskt');
       asyncFunction();
     }

      //asyncFunction();


  }, []);


  const pressHandlerStart = () => {
    // Lägger skräm Quiz1 på stacken.
    navigation.navigate('Home');
  };

  const imageFunction = () => {
    //console.log('Category of result is: ' + categoryResult);

    switch (categoryResult) {
      case 'Mousserande viner':
        return require('../assets/generell-vin.png');
        break;
      case 'Röda viner':
        return require('../assets/generell-vin.png');
        break;
      case 'Vita viner':
        return require('../assets/generell-vin.png');
        break;
      case 'Roséviner':
        return require('../assets/generell-vin.png');
        break;
      default:
        return require('../assets/generell-öl-cider-blanddryck.png');
        break;
    }
    //return require('../assets/generell-öl-cider-blanddryck.png');
    //return require('../assets/generell-vin.png');
  }


  return (
    <View style={styles.outerContainer}>

      <View style={styles.innerContainer}>

        <View style={styles.imageContainer}>
          <Image style={styles.img} source={imageFunction()} />
        </View>

        <View style={styles.productPriceContainer}>
          <View style={styles.productContainer}>
            <Text style={styles.productBold}>{productState.ProductNameBold}</Text>
            <Text style={styles.productThin}>{productState.ProductNameThin}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{productState.Price}:-</Text>
            <Text style={styles.volume}>{productState.Volume} ml</Text>
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


const styles = StyleSheet.create({

  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 20,
  },
  imageContainer: {
    height: 250,
  },
  img: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  productPriceContainer: {
    paddingTop: 15,
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

/*function fetchProduct() {
    console.log('fetch');
    fetch('http://172.23.130.126:8081/api/client/category/Cider')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log('Response: ' + responseJson[0].ProductNameBold);
        //product.setValue({product: responseJson[0].ProductNameBold});
        //product = responseJson[0].ProductNameBold;
        //return responseJson[0].ProductNameBold;
      })
      .catch((error) => {
        console.log(error);
        //return 'hej';
      });
    console.log('utanför');
    //return 'test';
  }*/


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
