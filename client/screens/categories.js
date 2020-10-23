import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import {
  List,
  ListItem,
  Body,
  Container,
  Root,
  Content
} from 'native-base';
import { globalStyles } from "../styles/global";
//import MultipleChoice from 'react-native-multiple-choice'

const categories = [
  { title: 'Öl', key: '1' },
  { title: 'Cider', key: '2' },
  { title: 'Blanddryck', key: '3' },
  { title: 'Rött-vin', key: '4' },
  { title: 'Vitt-vin', key: '5' },
  { title: 'Rosévin', key: '6' },
  { title: 'Mousserande vin', key: '7' },
]

function useSelectionChange(items) {
  const [selectionMode, setSelectionMode] = useState(null);
  useEffect(() => {
    if (items.filter(i => i.selected).length > 0) {
      setSelectionMode(true);
    } else {
      setSelectionMode(false);
    }
  });
  return selectionMode;
}

export default function Categories({ navigation }) {
  /*const [categories, setCategories] = useState([ // the current state and a function that updates it.
    { title: 'Öl', key: '1' },
    { title: 'Cider', key: '2' },
    { title: 'Blanddryck', key: '3' },
    { title: 'Rött-vin', key: '4' },
    { title: 'Vitt-vin', key: '5' },
    { title: 'Rosévin', key: '6' },
    { title: 'Mousserande vin', key: '7' },
  ])*/
  const [items, setItems] = useState(categories);
  const selectionMode = useSelectionChange(items);

  console.log("I början: "+selectionMode)

  const toggleSelect = item => {
    setItems(
      items.map(i => {
        console.log("i toggle: "+JSON.stringify(i))
        if (item === i) {
          i.selected = !i.selected;
        }
        return i;
      }),
    );
  };

  const clearSelection = () => {
    setItems(
      items.map(i => {
      i.selected = false;
      return i;
      }),
    );
  };

  const onPress = item => {
    console.log("selectionMode i onPress: "+selectionMode)
    if (selectionMode) {
      toggleSelect(item);
    } else {
      pressItem(item);
    }
  };

  const onLongPress = item => {
    if (selectionMode === false) {
      toggleSelect(item);
    }
  };

  const pressItem = item => {
    console.log(JSON.stringify(item) + " pressed");
  };

  const renderItem = item => {
    console.log("I renderItem: " + JSON.stringify(item));
    return (
      <ListItem
        onPress={() => onPress(item)}
        style={[item.selected ? styles.selected : styles.normal]}>
        <View>
          <Text>{item.title}</Text>

        </View>
      </ListItem>
    );
  };

  return (
    <View style={globalStyles.quizContainer}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 5 - Vad föredrar du?</Text>
      <List>
        {items.map(item => {
          return renderItem(item);
        })}
      </List>
{/* 
      <FlatList
        style={globalStyles.categorieContainer}
        data={categories}
        renderItem={({ item }) => (
          
          <TouchableOpacity onPress={() => renderItem({item})}
          key={item.id}
          style={[item.selected ? styles.selected : styles.normal]}>
            <Text>
              {item.title}
              {item.isSelected ? ' selected' : ' not selected'} 
            </Text>
          </TouchableOpacity>
        )}
      />*/}

      <TouchableOpacity style={globalStyles.startButton} onPress={() => navigation.navigate('Result')}>
        <Text style={globalStyles.buttonText}>Suprice me!</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  selected: {
    justifyContent: 'center', 
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 12,  
    backgroundColor: 'pink',
    width: 150,
  },
  normal: {
    justifyContent: 'center', 
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 12,  
    backgroundColor: 'coral',
    width: 150,
  }
})


  //useEffect(() => {});
  /*
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
  */


  /*
  function useSelectionChange(items) {
    const [selectionMode, setSelectionMode] = useState(null);
    useEffect(() => {
      if (items.filter(i => i.selected).length > 0) {
        setSelectionMode(true);
      } else {
        setSelectionMode(false);
      }
    });
    return selectionMode;
  }

  return (
    <View style={globalStyles.quizContainer}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('key')}</Text>
      <Text>Fråga 5 - Vad föredrar du?</Text>

      <FlatList
        style={globalStyles.categorieContainer}
        data={categories}
        renderItem={({ item }) => (

          <TouchableOpacity style={globalStyles.categorieOptions} onPress={useSelectionChange(item)}>
            <Text>
              {item.title}
              {item.isSelected ? ' selected' : ' not selected'} {*//* ? *//*}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={globalStyles.startButton} onPress={() => navigation.navigate('Result')}>
        <Text style={globalStyles.buttonText}>Suprice me!</Text>
      </TouchableOpacity>

    </View>
  );*/


  /*
        
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
  */

