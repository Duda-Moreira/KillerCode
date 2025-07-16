import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function telaCadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Cadastrar = async () => {
        if (!nome || !email || !senha) {
          Alert.alert('Preencha todos os campos!');
          return;
        }
    
        const usuario = {nome, email, senha};

        try{
            await AsyncStorage.setItem('@usuario', JSON. stringify(usuario));
            
            Alert.alert("Usuário cadastrado com sucesso!");

            setNome('');
            setEmail('');
            setSenha('');

            router.push('/login');

        }catch (error){
            Alert.alert("Erro ao salvar usuário", error.message);
        }

        return (
            <View style={styles.container}>

                <View>
                    <Image
                    source={require('../assets/images/Arrow.png')} 
                    style={styles.imagem}
                    resizeMode="contain"
                    />
                </View>

                <View> 
                    <Text style={styles.textoCadastro}>Cadastro</Text>
                </View>

                <View> 
                    <Text style={styles.campoNome}>Nome Completo: </Text>
                    <TextInput style={styles.inputs}></TextInput>

                    <Text style={styles.campoNome}>Email: </Text>
                    <TextInput style={styles.inputs}></TextInput>

                    <Text style={styles.campoNome}>Senha: </Text>
                    <TextInput style={styles.inputs}></TextInput>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF5"
    },

    imagem: {

        marginTop: 25,
        marginLeft: 10
    },
    
    textoCadastro: {

        marginTop: 25,
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 22
    },

    inputs: {
        backgroundColor: "orange",
        height: 30,
        borderRadius: 12,
        paddingHorizontal: 13,
        marginLeft: 10,
     
    },

    campoNome: {
        marginTop: 30,
        marginLeft: 10
    }
});
