import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
//import CheckBox from '@react-native-community/checkbox';
//import { CheckBox } from 'react-native-elements';
import { globalStyles } from "../styles/global";
//import MultipleChoice from 'react-native-multiple-choice'


export default function Categories({ navigation }) {
  const [categories, setCategories] = useState([
    { title: 'öl', key: '1' },
    { title: 'cider', key: '2' },
    { title: 'blanddryck', key: '3' },
    { title: 'rött-vin', key: '4' },
    { title: 'vitt-vin', key: '5' },
    { title: 'rosévin', key: '6' },
    { title: 'mousserande', key: '7' },

  ])

  const componentDidMount=()=>{
    let arr = this.state.categories.map((item, index)=>{
      item.isSelected = false;
      return{...item};
    })
    this.setState() //?
    console.log('arr data ==> ', arr); //?
  }
  const selectionHandler=(ind)=>{
    const {categories} = this.state;
    let arr = categories.map((item, index)=>{
      if(ind === index){
        item.isSelected = true;
      }
      return{...item}
    }) 
    this.setState({categories : arr});
  }

  return (
    <View style={globalStyles.quizContainer}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 5 - Vad föredrar du?</Text>

      <FlatList
        style={globalStyles.categorieContainer}
        data = {categories}
        renderItem={({ item }) => (

       <TouchableOpacity style={globalStyles.categorieOptions} onPress={() => this.selectionHandler(index)}>
          <Text>
            {item.title}
            {item.isSelected ? ' selected' : ' not selected'} {/* ? */}
          </Text>
        </TouchableOpacity>
        )} 
      />
      
      <TouchableOpacity onPress={() => navigation.navigate('Result')}>
        <Text>Till resultat</Text>
      </TouchableOpacity>
     
    </View>
  );
    

  {/*
        
      <MultipleChoice>
        options = ([
          'Öl',
          'Cider',
          'Blanddryck',
          'Rött vin',
          'Vitt vin',
          'Rosévin',
          'Mousserande'
        ])
        maxSelectedOptions = {4}
        onSelection = {(option) => alert(option + ' selected!')};
      </MultipleChoice>
  */}
}
