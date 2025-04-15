/**
 * Menu Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:45]
 * Description: This screen acts as the menu page. It shows all the food items, has a search bar, option to filter the list, a bottom navigation bar.
 * It can allow the user to add items to their basket, show reviews for each item, favourite an item, go to the favourites page, go to basket page.
 * It can allow the user to double tap on an image to enlarge and decrease plus the user can swipe from right to access the favourites page.
 */

import {useState} from 'react';
import {View, Text, FlatList, Alert, TextInput, Image, TouchableOpacity, Button,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {GestureHandlerRootView, PanGestureHandler, TapGestureHandler} from 'react-native-gesture-handler';
import styles from '../Styles/MenuStyles';
import mockMenu from '../Data/MenuData';

export default function MenuScreen({ navigation, basket, setBasket, favorites, setFavorites }) {
  const [selectedImageId, setSelectedImageId] = useState(null);     //tracks the enlarged image
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  //filtered menu items based on category and search query
  const filteredMenu = mockMenu.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToBasket = (item) => {
    const itemExists = basket.find((basketItem) => basketItem.id === item.id);
    if (itemExists) {
      setBasket(
        basket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        )
      );
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
    Alert.alert('Item Added', `${item.name} has been added to your basket!`, [{ text: 'OK' }]);
  };

  const addToFavorites = (item) => {
    const isFavorite = favorites.find((favItem) => favItem.id === item.id);
    if (isFavorite) {
      setFavorites(favorites.filter((favItem) => favItem.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const isFavorite = (item) => favorites.some((favItem) => favItem.id === item.id);

  //handle double-tap to enlarge or shrink the image
  const handleDoubleTap = (itemId) => {
    if (selectedImageId === itemId) {
      setSelectedImageId(null); //shrinks back to normal
    } else {
      setSelectedImageId(itemId); //enlarge the tapped image
    }
  };

  //handle swipe gesture
  const handleSwipeGesture = (event) => {
    const { translationX } = event.nativeEvent;
    if (translationX < -150) {
      //navigate to Favorites if swipe gesture is detected
      navigation.navigate('Favorites');
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={handleSwipeGesture}>
        <FlatList
          data={filteredMenu}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              {/* Title */}
              <Text style={styles.title}>Food Menu</Text>

              {/* Search Bar */}
              <TextInput
                style={styles.searchBar}
                placeholder="Search for items..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />

              {/* Filter Buttons */}
              <View style={styles.filterContainer}>
                {['All', 'Starters', 'Mains', 'Desserts'].map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.filterButton,
                      selectedCategory === category && styles.selectedFilter,
                    ]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        selectedCategory === category && styles.selectedFilterText,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {/* Image with double-tap functionality */}
              <TapGestureHandler
                numberOfTaps={2}
                onActivated={() => handleDoubleTap(item.id)}
              >
                <Image
                  source={item.image}
                  style={[
                    styles.itemImage,
                    selectedImageId === item.id && styles.enlargedImage,  //conditionally enlarge the image
                  ]}
                />
              </TapGestureHandler>

              {/* Details */}
              <View style={styles.textContent}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="gold" />
                  <Text style={styles.ratingText}>{item.rating}/5</Text>
                </View>
                <Text style={styles.descriptionText}>{item.description}</Text>

                {/* Price */}
                <Text style={styles.priceText}>Price: £{item.price.toFixed(2)}</Text>
                

              </View>

              {/* Preparation Time and Delivery Cost */}
              <View style={styles.iconRow}>
                <View style={styles.iconTextContainer}>
                  <Ionicons name="time-outline" size={16} color="#555" />
                  <Text style={styles.iconText}>{item.preparationTime}</Text>
                </View>
                <View style={styles.iconTextContainer}>
                  <Ionicons name="car-outline" size={16} color="#555" />
                  <Text style={styles.iconText}>{item.deliveryCost}</Text>
                </View>
              </View>

              {/* Actions */}
              <View style={styles.actions}>
                <Button title="Add to Basket" onPress={() => addToBasket(item)} color="#3cc9b9" />
                <Button
                  title="See Review"
                  onPress={() =>
                    navigation.navigate('Review', { itemId: item.id, itemName: item.name })
                  }
                  color="#3cc9b9"
                />
                <TouchableOpacity onPress={() => addToFavorites(item)}>
                  <Ionicons
                    name={isFavorite(item) ? 'heart' : 'heart-outline'}
                    size={24}
                    color={isFavorite(item) ? 'red' : 'gray'}
                  />
                </TouchableOpacity>
              </View>

              {/* View More Button */}
              <TouchableOpacity
                style={styles.viewMoreButton}
                onPress={() => navigation.navigate('ViewMore', { item, basket, setBasket })}
              >
                <Text style={styles.viewMoreButtonText}>View More</Text>
              </TouchableOpacity>


            
            </View>
          )}
          ListFooterComponent={
            <View style={styles.footerContainer}>
              <TouchableOpacity
                style={styles.singleButtonContainer}
                onPress={() => navigation.navigate('Favorites')}
              >
                <Text style={styles.buttonText}>View Favorites</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.singleButtonContainer}
                onPress={() => navigation.navigate('Basket')}
              >
                <Text style={styles.buttonText}>View Basket</Text>
              </TouchableOpacity>
            </View>
          }
          style={{ flex: 1 }}
        />
      </PanGestureHandler>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Splash')} style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={styles.navItem}>
          <Ionicons name="heart-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Basket')} style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Basket</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login1')} style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.navText}>User</Text>
        </TouchableOpacity>
      </View>

    </GestureHandlerRootView>
  );
}







