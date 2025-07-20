import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

// Interface para tipagem das receitas
interface Receita {
  nome: string;
  ingredientes: string[];
  dieta: string;
  modo_preparo: string;
  imagem: string;
  // Propriedades adicionais para o sistema de recomendação
  compatibility?: {
    score: number;
    matchingCount: number;
    totalCount: number;
    missingIngredients: string[];
    matchingIngredients: string[];
  };
}

export default function Receitas() {
  const { dietType } = useLocalSearchParams();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState<Receita[]>([]);
  const [availableIngredients, setAvailableIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregar dados do JSON
  useEffect(() => {
    loadRecipesData();
  }, []);

  const loadRecipesData = async () => {
    try {
      setLoading(true);
      
      // Carrega o arquivo dados.json
      const response = await fetch('../../dados.json'); // ou o caminho correto do seu arquivo
      const data: Receita[] = await response.json();
      
      // Filtra receitas pela categoria selecionada
      const filteredRecipes = data.filter(recipe => 
        recipe.dieta.toLowerCase() === (dietType as string).toLowerCase()
      );
      
      setRecipes(filteredRecipes);
      
      // Extrai todos os ingredientes únicos das receitas filtradas
      const allIngredients = new Set<string>();
      filteredRecipes.forEach(recipe => {
        recipe.ingredientes.forEach(ingredient => {
          allIngredients.add(ingredient);
        });
      });
      
      setAvailableIngredients(Array.from(allIngredients).sort());
      
    } catch (error) {
      console.error('Erro ao carregar dados das receitas:', error);
      // Fallback para ingredientes básicos se houver erro
      setAvailableIngredients([
        'tomate', 'cebola', 'alho', 'cenoura', 'batata', 'abobrinha', 
        'pimentão', 'frango', 'carne', 'peixe', 'ovos', 'arroz', 
        'feijão', 'azeite', 'sal', 'pimenta', 'leite de coco'
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Organizar ingredientes por categorias automaticamente
  const organizeIngredientsByCategory = () => {
    const categories: { [key: string]: string[] } = {
      'Proteínas': [],
      'Vegetais': [],
      'Carboidratos': [],
      'Temperos': [],
      'Outros': []
    };

    // Palavras-chave para categorização automática
    const categoryKeywords = {
      'Proteínas': ['frango', 'carne', 'peixe', 'ovos', 'tofu', 'queijo', 'iogurte', 'leite'],
      'Vegetais': ['tomate', 'cebola', 'alho', 'cenoura', 'brócolis', 'espinafre', 'pimentão', 'abobrinha', 'batata'],
      'Carboidratos': ['arroz', 'macarrão', 'pão', 'aveia', 'quinoa', 'batata doce', 'farinha'],
      'Temperos': ['sal', 'pimenta', 'orégano', 'manjericão', 'alecrim', 'azeite', 'vinagre', 'limão', 'coentro', 'dendê']
    };

    availableIngredients.forEach(ingredient => {
      let categorized = false;
      const lowerIngredient = ingredient.toLowerCase();
      
      // Verifica em qual categoria o ingrediente se encaixa
      for (const [category, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some(keyword => lowerIngredient.includes(keyword) || keyword.includes(lowerIngredient))) {
          categories[category].push(ingredient);
          categorized = true;
          break;
        }
      }
      
      // Se não foi categorizado, coloca em "Outros"
      if (!categorized) {
        categories['Outros'].push(ingredient);
      }
    });

    // Remove categorias vazias
    Object.keys(categories).forEach(key => {
      if (categories[key].length === 0) {
        delete categories[key];
      }
    });

    return categories;
  };

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(item => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  // Função para calcular compatibilidade
  const calculateCompatibility = (userIngredients: string[], recipeIngredients: string[]) => {
    const matchingIngredients = recipeIngredients.filter(ingredient => 
      userIngredients.some(userIng => 
        userIng.toLowerCase().includes(ingredient.toLowerCase()) ||
        ingredient.toLowerCase().includes(userIng.toLowerCase())
      )
    );
    
    const compatibilityScore = Math.round((matchingIngredients.length / recipeIngredients.length) * 100);
    const missingIngredients = recipeIngredients.filter(ingredient => 
      !userIngredients.some(userIng => 
        userIng.toLowerCase().includes(ingredient.toLowerCase()) ||
        ingredient.toLowerCase().includes(userIng.toLowerCase())
      )
    );
    
    return {
      score: compatibilityScore,
      matchingCount: matchingIngredients.length,
      totalCount: recipeIngredients.length,
      missingIngredients,
      matchingIngredients
    };
  };

  const handleContinue = () => {
    // Calcular compatibilidade para todas as receitas
    const recipesWithCompatibility = recipes.map(recipe => ({
      ...recipe,
      compatibility: calculateCompatibility(selectedIngredients, recipe.ingredientes)
    }));

    // Ordenar por score de compatibilidade
    const sortedRecipes = recipesWithCompatibility.sort((a, b) => 
      (b.compatibility?.score || 0) - (a.compatibility?.score || 0)
    );

    // Navegar para tela de recomendações
    router.push({
      pathname: '/recomendacoes',
      params: { 
        dietType,
        ingredients: JSON.stringify(selectedIngredients),
        recommendedRecipes: JSON.stringify(sortedRecipes)
      }
    });
  };

  const getFilteredIngredients = () => {
    const organizedIngredients = organizeIngredientsByCategory();
    
    if (!searchText) return organizedIngredients;
    
    const filtered: any = {};
    Object.keys(organizedIngredients).forEach(category => {
      const filteredItems = organizedIngredients[category]
        .filter(ingredient => 
          ingredient.toLowerCase().includes(searchText.toLowerCase())
        );
      if (filteredItems.length > 0) {
        filtered[category] = filteredItems;
      }
    });
    return filtered;
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando ingredientes...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ingredientes</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Título Principal */}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Quais ingredientes você tem em casa?</Text>
        <Text style={styles.subtitle}>
          Selecione os ingredientes para receitas {dietType} personalizadas
        </Text>
        <Text style={styles.recipeCountText}>
          {recipes.length} receitas disponíveis na categoria
        </Text>
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar ingredientes..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      {/* Contador de Selecionados */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>
          {selectedIngredients.length} ingredientes selecionados
        </Text>
        {selectedIngredients.length > 0 && (
          <TouchableOpacity onPress={() => setSelectedIngredients([])}>
            <Text style={styles.clearText}>Limpar tudo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Lista de Ingredientes por Categoria */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {Object.entries(getFilteredIngredients()).map(([category, ingredients]) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>
              {category} ({ingredients.length})
            </Text>
            <View style={styles.ingredientsGrid}>
              {ingredients.map((ingredient) => (
                <TouchableOpacity
                  key={ingredient}
                  style={[
                    styles.ingredientChip,
                    selectedIngredients.includes(ingredient) && styles.selectedChip
                  ]}
                  onPress={() => handleIngredientToggle(ingredient)}
                >
                  <Text style={[
                    styles.ingredientText,
                    selectedIngredients.includes(ingredient) && styles.selectedText
                  ]}>
                    {ingredient}
                    {selectedIngredients.includes(ingredient) && ' ✓'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        
        {Object.keys(getFilteredIngredients()).length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>
              Nenhum ingrediente encontrado para "{searchText}"
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Botão Continue */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            selectedIngredients.length === 0 && styles.disabledButton
          ]} 
          onPress={handleContinue}
          disabled={selectedIngredients.length === 0}
        >
          <Text style={[
            styles.continueButtonText,
            selectedIngredients.length === 0 && styles.disabledButtonText
          ]}>
            Ver Recomendações ({selectedIngredients.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🍽️</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Meal Plan</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  backArrow: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 8,
  },
  recipeCountText: {
    fontSize: 14,
    color: '#FF8C42',
    textAlign: 'center',
    fontWeight: '600',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingRight: 50,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  counterText: {
    fontSize: 16,
    color: '#FF8C42',
    fontWeight: '600',
  },
  clearText: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'underline',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  categoryContainer: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  ingredientsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  ingredientChip: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  selectedChip: {
    backgroundColor: '#FF8C42',
    borderColor: '#FF8C42',
  },
  ingredientText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  noResultsContainer: {
    padding: 40,
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  continueButton: {
    backgroundColor: '#FF8C42',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButtonText: {
    color: '#888888',
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
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#999',
  },
  activeNavText: {
    color: '#FF8C42',
    fontWeight: '600',
  },
});