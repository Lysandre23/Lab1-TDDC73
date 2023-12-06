import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RowButton from './Components/RowButton';
import MuskImage from './Components/MuskImage';
import Form from './Components/Form';
import Header from './Components/Header';

export default function App() {
  const colorList = [
    '#1abc9c', // Turquoise
    '#a29bfe', // Lila
    '#74b9ff', // Bleu
    '#f39c12', // Orange
  ];
  const [color, setColor] = useState(colorList[0]);
  const [colorCounter, setColorCounter] = useState(0);

  const handleColorChange = () => {
    setColorCounter((colorCounter+1)%colorList.length);
    setColor(colorList[colorCounter]);
  }

  return (
    <View style={styles.container}>
      <Header color={color}/>
      <MuskImage colorChange={handleColorChange}/>
      <View style={styles.buttonsContainer}>
        <RowButton color={color} bt1="Button 1" bt2="Button 2"/>
        <RowButton color={color} bt1="Button 3" bt2="Button 4"/>
      </View>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
