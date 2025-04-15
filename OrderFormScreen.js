/* Order form screen V4

R.Maunick
02/02/2025
11:36

*/

import {useState} from 'react';
import {View,Text,TextInput,StyleSheet,Button,Alert,TouchableOpacity} from 'react-native';

//order-form-screen componenent/screen
export default function OrderFormScreen() {
  
  //state variables for meal name and price, may add more in future
  const [mealName, setMealName] = useState('');
  const [price, setPrice] = useState('');

  //small fuction to handle navigation back to the menu
  const handleBackToMenu = () => {
    Alert.alert('Navigation', 'Back to Menu feature coming soon!');   
  };

  //small fuction to handle navigation to the payment screen, payment screen will be added in the future
  const handleContinueToPayment = () => {
    Alert.alert('Navigation', 'Continue to Payment feature coming soon!');  
  };

  return (
    <View style={styles.container}>
      {/* header/main title */}
      <Text style={styles.title}>Your Basket</Text>

      {/* input feilds for meal details */}
      <Text style={styles.subtitle}>Add a New Meal to Your Basket</Text>
      <TextInput
        style={styles.input}
        placeholder="Meal Name"
        value={mealName}
        onChangeText={setMealName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price (e.g., £19.99)"
        value={price}
        onChangeText={setPrice}
      />

      {/* submit button */}
      <Button
        title="Submit"
        onPress={() => {
          Alert.alert('Feature Coming Soon', `You added ${mealName} for ${price}`);

          setMealName(''); //clear input field
          setPrice('');    //clear input field
        }}
      />

      {/* navigation buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={handleBackToMenu}>
          <Text style={styles.buttonText}>Back to Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={handleContinueToPayment}>
          <Text style={styles.buttonText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//all Styles for my order-form screen
const styles = StyleSheet.create({
  container: {
    flex: 1,                    //makes use of full height of the screen
    padding: 20,                //adds padding around the edges
    backgroundColor: '#f5f5f5', //light grey backgrond for contrast, maybe in future it may change 
  },
  title: {
    fontSize: 24,         //large font size for main title/header
    fontWeight: 'bold',   //bold text to pop out to user
    textAlign: 'center',  //center-align the text to match theme
    marginBottom: 20,     //space below the title/header so text doesnt look crammed
  },
  subtitle: {
    fontSize: 18,         //medium font size for subtitle
    fontWeight: '600',    //semi-bold text for slight emphasis
    textAlign: 'center',  //center-align the text to match the theme
    marginBottom: 20,     //space below the subtitle so text doesnt get crammed
  },
  input: {
    borderWidth: 1,           //adds a border around the input field
    borderColor: '#ccc',      //light grey border colour, may change in the future
    padding: 10,              //padding inside the input field
    borderRadius: 5,          //rounded corners for improved appearance
    marginBottom: 20,         //space below each input field, so text doesnt get crammed
    backgroundColor: '#fff',  //white background for visibility, may change in future
  },
  buttonContainer: {
    position: 'absolute',             //position at the bottom of the screen
    bottom: 40,                       //distance from the bottom edge
    left: 20,                         //align slightly inward from left edge
    right: 20,                        //align slightly inward from right edge
    justifyContent: 'space-between',  //space buttons evenly
  },
  bottomButton: {
    backgroundColor: '#3cc9b9',     //teal background colour, may change in future
    padding: 15,                    //padding inside the button
    borderRadius: 8,                //rounded corners for button
    marginVertical: 10,             //space between buttons
    alignItems: 'center',           //center-align text inside the button
  },
  buttonText: {
    color: '#fff',                //white text colour for contrast
    fontSize: 16,                 //medium font size
    fontWeight: 'bold',           //bold text for emphasis
  },
});



