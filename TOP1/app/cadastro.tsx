import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { initDB, inserirUsuario } from '../database/db'; 

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);

  useEffect(() => {
    initDB();
  }, []);

  const Cadastrar = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    if (!aceitouTermos) {
      Alert.alert('Aceite os termos e condições para continuar!');
      return;
    }

    try {
      const result = await inserirUsuario(nome, email, senha);
      
      if (result.success) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setAceitouTermos(false);
        router.push('/login');
      } else {
        Alert.alert('Erro', 'Houve um problema ao salvar o usuário.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro', 'Houve um problema ao salvar o usuário.');
    }
  };

  const cadastrarComGoogle = () => {
    Alert.alert('Google Sign Up', 'Funcionalidade em desenvolvimento');
  };

  const cadastrarComFacebook = () => {
    Alert.alert('Facebook Sign Up', 'Funcionalidade em desenvolvimento');
  };

  const irParaLogin = () => router.push('/login');
  const voltarInicial = () => router.push('/');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={voltarInicial}>
        <Image source={require('../assets/images/Arrow.png')} style={styles.imagem} resizeMode="contain" />
      </TouchableOpacity>

      <Text style={styles.textoCadastro}>Cadastro</Text>

      <Text style={styles.campoNome}>Nome Completo:</Text>
      <TextInput style={styles.inputs} value={nome} onChangeText={setNome} />

      <Text style={styles.campoNome}>Email:</Text>
      <TextInput style={styles.inputs} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text style={styles.campoNome}>Senha:</Text>
      <TextInput style={styles.inputs} value={senha} onChangeText={setSenha} secureTextEntry={true} />

      <TouchableOpacity style={styles.containerTermos} onPress={() => setAceitouTermos(!aceitouTermos)}>
        <View style={[styles.checkbox, aceitouTermos && styles.checkboxMarcado]}>
          {aceitouTermos && <Text style={styles.checkMark}>✓</Text>}
        </View>
        <Text style={styles.textoTermos}>
          Eu aceito os <Text style={styles.linkTermos}>Termos e Condições</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
        <Text style={styles.textoBotao}>Criar Conta</Text>
      </TouchableOpacity>

      <Text style={styles.textoOu}>Ou</Text>

      <TouchableOpacity style={styles.botaoGoogle} onPress={cadastrarComGoogle}>
        <Image source={require('../assets/images/logos_google-icon.png')} style={styles.iconGoogleImg} resizeMode="contain" />
        <Text style={styles.textoBotaoGoogle}>Cadastrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoFacebook} onPress={cadastrarComFacebook}>
        <Image source={require('../assets/images/logos_facebook.png')} style={styles.iconFacebookImg} resizeMode="contain" />
        <Text style={styles.textoBotaoFacebook}>Cadastrar com Facebook</Text>
      </TouchableOpacity>

      <View style={styles.containerLogin}>
        <Text style={styles.textoJaTem}>Já é um membro? </Text>
        <TouchableOpacity onPress={irParaLogin}>
          <Text style={styles.linkLogin}>Entrar</Text>
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
  textoCadastro: { 
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
  campoNome: { 
    marginTop: 20, 
    marginLeft: 10, 
    marginBottom: 5, 
    fontSize: 16 
  },
  containerTermos: {
    flexDirection: "row", alignItems: "center",
    marginHorizontal: 10, marginBottom: 10, marginTop: 15
  },
  checkbox: {
    width: 20, 
    height: 20, 
    borderWidth: 2,
    borderColor: "#666", 
    borderRadius: 4,
    marginRight: 10, 
    justifyContent: "center", 
    alignItems: "center"
  },
  checkboxMarcado: { 
    backgroundColor: "#4CAF50", 
    borderColor: "#4CAF50" 
  },
  checkMark: { 
    color: "white", 
    fontWeight: "bold", 
    fontSize: 12 
  },
  textoTermos: { 
    flex: 1, 
    fontSize: 14, 
    color: "#333" 
  },
  linkTermos: { 
    textDecorationLine: "underline",
    color: "#FF6B35", 
    fontWeight: "600" 
  },
  botao: {
    backgroundColor: "#FF6B35", 
    height: 45, 
    borderRadius: 12,
    marginHorizontal: 10, 
    marginTop: 20, 
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
    fontSize: 16, color: "#666", 
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
    marginHorizontal: 10, marginBottom: 20
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
  containerLogin: { 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 10 
  },
  textoJaTem: { 
    fontSize: 16, 
    color: "#666" 
  },
  linkLogin: { 
    fontSize: 16, 
    color: "#FF6B35", 
    fontWeight: "600", 
    textDecorationLine: "underline" }
});