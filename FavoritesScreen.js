/**
 * Favourites Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:35]
 * Description: This screen shows all the user's favourite items. It gives them the ability to remove some items from their favourite list.
 * It also has a button to travel back to the menu page.
 */

import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../Styles/FavoritesStyles';

export default function FavoritesScreen({ navigation, favorites, setFavorites }) {
  const removeFromFavorites = (item) => {
    setFavorites(favorites.filter((favItem) => favItem.id !== item.id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>You have no favorites yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {/* Name and Price */}
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>£{item.price.toFixed(2)}</Text>
              </View>

              {/* Bin Icon */}
              <TouchableOpacity onPress={() => removeFromFavorites(item)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.backButtonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}




