import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { List, ListItem } from 'native-base';
import { globalStyles } from "../styles/global";

const categories = [
  { title: 'Öl', key: '1' },
  { title: 'Cider', key: '2' },
  { title: 'Blanddrycker', key: '3' },
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

      <Text style={styles.quizText}>Vad föredrar du?</Text>
      <Text style={styles.bodyText}>Markera ett eller flera alternativ. Klicka direkt på Generera dryck om du gillar allt!</Text>
      <List>
        {items.map(item => {
          return renderItem(item);
        })}
      </List>

      <TouchableOpacity style={globalStyles.startButton} onPress={() => navigation.navigate('Result', { category: selectedItems(items) })}>
        <Text style={globalStyles.buttonText}>Generera dryck</Text>
      </TouchableOpacity>

      <View style={globalStyles.quizFooter}>
        <View style={globalStyles.navbarContainer}>
          <Image style={globalStyles.navbarImg} source={require('../assets/navbar_5.png')} />
        </View>
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
    borderRadius: 8,
    borderColor: "#F2A478",
    borderWidth: 1.5,
    borderBottomWidth: 1.5,
    backgroundColor: '#F2A478',
    //width: 380,
  },
  normal: {
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 12,
    //padding: 10,
    borderRadius: 8,
    //backgroundColor: 'coral',
    borderColor: '#F2A478',
    borderWidth: 1.5,
    borderBottomWidth: 1.5,

    //width: 380,
  },
  quizText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 30,
  },
  bodyText: {
    textAlign: "center",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    //marginTop: 20,
    marginBottom: 40,
  },
})
