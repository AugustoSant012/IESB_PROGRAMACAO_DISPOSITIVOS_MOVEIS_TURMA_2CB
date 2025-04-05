import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Perfil(props) {

  console.log(props);

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Perfil</Text>
      <Text style={{ fontSize: 40 }}>Nome: {props.nome}</Text>  {/* Usando props */}
      <Text style={{ fontSize: 40 }}>Idade: {props.idade}</Text>  {/* Usando props */}
      <Text style={{ fontSize: 40 }}>Email: {props.email}</Text>  {/* Usando props */}
    </View>
  );
}
