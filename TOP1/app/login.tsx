import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      // Busca os dados do usuário cadastrado no AsyncStorage
      const usuarioSalvo = await AsyncStorage.getItem('@usuario');
      
      if (!usuarioSalvo) {
        Alert.alert('Erro', 'Nenhum usuário cadastrado encontrado!');
        return;
      }

      // Converte os dados de volta para objeto
      const usuario = JSON.parse(usuarioSalvo);

      // Verifica se email e senha coincidem
      if (usuario.email === email && usuario.senha === senha) {
        Alert.alert('Sucesso', `Bem-vindo, ${usuario.nome}!`, [
          {
            text: 'OK',
            onPress: () => {
              // Navega para a próxima tela (ex: home, dashboard, etc.)
              router.push('/home'); // Substitua '/home' pela sua tela principal
            }
          }
        ]);
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos!');
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      Alert.alert('Erro', `Erro ao fazer login: ${errorMessage}`);
    }
  };

  const loginComGoogle = () => {
    Alert.alert("Google Sign In", "Funcionalidade em desenvolvimento");
  };

  const loginComFacebook = () => {
    Alert.alert("Facebook Sign In", "Funcionalidade em desenvolvimento");
  };

  const irParaCadastro = () => {
    router.push('/cadastro');
  };

  const voltarInicial = () => {
    router.push('/'); // ou a rota da sua tela inicial
  };
  
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={voltarInicial}>
          <Image
            source={require('../assets/images/Arrow.png')} 
            style={styles.imagem} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      </View>

      <View> 
        <Text style={styles.textoLogin}>Login</Text>
      </View>

      <View> 
        <Text style={styles.campoEmail}>Email: </Text>
        <TextInput 
          style={styles.inputs} 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.campoSenha}>Senha: </Text>
        <TextInput 
          style={styles.inputs} 
          value={senha} 
          onChangeText={setSenha} 
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.textoOu}>Ou</Text>

        {/* Botão Google */}
        <TouchableOpacity style={styles.botaoGoogle} onPress={loginComGoogle}>
          <Image 
            source={require('../assets/images/logos_google-icon.png')} 
            style={styles.iconGoogleImg}
            resizeMode="contain"
          />
          <Text style={styles.textoBotaoGoogle}>Entrar com Google</Text>
        </TouchableOpacity>

        {/* Botão Facebook */}
        <TouchableOpacity style={styles.botaoFacebook} onPress={loginComFacebook}>
          <Image 
            source={require('../assets/images/logos_facebook.png')} 
            style={styles.iconFacebookImg}
            resizeMode="contain"
          />
          <Text style={styles.textoBotaoFacebook}>Entrar com Facebook</Text>
        </TouchableOpacity>

        {/* Link para cadastro */}
        <View style={styles.containerCadastro}>
          <Text style={styles.textoNaoTem}>Ainda não é um membro? </Text>
          <TouchableOpacity onPress={irParaCadastro}>
            <Text style={styles.linkCadastro}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCD8F"
  },

  imagem: {
    marginTop: 25,
    marginLeft: 10
  },
  
  textoLogin: {
    marginTop: 25,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 22
  },

  inputs: {
    backgroundColor: "#E6E6E6",
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 13,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  campoEmail: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
  },

  campoSenha: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#FF6B35",
    height: 45,
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  textoOu: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    marginBottom: 15,
  },

  botaoGoogle: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  iconGoogleImg: {
    width: 20,
    height: 20,
    marginRight: 12,
  },

  textoBotaoGoogle: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },

  botaoFacebook: {
    backgroundColor: '#1877F2',
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },

  iconFacebookImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  textoBotaoFacebook: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },

  containerCadastro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  textoNaoTem: {
    fontSize: 16,
    color: '#666',
  },

  linkCadastro: {
    fontSize: 16,
    color: '#FF6B35',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});