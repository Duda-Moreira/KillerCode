import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreens() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      id: 0,
      title: "Planejamento de refeições personalizado",
      description: "Escolha suas refeições da semana em minutos, coma exatamente do jeito que você quer.",
      image: require('../assets/images/eating a variety of foods-bro 1.png'),
      backgroundColor: "#FFE4B5"
    },
    {
      id: 1,
      title: "Receitas simples, sem estresse",
      description: "As mais variadas receitas em apenas um lugar só",
      image:  require('../assets/images/Eco shopping-bro 1.png'),
      backgroundColor: "#FFE4B5"
    },
    {
      id: 2,
      title: "Refeições deliciosas e saudáveis feitas de forma fácil.",
      description: "Cozinhe facilmente refeições saudáveis e deliciosas em cerca de 30 minutos, do início ao fim.",
      image: require('../assets/images/Eating healthy food-bro 1.png'),
      backgroundColor: "#FFE4B5"
    }
  ];

  const handleContinue = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      // Última tela - ir para escolhaDieta
      router.push('/escolhaDieta');
    }
  };

  const handleSkip = () => {
    router.push('/escolhaDieta');
  };

  const goToScreen = (index:number) => {
    setCurrentScreen(index);
  };

  const currentData = screens[currentScreen];

  return (
    <View style={[styles.container, { backgroundColor: currentData.backgroundColor }]}>
  
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={require('../assets/images/Arrow.png')} style={styles.imagemFlecha} resizeMode="contain"/>
      </TouchableOpacity>

      <View style={styles.imageContainer}>   
            <Image 
                source={currentData.image} // Agora usa a imagem específica de cada tela
                style={styles.imagem}
                resizeMode="contain"
            />
      </View>
 

      <View style={styles.indicatorContainer}>
        {screens.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              index === currentScreen ? styles.activeIndicator : styles.inactiveIndicator
            ]}
            onPress={() => goToScreen(index)}
          />
        ))}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{currentData.title}</Text>
        <Text style={styles.description}>{currentData.description}</Text>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>
            {currentScreen === screens.length - 1 ? 'Vamos começar' : 'Continue'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagemFlecha:{
    marginTop: 25, 
    marginLeft: 10 
  },
  backArrow: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 270,
    height: 400,
    marginBottom: 20,
    marginTop: 50
    },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 17,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#FF8C42',
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  inactiveIndicator: {
    backgroundColor: 'rgba(255, 140, 66, 0.3)',
  },
  contentContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 30,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
  continueButton: {
    backgroundColor: '#FF8C42',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },

});