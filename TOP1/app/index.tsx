import React, {useState} from "react";
import {Image, Text,  View, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.teste}>
      <Text>App funcionando!</Text>
    </View>
  );
}


const styles = StyleSheet.create({

    teste: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "pink"
    },
  }

)