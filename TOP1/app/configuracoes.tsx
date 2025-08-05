import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert, Modal, TextInput} from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atualizarUsuario, atualizarSenha, buscarUsuarioPorId } from '../database/db';

const Settings = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    id: null
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSenhaVisible, setModalSenhaVisible] = useState(false);
  const [nomeTemp, setNomeTemp] = useState('');
  const [emailTemp, setEmailTemp] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  useEffect(() => {
    carregarDadosUsuario();
  }, []);


const carregarDadosUsuario = async () => {
  try {
    const dadosUsuarioLogado = await AsyncStorage.getItem('usuarioLogado');
    
    if (dadosUsuarioLogado) {
      const dadosUsuario = JSON.parse(dadosUsuarioLogado);
      
      const dadosAtualizados = buscarUsuarioPorId(dadosUsuario.id);
      
      if (dadosAtualizados) {
        const dadosAtuais = {
          id: dadosAtualizados.id,
          nome: dadosAtualizados.nome,
          email: dadosAtualizados.email
        };
        
        setUsuario(dadosAtuais);
        setNomeTemp(dadosAtualizados.nome);
        setEmailTemp(dadosAtualizados.email);
        
        const dadosAtuaisString = JSON.stringify(dadosAtuais);
        if (dadosUsuarioLogado !== dadosAtuaisString) {
          await AsyncStorage.setItem('usuarioLogado', dadosAtuaisString);
        }
      } else {
        Alert.alert(
          'Sessão Expirada',
          'Dados do usuário não encontrados. Faça login novamente.',
          [
            {
              text: 'OK',
              onPress: async () => {
                await AsyncStorage.removeItem('usuarioLogado');
                router.push('/');
              }
            }
          ]
        );
      }
    } else {
      Alert.alert(
        'Sessão Expirada',
        'Você precisa fazer login novamente.',
        [
          {
            text: 'OK',
            onPress: () => router.push('/')
          }
        ]
      );
    }
  } catch (error) {
    console.error('Erro ao carregar dados do usuário:', error);
    Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
  }
};

  const handleEditarConta = () => {
    setModalVisible(true);
  };

  const handleSalvarDados = async () => {
    if (!nomeTemp.trim() || !emailTemp.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTemp)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    try {
      const resultado = atualizarUsuario(usuario.id, nomeTemp, emailTemp);
      
      if (resultado.success) {
        const novosDados = {
          id: usuario.id,
          nome: nomeTemp,
          email: emailTemp
        };
        
        setUsuario(novosDados);
        
        await AsyncStorage.setItem('usuarioLogado', JSON.stringify(novosDados));
        
        setModalVisible(false);
        Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      } else {
        Alert.alert('Erro', resultado.error || 'Não foi possível atualizar os dados.');
      }
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados.');
    }
  };

  const handleAlterarSenha = () => {
    setModalSenhaVisible(true);
  };


