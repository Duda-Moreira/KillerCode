import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, Alert } from 'react-native';
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

export default function Recomendacoes() {
  const { dietType, ingredients, recommendedRecipes } = useLocalSearchParams();
  const [recipes, setRecipes] = useState<Receita[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);

  useEffect(() => {
    try {
      if (recommendedRecipes && ingredients) {
        const parsedRecipes = JSON.parse(recommendedRecipes as string);
        const parsedIngredients = JSON.parse(ingredients as string);
        
        setRecipes(parsedRecipes);
        setSelectedIngredients(parsedIngredients);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }, [recommendedRecipes, ingredients]);

  const toggleFavorite = (recipeName: string) => {
    setFavoriteRecipes(prev => {
      const isFavorite = prev.includes(recipeName);
      if (isFavorite) {
        Alert.alert('Removido dos favoritos', `${recipeName} foi removida dos seus favoritos.`);
        return prev.filter(name => name !== recipeName);
      } else {
        Alert.alert('Adicionado aos favoritos', `${recipeName} foi adicionada aos seus favoritos!`);
        return [...prev, recipeName];
      }
    });
  };

  const handleRecipePress = (recipe: Receita) => {
    router.push({
      pathname: '/visualizarReceita',
      params: {
        recipe: JSON.stringify(recipe),
        isFavorite: favoriteRecipes.includes(recipe.nome).toString()
      }
    });
  };

  const getCompatibilityColor = (score: number) => {
    if (score >= 80) return '#4CAF50'; 
    if (score >= 60) return '#FF9800'; 
    if (score >= 40) return '#FF5722'; 
    return '#9E9E9E'; 
  };

  const getCompatibilityText = (score: number) => {
    if (score >= 80) return 'Muito compatível';
    if (score >= 60) return 'Compatível';
    if (score >= 40) return 'Parcialmente compatível';
    return 'Pouco compatível';
  };

  const RecipeCard = ({ recipe }: { recipe: Receita }) => (
    <TouchableOpacity style={styles.recipeCard} onPress={() => handleRecipePress(recipe)}>
      <View style={styles.recipeImageContainer}>
        {recipe.imagem ? (
          <Image 
            source={{ uri: recipe.imagem }} 
            style={styles.recipeImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>🍽️</Text>
          </View>
        )}
        <View style={styles.compatibilityBadge}>
          <Text style={[
            styles.compatibilityScore,
            { color: getCompatibilityColor(recipe.compatibility?.score || 0) }
          ]}>
            {recipe.compatibility?.score || 0}%
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.nome);
          }}
        >
          <Text style={[
            styles.addButtonText,
            favoriteRecipes.includes(recipe.nome) && styles.favoriteButtonText
          ]}>
           <Image 
                source={require('../assets/images/Heart.png')} 
                style={[
                styles.favoriteIcon,
                { tintColor: favoriteRecipes.includes(recipe.nome) ? 'orange' : 'gray' }
            ]} 
            resizeMode="contain" 
            />
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeName}>{recipe.nome}</Text>
        <Text style={[
          styles.compatibilityText,
          { color: getCompatibilityColor(recipe.compatibility?.score || 0) }
        ]}>
          {getCompatibilityText(recipe.compatibility?.score || 0)}
        </Text>
        
        <View style={styles.ingredientsInfo}>
          <Text style={styles.ingredientsCount}>
            {recipe.compatibility?.matchingCount || 0}/{recipe.compatibility?.totalCount || 0} ingredientes
          </Text>
          
          {recipe.compatibility?.missingIngredients && recipe.compatibility.missingIngredients.length > 0 && (
            <View style={styles.missingIngredientsContainer}>
              <Text style={styles.missingLabel}>Faltam:</Text>
              <Text style={styles.missingIngredients} numberOfLines={2}>
                {recipe.compatibility.missingIngredients.slice(0, 3).join(', ')}
                {recipe.compatibility.missingIngredients.length > 3 && '...'}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  if (recipes.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require('../assets/images/Arrow.png')} style={styles.imageFlecha} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Recomendações</Text>
          <View style={{ width: 30 }} />
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma receita encontrada</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/images/Arrow.png')} style={styles.imageFlecha} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Suas Recomendações</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Receitas {dietType}</Text>
        <Text style={styles.summarySubtitle}>
          Baseado em {selectedIngredients.length} ingrediente(s) selecionados
        </Text>
        <Text style={styles.recipeCount}>
          {recipes.length} receitas encontradas
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {recipes.map((recipe, index) => (
          <RecipeCard key={`${recipe.nome}-${index}`} recipe={recipe} />
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <TouchableOpacity onPress={() => router.push('/escolhaDieta')}>
            <Image source={require('../assets/images/Fork & Knife-filled (1).png')} style={styles.imageIcone} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={[styles.navText, styles.activeNavText]}>Plano de refeições</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push({
          pathname: '/favoritos',
          params: { favoritesList: JSON.stringify(favoriteRecipes) }
        })}>
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
    backgroundColor: '#FFE5B4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFE5B4',
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
  },
  summaryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFE5B4',
    marginBottom: 10,
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  summarySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  recipeCount: {
    fontSize: 14,
    color: '#FF8C42',
    textAlign: 'center',
    fontWeight: '600',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recipeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  recipeImageContainer: {
    position: 'relative',
    height: 150,
  },
  recipeImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 40,
  },
  compatibilityBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  compatibilityScore: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: '#FF8C42',
    fontWeight: 'bold',
  },
  favoriteButtonText: {
    color: '#FF1744',
  },
  recipeInfo: {
    padding: 16,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  compatibilityText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
    favoriteIcon: {
    width: 24,
    height: 24,
  },
  ingredientsInfo: {
    marginTop: 8,
  },
  ingredientsCount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  missingIngredientsContainer: {
    marginTop: 4,
  },
  missingLabel: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },
  missingIngredients: {
    fontSize: 12,
    color: '#FF5722',
    marginTop: 2,
    lineHeight: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
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
    color: '#FF8C42',
  },
  navText: {
    fontSize: 12,
    color: '#FF8C42',
  },
  activeNavText: {
    color: '#FF8C42',
    fontWeight: '600',
  },
});