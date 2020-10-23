import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { List, ListItem } from 'native-base';
import { globalStyles } from "../styles/global";

const categories = [
  { title: 'Öl', key: '1' },
  { title: 'Cider', key: '2' },
  { title: 'Blanddryck', key: '3' },
  { title: 'Rött vin', key: '4' },
  { title: 'Vitt vin', key: '5' },
  { title: 'Rosévin', key: '6' },
  { title: 'Mousserande vin', key: '7' },
]

function useSelectionChange(items) {
  const [selectionMode, setSelectionMode] = useState(null);

  useEffect(() => {
    setSelectionMode(true);
  });
  return selectionMode;
}

export default function Categories({ navigation }) {
  const [items, setItems] = useState(categories);
  const selectionMode = useSelectionChange(items);

  const toggleSelect = item => {
    setItems(
      items.map(i => {
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
    if (selectionMode) {
      toggleSelect(item);
    } else {
      pressItem(item);
    }

  };

  const pressItem = item => {
    console.log(JSON.stringify(item) + " pressed");
  };

  const renderItem = item => {
    return (
      <ListItem
        onPress={() => onPress(item)}
        key={item.key}
        style={[item.selected ? styles.selected : styles.normal]}>
        <View>
          <Text>{item.title}</Text>
        </View>
      </ListItem>
    );
  };

  const selectedItems = items => {
    let selectedArr = []
    items.forEach((item) => {
      if (item.selected === true) {
        selectedArr.push(item.title);
      }
    })
    console.log(JSON.stringify(selectedArr));
    return selectedArr
  };

  return (
    <View style={globalStyles.categorieContainer}>

      <Text style={globalStyles.quizText}>Vad föredrar du?</Text>
      <Text style={globalStyles.bodyText}>Markera flera alternativ eller välja att gå vidare utan att göra något val.</Text>
      <List>
        {items.map(item => {
          return renderItem(item);
        })}
      </List>

      <TouchableOpacity style={globalStyles.startButton} onPress={() => navigation.navigate('Result', {category: selectedItems(items)})}>
        <Text style={globalStyles.buttonText}>Gillar allt!</Text>
      </TouchableOpacity>

      <View style = {globalStyles.quizFooter}>
        <Image source={require('../assets/navbar_5.png')}/>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  selected: {
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 12,
    //padding: 10,
    borderRadius: 12,
    backgroundColor: 'pink',
    //width: 380,
  },
  normal: {
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 12,
    //padding: 10,
    borderRadius: 12,
    //backgroundColor: 'coral',
    borderColor: 'coral',
    borderWidth: 1,
    //width: 380,
  }
})

