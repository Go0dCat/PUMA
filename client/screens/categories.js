import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
//import MultipleChoice from 'react-native-multiple-choice'


export default function Categories({ navigation }) {
  const [categories, setCategories] = useState([ // the current state and a function that updates it.
    { title: 'Öl', key: '1' },
    { title: 'Cider', key: '2' },
    { title: 'Blanddryck', key: '3' },
    { title: 'Rött-vin', key: '4' },
    { title: 'Vitt-vin', key: '5' },
    { title: 'Rosévin', key: '6' },
    { title: 'Mousserande vin', key: '7' },

  ])

  //useEffect(() => {});

  const componentDidMount=()=>{ //kan ev byta ut mot useEffect() (By default, this will run after the first render and after every update)
    let arr = this.state.categories.map((item, index)=>{
      item.isSelected = false;
      return{...item};
    })
    this.setState() //?
    console.log('arr data ==> ', arr); //?
  }
  const selectionHandler = (ind) => {
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

        <TouchableOpacity style={globalStyles.categorieOptions} onPress={selectionHandler(ind)}>
          <Text>
            {item.title}
            {item.isSelected ? ' selected' : ' not selected'} {/* ? */}
          </Text>
        </TouchableOpacity>
        )} 
      />
      
      <TouchableOpacity style={globalStyles.startButton} onPress={() => navigation.navigate('Result')}>
        <Text style={globalStyles.buttonText}>Suprice me!</Text>
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
