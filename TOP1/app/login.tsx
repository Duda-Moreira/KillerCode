import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { initDB, verificarLogin } from '../database/db'; 

export default function TelaLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    initDB();
  }, []);

  const fazerLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Digite um email válido!');
      return;
    }

    try {
      // Verificar login no banco de dados
      const resultado = await verificarLogin(email.trim().toLowerCase(), senha);
      
      if (resultado.success) {
        Alert.alert(
          'Sucesso', 
          `Bem-vindo, ${resultado.usuario.nome}!`,
          [
            {
              text: 'OK',
              onPress: () => {
                // Limpar campos
                setEmail('');
                setSenha('');
                // Navegar para tela principal ou dashboard
                router.push('/home'); // ou qualquer rota que você tenha
              }
            }
          ]
        );
      } else {
        Alert.alert('Erro', resultado.message);
        // Limpar apenas a senha por segurança
        setSenha('');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      Alert.alert('Erro', 'Ocorreu um erro interno. Tente novamente.');
    }
  };

  const loginComGoogle = () => {
    Alert.alert('Google Login', 'Funcionalidade em desenvolvimento');
  };

  const loginComFacebook = () => {
    Alert.alert('Facebook Login', 'Funcionalidade em desenvolvimento');
  };

  const irParaCadastro = () => router.push('/cadastro');
  const voltarInicial = () => router.push('/');
  
  const esqueceuSenha = () => {
    Alert.alert('Esqueceu a senha?', 'Funcionalidade em desenvolvimento');
  };

  return (
    <View style={styles.container}>
      {/* Botão voltar */}
      <TouchableOpacity onPress={voltarInicial}>
        <Image source={require('../assets/images/Arrow.png')} style={styles.imagem} resizeMode="contain" />
      </TouchableOpacity>

      <Text style={styles.textoLogin}>Login</Text>

      {/* Campo Email */}
      <Text style={styles.campoLabel}>Email:</Text>
      <TextInput 
        style={styles.inputs} 
        value={email} 
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Campo de email"
      />

      {/* Campo Senha */}
      <Text style={styles.campoLabel}>Senha:</Text>
      <TextInput 
        style={styles.inputs} 
        value={senha} 
        onChangeText={setSenha}
        secureTextEntry={true}
        accessibilityLabel="Campo de senha"
      />

      {/* Link Esqueceu Senha */}
      <TouchableOpacity onPress={esqueceuSenha} style={styles.containerEsqueceu}>
        <Text style={styles.linkEsqueceu}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão Login */}
      <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.textoOu}>Ou</Text>

      {/* Botão Google */}
      <TouchableOpacity style={styles.botaoGoogle} onPress={loginComGoogle}>
        <Image source={require('../assets/images/logos_google-icon.png')} style={styles.iconGoogleImg} resizeMode="contain" />
        <Text style={styles.textoBotaoGoogle}>Entrar com Google</Text>
      </TouchableOpacity>

      {/* Botão Facebook */}
      <TouchableOpacity style={styles.botaoFacebook} onPress={loginComFacebook}>
        <Image source={require('../assets/images/logos_facebook.png')} style={styles.iconFacebookImg} resizeMode="contain" />
        <Text style={styles.textoBotaoFacebook}>Entrar com Facebook</Text>
      </TouchableOpacity>

      {/* Link para Cadastro */}
      <View style={styles.containerCadastro}>
        <Text style={styles.textoNaoTem}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={irParaCadastro}>
          <Text style={styles.linkCadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFE5B4" 
  },
  imagem: { 
    marginTop: 60, 
    marginLeft: 10 
  },
  textoLogin: { 
    marginTop: 25, 
    marginLeft: 10, 
    fontWeight: "bold", 
    fontSize: 22 
  },
  inputs: {
    backgroundColor: "#eceae6ff", 
    height: 40, 
    borderRadius: 12,
    paddingHorizontal: 13, 
    marginHorizontal: 10, 
    marginBottom: 10,
    borderWidth: 1
  },
  campoLabel: { 
    marginTop: 20, 
    marginLeft: 10, 
    marginBottom: 5, 
    fontSize: 16 
  },
  containerEsqueceu: {
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 20
  },
  linkEsqueceu: {
    fontSize: 14,
    color: "#FF6B35",
    fontWeight: "600",
    textDecorationLine: "underline"
  },
  botao: {
    backgroundColor: "#FF6B35", 
    height: 45, 
    borderRadius: 12,
    marginHorizontal: 10, 
    marginTop: 10, 
    justifyContent: "center", 
    alignItems: "center"
  },
  textoBotao: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  textoOu: { 
    textAlign: "center", 
    fontSize: 16, 
    color: "#666", 
    marginVertical: 20 
  },
  botaoGoogle: {
    backgroundColor: "white", 
    height: 45, 
    borderRadius: 12,
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center",
    marginHorizontal: 10, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: "#ddd"
  },
  iconGoogleImg: { 
    width: 20, 
    height: 20, 
    marginRight: 12 
  },
  textoBotaoGoogle: { 
    color: "#333", 
    fontSize: 16, 
    fontWeight: "500" 
  },
  botaoFacebook: {
    backgroundColor: "#1877F2", 
    height: 45, 
    borderRadius: 12,
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center",
    marginHorizontal: 10, 
    marginBottom: 20
  },
  iconFacebookImg: { 
    width: 20, 
    height: 20, 
    marginRight: 10 
  },
  textoBotaoFacebook: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "500" 
  },
  containerCadastro: { 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 115 
  },
  textoNaoTem: { 
    fontSize: 16, 
    color: "#666"
  },
  linkCadastro: { 
    fontSize: 16, 
    color: "#FF6B35", 
    fontWeight: "600", 
    textDecorationLine: "underline" 
  }
});
