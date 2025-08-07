import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

interface Receita {
  nome: string;
  ingredientes: string[];
  dieta: string;
  modo_preparo: string;
  imagem: string;
  compatibility?: {
    score: number;
    matchingCount: number;
    totalCount: number;
    missingIngredients: string[];
    matchingIngredients: string[];
  };
}

export default function VisualizarReceita() {
  const { recipe, isFavorite } = useLocalSearchParams();
  const [recipeData, setRecipeData] = useState<Receita | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'instructions'>('overview');

  
  const getRecipeTime = (recipeName: string) => {
    const times = ['15 min', '20 min', '25 min', '30 min', '35 min', '40 min', '45 min'];
    return times[Math.floor(Math.random() * times.length)];
  };

  const getRecipeServings = (recipeName: string) => {
    const servings = ['2 porções', '3 porções', '4 porções', '6 porções'];
    return servings[Math.floor(Math.random() * servings.length)];
  };

  useEffect(() => {
    try {
      if (recipe) {
        const parsedRecipe = JSON.parse(recipe as string);
        setRecipeData(parsedRecipe);
      }
    } catch (error) {
      console.error('Erro ao carregar receita:', error);
    }
  }, [recipe]);

  if (!recipeData) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando receita...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const renderOverview = () => (
    <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        {recipeData.imagem ? (
          <Image 
            source={{ uri: recipeData.imagem }} 
            style={styles.recipeMainImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.placeholderMainImage}>
            <Text style={styles.placeholderMainText}>🍽️</Text>
          </View>
        )}
      </View>
      
      <View style={styles.recipeHeader}>
        <Text style={styles.recipeName}>{recipeData.nome}</Text>
        <View style={styles.recipeDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>⏱️</Text>
            <Text style={styles.detailText}>{getRecipeTime(recipeData.nome)}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>👥</Text>
            <Text style={styles.detailText}>{getRecipeServings(recipeData.nome)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabButtons}>
        <TouchableOpacity 
          style={[styles.tabButton, styles.ingredientsTabButton]}
          onPress={() => setActiveTab('ingredients')}
        >
          <Text style={styles.tabButtonText}>Ingredientes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, styles.instructionsTabButton]}
          onPress={() => setActiveTab('instructions')}
        >
          <Text style={styles.tabButtonText}>Instruções</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderIngredients = () => (
    <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.ingredientsContainer}>
        {recipeData.ingredientes.map((ingredient, index) => (
          <View key={index} style={styles.ingredientItem}>
            <Text style={styles.ingredientName}>{ingredient}</Text>
            <Text style={styles.ingredientQuantity}>

              {ingredient.toLowerCase().includes('arroz') ? '1/2 xícara' :
               ingredient.toLowerCase().includes('cebola') ? '1 média' :
               ingredient.toLowerCase().includes('alho') ? '2 dentes' :
               ingredient.toLowerCase().includes('tomate') ? '2 unidades' :
               ingredient.toLowerCase().includes('azeite') ? '2 colheres (sopa)' :
               ingredient.toLowerCase().includes('sal') ? 'a gosto' :
               ingredient.toLowerCase().includes('pimenta') ? 'a gosto' :
               ingredient.toLowerCase().includes('leite') ? '200ml' :
               ingredient.toLowerCase().includes('queijo') ? '100g' :
               '1 porção'}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderInstructions = () => {

    const steps = recipeData.modo_preparo.split(/\d+\.|\n/).filter(step => step.trim().length > 0);
    
    return (
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.instructionsContainer}>
          {steps.length > 1 ? (
            steps.map((step, index) => (
              <View key={index} style={styles.instructionStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.stepText}>{step.trim()}</Text>
              </View>
            ))
          ) : (
            <View style={styles.instructionStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepText}>{recipeData.modo_preparo}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/images/Arrow.png')} style={styles.imageFlecha} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Receita</Text>
        <View style={{ width: 30 }} />
      </View>

      {activeTab !== 'overview' && (
        <View style={styles.tabHeader}>
          <TouchableOpacity 
            style={[styles.tabHeaderButton, activeTab === 'ingredients' && styles.activeTabButton]}
            onPress={() => setActiveTab('ingredients')}
          >
            <Text style={[styles.tabHeaderText, activeTab === 'ingredients' && styles.activeTabText]}>
              Ingredientes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabHeaderButton, activeTab === 'instructions' && styles.activeTabButton]}
            onPress={() => setActiveTab('instructions')}
          >
            <Text style={[styles.tabHeaderText, activeTab === 'instructions' && styles.activeTabText]}>
              Instruções
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'ingredients' && renderIngredients()}
      {activeTab === 'instructions' && renderInstructions()}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <TouchableOpacity onPress={() => router.push('/escolhaDieta')}>
            <Image source={require('../assets/images/Fork & Knife-filled (1).png')} style={styles.imageIcone} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={[styles.navText, styles.activeNavText]}>Plano de refeições</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/favoritos')}>
          <Image source={require('../assets/images/Heart.png')} style={styles.imageIcone} resizeMode="contain" />
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/configuracoes')}>
           <Image source={require('../assets/images/Settings.png')} style={styles.imageIcone} resizeMode="contain" />
          <Text style={styles.navText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EAE3',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '##F2EAE3',
  },
  imageFlecha: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 10
  },
  tabHeader: {
    flexDirection: 'row',
    backgroundColor: '#290000',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 12,
    padding: 4,
  },
  tabHeaderButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: '#FF5500',
  },
  tabHeaderText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    marginTop: 55,
  },
  imageContainer: {
    height: 200,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 12,
    overflow: 'hidden',
  },
  recipeMainImage: {
    width: '100%',
    height: '100%',
  },
  placeholderMainImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderMainText: {
    fontSize: 60,
  },
  recipeHeader: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center'
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#290000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  detailText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  tabButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ingredientsTabButton: {
     backgroundColor: '#290000'
  },
  instructionsTabButton: {
     backgroundColor: '#290000'
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  ingredientsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#290000',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
  },
  ingredientName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    flex: 1,
  },
  ingredientQuantity: {
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
  },
  instructionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  instructionStep: {
    flexDirection: 'row',
    backgroundColor: '#290000',
    padding: 20,
    marginBottom: 12,
    borderRadius: 12,
    alignItems: 'flex-start',
  },
  stepNumber: {
    backgroundColor: '#FF5500',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 2,
  },
  stepNumberText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  imageIcone: {
    marginBottom: 10,
    color: '#FF5500',
  },
  navText: {
    fontSize: 12,
    color: '#FF5500',
  },
  activeNavText: {
    color: '#FF5500',
    fontWeight: '600',
  },
});