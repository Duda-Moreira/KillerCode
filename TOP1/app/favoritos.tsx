import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import receitasData from '../assets/dados'; // import direto do JSON

interface Receita {
  nome: string;
  ingredientes: string[];
  dieta: string;
  modo_preparo: string;
  imagem: string;
}

export default function Favoritos() {
  const { favoritesList } = useLocalSearchParams();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Receita[]>([]);
  const [favoriteNames, setFavoriteNames] = useState<string[]>([]);

  useEffect(() => {
    loadFavorites();
  }, [favoritesList]);

  const loadFavorites = () => {
    try {
      // Se vem da navegação com lista de favoritos
      if (favoritesList) {
        const parsedFavorites = JSON.parse(favoritesList as string);
        setFavoriteNames(parsedFavorites);
        
        // Busca as receitas completas baseado nos nomes favoritados
        const favoriteRecipesList = receitasData.filter(recipe => 
          parsedFavorites.includes(recipe.nome)
        );
        setFavoriteRecipes(favoriteRecipesList);
      } else {
        // Se não tem parâmetros, verifica se há favoritos salvos localmente
        // (em uma implementação real, você usaria AsyncStorage aqui)
        setFavoriteRecipes([]);
        setFavoriteNames([]);
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
      setFavoriteRecipes([]);
      setFavoriteNames([]);
    }
  };

  const handleRecipePress = (recipe: Receita) => {
    router.push({
      pathname: '/visualizarReceita',
      params: {
        recipe: JSON.stringify(recipe),
        isFavorite: 'true'
      }
    });
  };

  const removeFavorite = (recipeName: string) => {
    Alert.alert(
      'Remover dos favoritos',
      `Deseja remover "${recipeName}" dos favoritos?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            const updatedNames = favoriteNames.filter(name => name !== recipeName);
            const updatedRecipes = favoriteRecipes.filter(recipe => recipe.nome !== recipeName);
            setFavoriteNames(updatedNames);
            setFavoriteRecipes(updatedRecipes);
            
            Alert.alert('Removido!', `${recipeName} foi removida dos favoritos.`);
          },
        },
      ]
    );
  };

  // Dados fictícios para tempo e porções (mesma lógica da tela de visualização)
  const getRecipeTime = (recipeName: string) => {
    const times = ['15 min', '20 min', '25 min', '30 min', '35 min', '40 min', '45 min'];
    return times[Math.floor(Math.random() * times.length)];
  };

  const getRecipeServings = (recipeName: string) => {
    const servings = ['2 porções', '3 porções', '4 porções', '6 porções'];
    return servings[Math.floor(Math.random() * servings.length)];
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
        <TouchableOpacity 
          style={styles.removeButton}
          onPress={(e) => {
            e.stopPropagation();
            removeFavorite(recipe.nome);
          }}
        >
          <Image 
            source={require('../assets/images/Heart.png')} 
            style={[
              styles.favoriteIcon,
              { tintColor: favoriteNames.includes(recipe.nome) ? 'orange' : 'gray' }
            ]} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeName}>{recipe.nome}</Text>
        <Text style={styles.recipeDiet}>Categoria: {recipe.dieta}</Text>
        
        <View style={styles.recipeDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>⏱️</Text>
            <Text style={styles.detailText}>{getRecipeTime(recipe.nome)}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>👥</Text>
            <Text style={styles.detailText}>{getRecipeServings(recipe.nome)}</Text>
          </View>
        </View>
        
        <Text style={styles.ingredientsCount}>
          {recipe.ingredientes.length} ingredientes
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/images/Arrow.png')} style={styles.imageFlecha} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favoritos</Text>
        <View style={{ width: 30 }} />
      </View>

      {favoriteRecipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image 
            source={require('../assets/images/Heart.png')} 
            style={[
                styles.emptyIcon,
                { tintColor: 'gray' }
            ]} 
            resizeMode="contain" 
          />
          <Text style={styles.emptyTitle}>Nenhuma receita favoritada</Text>
          <Text style={styles.emptySubtitle}>
            Quando você adicionar receitas aos favoritos, elas aparecerão aqui.
          </Text>
          <Text style={styles.emptyHint}>
            💡 Dica: Clique no botão "+" nas receitas para favoritá-las!
          </Text>
          <TouchableOpacity 
            style={styles.exploreButton}
            onPress={() => router.push('/escolhaDieta')}
          >
            <Text style={styles.exploreButtonText}>Explorar Receitas</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Suas Receitas Favoritas</Text>
            <Text style={styles.recipeCount}>
              {favoriteRecipes.length} receita{favoriteRecipes.length !== 1 ? 's' : ''} salva{favoriteRecipes.length !== 1 ? 's' : ''}
            </Text>
          </View>

          <ScrollView 
            style={styles.scrollContainer} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {favoriteRecipes.map((recipe, index) => (
              <RecipeCard key={`${recipe.nome}-${index}`} recipe={recipe} />
            ))}
          </ScrollView>
        </>
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/escolhaDieta')}>
          <Image source={require('../assets/images/Fork & Knife-filled (1).png')} style={styles.imageIcone} resizeMode="contain" />
          <Text style={styles.navText}>Plano de refeições</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/images/Heart.png')} style={styles.imageIcone} resizeMode="contain" />
          <Text style={[styles.navText, styles.activeNavText]}>Favoritos</Text>
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    width: 60,
    height: 20,
    marginBottom: 20,
  },
  favoriteIcon: {
    width: 20,
    height: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  emptyHint: {
    fontSize: 14,
    color: '#FF8C42',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 32,
    lineHeight: 20,
  },
  exploreButton: {
    backgroundColor: '#FF8C42',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
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
  removeButton: {
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
  removeButtonText: {
    fontSize: 18,
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
  recipeDiet: {
    fontSize: 14,
    color: '#FF8C42',
    fontWeight: '600',
    marginBottom: 8,
  },
  recipeDetails: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  detailIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  detailText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  ingredientsCount: {
    fontSize: 14,
    color: '#666',
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