/**
 * View-more Screen
 * Date: [23/02/2025]
 * Developer: [R.Maunick]
 * Time: [10:18]
 * Description: This componenet/screen acts as the view-more screen accessible from the menu screen. It displays additional data for each food menu item.
 * It allows the user to read food item instructions, change quantity of food item and add to basket.
 */

import {useState} from 'react';
import {View,Text,Image,TouchableOpacity,Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../Styles/ViewMoreStyles';

export default function ViewMoreScreen({ route, navigation, basket, setBasket }) {
  const { item } = route.params;                            //gets food item data
  const [quantity, setQuantity] = useState(1);              //tracks selected quantity

  //calculate total price based on quantity
  const totalPrice = (item.price * quantity).toFixed(2);
  

  //add to Basket Function
  const addToBasket = () => {
    const itemExists = basket.find((basketItem) => basketItem.id === item.id);
    
    if (itemExists) {
      setBasket(
        basket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + quantity }
            : basketItem
        )
      );
    } else {
      setBasket([...basket, { ...item, quantity }]);
    }

    Alert.alert('Added', `${quantity} x ${item.name} added to your basket!`, [{ text: 'OK' }]);
    navigation.goBack();                  //navigates back to menu after adding
  };

  return (
    <View style={styles.container}>
      {/* Food Image */}
      <Image source={item.image} style={styles.foodImage} />

      {/* Food Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.calories}>{item.calories} Calories</Text>
        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>{item.ingredients}</Text>
      </View>

      {/* Quantity Selector */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
          style={styles.quantityButton}
        >
          <Ionicons name="remove-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={styles.quantityButton}
        >
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Add to Basket Button */}
      <TouchableOpacity style={styles.addToBasketButton} onPress={addToBasket}>
        <Text style={styles.addToBasketText}>Add for £{totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
}
