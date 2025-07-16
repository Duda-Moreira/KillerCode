
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const handleBack = () => {
    router.back(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Login</Text>
      
      <TouchableOpacity style={styles.botao} onPress={handleBack}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAF5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#FF8C00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});