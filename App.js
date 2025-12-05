import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [valor, setvalor] = useState(0); 

  function add() {
    setvalor((prevValor) => prevValor + 1); 
  }

  function rmv() {
    setvalor((prevValor) => prevValor - 1); 
  }

  return (
    <View style={styles.container}>
      <Text>{valor}</Text>
      <Text>BOLSONARO2025</Text>
      <Button title="Adicionar" onPress={add} />
      <Button title="Remover" onPress={rmv} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a9a00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
