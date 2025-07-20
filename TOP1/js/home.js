import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreens from './OnboardingScreens';

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
      if (hasSeenOnboarding === 'true') {
        setShowOnboarding(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao verificar onboarding:', error);
      setIsLoading(false);
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      setShowOnboarding(false);
    } catch (error) {
      console.error('Erro ao salvar onboarding:', error);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (showOnboarding) {
    return <OnboardingScreens onComplete={completeOnboarding} />;
  }

  // Sua tela principal do home vai aqui
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Bem-vindo ao App!</Text>
      <Text style={styles.homeSubtitle}>Esta é sua tela principal</Text>
      
      {/* Aqui você coloca o resto do conteúdo do seu home */}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  homeSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});