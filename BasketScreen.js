/**
 * Basket Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:07]
 * Description: This componenet/screen acts as the basket screen. here is where the user will see the items they added to their basket. 
 * It gives them the option to go to the payment page or go back home, they can also delete/remove some items from their basket.
 */

import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../Styles/BasketStyles';

export default function BasketScreen({ navigation, basket, setBasket }) {

  //calculate the total price of items in the basket

  const calculateTotal = () => {
  return basket.reduce((total, item) => {
    const itemPrice = parseFloat(item.price); // make sure this is correct
    return total + itemPrice * item.quantity;
  }, 0);
};


  //remove an item from the basket
  const removeFromBasket = (item) => {
    setBasket(basket.filter((basketItem) => basketItem.id !== item.id));
  };

  //handle navigation to payment screen (with validation)
  const handleContinueToPayment = () => {
    if (basket.length === 0) {
      Alert.alert('Basket Empty', 'Please add at least one item to the basket before continuing.');
    } else {
      navigation.navigate('Payment', { total: calculateTotal() });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Basket</Text>

      {/* Show a message if basket is empty */}
      {basket.length === 0 ? (
        <Text style={styles.emptyText}>Your basket is empty!</Text>
      ) : (
        <FlatList
          data={basket}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {/* Item Details */}
              <View style={styles.itemContent}>
                <Text style={styles.itemText}>
                  {item.name} x{item.quantity}
                </Text>
                <Text style={styles.itemPrice}>
                  £{(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>

              {/* Bin Icon to Remove Item */}
              <TouchableOpacity onPress={() => removeFromBasket(item)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* Display Total Price */}
      {basket.length > 0 && (
        <Text style={styles.totalText}>Total: £{calculateTotal().toFixed(2)}</Text>
      )}

      {/* Navigation Buttons */}
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.singleButtonContainer}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.buttonText}>Back to Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.singleButtonContainer}
          onPress={handleContinueToPayment}       //call the validation function here
        >
          <Text style={styles.buttonText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