const handleSalvarSenha = async () => {
  if (!senhaAtual.trim() || !novaSenha.trim() || !confirmarSenha.trim()) {
    Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    return;
  }

  if (novaSenha !== confirmarSenha) {
    Alert.alert('Erro', 'As senhas não conferem.');
    return;
  }

  if (novaSenha.length < 6) {
    Alert.alert('Erro', 'A nova senha deve ter pelo menos 6 caracteres.');
    return;
  }

  try {

    const resultado = atualizarSenha(usuario.id, senhaAtual, novaSenha);
    
    if (resultado.success) {
      setModalSenhaVisible(false);
      setSenhaAtual('');
      setNovaSenha('');
      setConfirmarSenha('');
      
      Alert.alert(
        'Sucesso', 
        'Senha alterada com sucesso! Sua nova senha já está ativa.',
        [
          {
            text: 'OK'
          }
        ]
      );
    } else {
      Alert.alert('Erro', resultado.error || 'Não foi possível alterar a senha.');
    }
  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    Alert.alert('Erro', 'Ocorreu um erro ao alterar a senha.');
  }
};

  const handleSairApp = () => {
    Alert.alert(
      'Sair do Aplicativo',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            try {

              await AsyncStorage.removeItem('usuarioLogado');

              router.push('/');
            } catch (error) {
              console.error('Erro ao fazer logout:', error);
              router.push('/');
            }
          }
        }
      ]
    );
  };

  const voltarPagina = () => {
    router.back();
  };

 const ConfigOption = ({ icon, iconLocal, title, onPress, showArrow = true }) => (
  <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
    <View style={styles.optionLeft}>
      {iconLocal ? (
        <Image source={iconLocal} style={styles.optionImageIcon} />
      ) : (
        <Text style={styles.optionIcon}>{icon}</Text>
      )}
      <Text style={styles.optionTitle}>{title}</Text>
    </View>
    {showArrow && <Text style={styles.arrow}>›</Text>}
  </TouchableOpacity>
);


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={voltarPagina} style={styles.backButton}>
          <Image source={require('../assets/images/Arrow.png')} style={styles.imageFlecha} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
 
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
                source={require('../assets/images/Frame 111.png')}
              style={styles.profileImage}
            />
            <View style={styles.statusIndicator} />
          </View>
          <Text style={styles.userEmail}>{usuario.email}</Text>
          <Text style={styles.userName}>{usuario.nome}</Text>
        </View>

        
        <View style={styles.optionsContainer}>
            <ConfigOption
                iconLocal={require('../assets/images/manage_accounts_24dp_000000_FILL0_wght400_GRAD0_opsz24.png')}
                title="Editar Conta"
                onPress={handleEditarConta}
            />

          
          <ConfigOption
            iconLocal={require('../assets/images/lock_24dp_000000_FILL0_wght400_GRAD0_opsz24.png')}
            title="Editar Senha"
            onPress={handleAlterarSenha}
          />

          <ConfigOption
            iconLocal={require('../assets/images/info_24dp_000000_FILL0_wght400_GRAD0_opsz24.png')}
            title="Sobre o App"
            onPress={() => Alert.alert('Sobre', 'Versão 1.0.0\nDesenvolvido com React Native')}
          />
          
          <ConfigOption
            iconLocal={require('../assets/images/door_back_24dp_000000_FILL0_wght400_GRAD0_opsz24.png')}
            title="Sair do Aplicativo"
            onPress={handleSairApp}
          
          />
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Editar Conta</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nomeTemp}
              onChangeText={setNomeTemp}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={emailTemp}
              onChangeText={setEmailTemp}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);

                  setNomeTemp(usuario.nome);
                  setEmailTemp(usuario.email);
                }}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSalvarDados}
              >
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSenhaVisible}
        onRequestClose={() => setModalSenhaVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Alterar Senha</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Senha Atual"
              value={senhaAtual}
              onChangeText={setSenhaAtual}
              secureTextEntry={true}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Nova Senha"
              value={novaSenha}
              onChangeText={setNovaSenha}
              secureTextEntry={true}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Confirmar Nova Senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry={true}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalSenhaVisible(false);
                  setSenhaAtual('');
                  setNovaSenha('');
                  setConfirmarSenha('');
                }}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSalvarSenha}
              >
                <Text style={styles.saveButtonText}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5B4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 15,
  },
  optionImageIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    resizeMode: 'contain',
    },
  ImageFlecha: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 26
  },
  profileSection: {
    backgroundColor: '#eceae6ff',
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 20,
    marginTop: 40,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#8bec8fff',
    borderWidth: 3,
    borderColor: '#fff',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  optionsContainer: {
    backgroundColor: '#eceae6ff',
    marginHorizontal: 10,
    marginTop: 40,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#050505ff',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  optionTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  saveButton: {
    backgroundColor: '#FF6B35',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: '500',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Settings;