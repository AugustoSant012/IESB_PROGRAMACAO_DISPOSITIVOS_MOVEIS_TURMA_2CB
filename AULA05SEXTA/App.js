import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PriemiroComponente from './componentes/PrimeiroComponente/PrimeiroComponente';
import SegundoComponente from './componentes/PrimeiroComponente/SegundoComponente';
import TerceiroCompontente from './componentes/PrimeiroComponente/TerceiroCompontente';
import JavaScriptComponente from './componentes/PrimeiroComponente/JavaScriptComponente';
import Perfil from './componentes/PrimeiroComponente/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

    <PriemiroComponente/>

    <SegundoComponente />

    <TerceiroCompontente/>

    <JavaScriptComponente />

    <Perfil
    nome="Augusto"
    idade= "20"
    email= "dsjakdjkdasjjkasd@88"
    />

<Perfil
    nome="Predo"
    idade= "30"
    email= "dsadas@sadas"
    />

<Perfil
    nome="maria"
    idade= "55"
    email= "kkkkkk@gmial"
    />

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
