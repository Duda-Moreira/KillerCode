
import {Image, Text, View, TouchableOpacity, StyleSheet} from "react-native";
import { router } from 'expo-router'; // ← ADICIONE ESTE IMPORT

export default function HomeScreen() {
  const handleGetStarted = () => {
    router.push('/login'); // ← NAVEGA PARA login.tsx
  };

  const handleLogin = () => {
    router.push('/login'); // ← NAVEGA PARA login.tsx
  };

  return (
    <View style={styles.container}>
      <View style={styles.conteudoCentral}>
        <Image 
            source={require('../assets/images/LOGO.png')} 
            style={styles.imagem}
            resizeMode="contain"
        />
        <Text>App funcionando!</Text>
      </View>
      
      <View style={styles.rodape}>
        <TouchableOpacity style={styles.botao} onPress={handleGetStarted}>
          <Text style={styles.textoBotao}>Get Started</Text>
        </TouchableOpacity>
        
        <Text style={styles.textoLogin}>
          Already a member?{" "}
          <Text style={styles.linkLogin} onPress={handleLogin}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

// ... seus styles atuais
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF5"
    },
    conteudoCentral: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    rodape: {
      padding: 20,
      paddingBottom: 40, // Espaço da borda inferior
    },
    imagem: {
      width: 180,
      height: 150,
      marginBottom: 20,
    },
    botao: {
      backgroundColor: "#FF8C00",
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderRadius: 25,
      width: "100%",
    },
    textoBotao: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    textoLogin:{
      color: "#666",
      fontSize: 14,
      textAlign: "center",
    },

    linkLogin:{
      color: "#FF8C00",
      fontWeight: "bold",
      textDecorationLine: "underline",
    }

});