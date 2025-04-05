import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {

    const nome ="Augusto"
    const idade = 22

    function checkIdade(){
        if (idade >=18)
            return "maior de idade"
        else{
            return "Menor de idade"
        }
    }
    function alerta(){
        alert ("Clicou no botao")
    }


  return (
    <View>
      <Text>JavaScriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>idade +40 {idade + 40}</Text>
      <Text>É maior de idade? {checkIdade()}</Text>
      <Text>Check 18+: {idade>=18 ? "18+" : "18-"}</Text>
      <Button title='Clicar' onPress={alerta}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})