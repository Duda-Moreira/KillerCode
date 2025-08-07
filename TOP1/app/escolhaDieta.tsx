import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { router } from 'expo-router';

export default function EscolhaDieta() {
  const [selectedDiet, setSelectedDiet] = useState<string>('');

  const dietOptions = [
    { id: 'vegetariana', name: 'Vegetariana' },
    { id: 'vegana', name: 'Vegana' },
    { id: 'zero-lactose', name: 'Zero Lactose' },
    { id: 'zero-gluten', name: 'Zero Glúten' },
    { id: 'low-carb', name: 'Low Carb' },
    { id: 'dukan', name: 'Dukan' },
    { id: 'mediterranea', name: 'Mediterrânea' },
    { id: 'dash', name: 'Dash' },
    { id: 'cetogenica', name: 'Cetogênica' },
    { id: 'paleolitica', name: 'Paleolítica' },
  ];

  const handleDietSelect = (dietId: string) => {
    setSelectedDiet(dietId);
  };

  const handleContinue = () => {
    if (selectedDiet) {
      router.push({
        pathname: '/receitas',
        params: { dietType: selectedDiet }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Image source={require('../assets/images/Arrow.png')} style={styles.imageFlecha} resizeMode="contain" />
        </TouchableOpacity>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Escolha sua Dieta</Text>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {dietOptions.map((diet) => (
          <TouchableOpacity
            key={diet.id}
            style={[
              styles.dietOption,
              selectedDiet === diet.id && styles.selectedOption
            ]}
            onPress={() => handleDietSelect(diet.id)}
          >
            <Text style={[
              styles.dietText,
              selectedDiet === diet.id && styles.selectedText
            ]}>
              {diet.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            !selectedDiet && styles.disabledButton
          ]} 
          onPress={handleContinue}
          disabled={!selectedDiet}
        >
          <Text style={[
            styles.continueButtonText,
            !selectedDiet && styles.disabledButtonText
          ]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EAE3',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 30,
  },
  imageFlecha: {
    marginTop: 70, 
    marginLeft: 5 
  },
  progressContainer: {
    flex: 1,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 30
  },
  progressFill: {
    height: '100%',
    width: '90%', 
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
  },
  dietOption: {
    backgroundColor: '#290000',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  selectedOption: {
    backgroundColor: '#dad3d3ff',
    borderColor: '#FF5500',
  },
  dietText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  selectedText: {
    color: '#333',
    fontWeight: '600',
  },
  buttonContainer: {
    paddingBottom: 30,
  },
  continueButton: {
    backgroundColor: '#FF5500',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
    elevation: 0,
    shadowOpacity: 0,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButtonText: {
    color: '#888888',
  },
});