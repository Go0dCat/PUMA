import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import * as Location from 'expo-location';

const mockData = [
  { id: '1', text: 'Rådhusesplanaden', address: 'Rådhusesplanaden 6E, Umeå', openingHours: 'Öppet idag 10:00-19:00' },
  { id: '2', text: 'Avion', address: 'Marknadsgatan 6E, Umeå', openingHours: 'Öppet idag 10:00-20:00' },
  { id: '3', text: 'Ersboda', address: 'Formvägen 4, Umeå', openingHours: 'Öppet idag 10:00-20:00' }
]

export default function Search() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>

      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10 }}>
            {item.text}
            <Text style={{ fontSize: 12 }}> {item.address} </Text>
            <Text style={{ fontSize: 12 }}>{item.openingHours}</Text>
          </Text>
        )}
      />

      <Text>{text}</Text>
    </View>
  );


}
