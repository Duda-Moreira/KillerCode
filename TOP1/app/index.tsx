import React, {useState} from "react";
import {Image, Text,  View, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.teste}>
        <Image 
            source={require('../assets/images/Logo.png')} 
            style={styles.imagem}
        />
      <Text>App funcionando!</Text>
    </View>
  );
}


const styles = StyleSheet.create({

    teste: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFAF5"
    },

    imagem: {
      width: 150,
      height: 150,
      marginBottom: 20,
    }
  }

)