/* Menu screen V4

R.Maunick
02/02/2025
11:27

*/

import {View,Text,StyleSheet,FlatList,Alert,Button,TouchableOpacity} from 'react-native';

//mock menu data, this may be altered in the future
const mockMenu = [
  { id: '1', name: 'Margherita Pizza', price: '£10.99' },       //main meal
  { id: '2', name: 'Cheeseburger', price: '£8.99' },            //main meal
  { id: '3', name: 'Caesar Salad', price: '£7.99' },            //starter meal
  { id: '4', name: 'Spaghetti Bolognese', price: '£12.99' },    //main meal
  { id: '5', name: 'Cheesy Pasta', price: '£14.99' },           //main meal
  { id: '6', name: 'Chicken Burrito', price: '£9' },            //main meal
  { id: '7', name: 'Spicy Wings', price: '£7.99' },             //starter meal
  { id: '8', name: 'Sushi', price: '£10' },                     //starter meal
  { id: '9', name: 'Ramen Noodles', price: '£8' },              //main meal
  { id: '10', name: 'Fries plus Drink', price: '£6.99' },       //starter meal
];

//menu-screen component/screen
export default function MenuScreen({ navigation }) {
  
  //small function to handle alert messages
  const handleAlert = (message) => {
    Alert.alert('Feature Coming Soon', message);    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={mockMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemRow}>
              <Text style={styles.itemText}>
                {item.name} - {item.price}
              </Text>
              <TouchableOpacity onPress={() => handleAlert(`Added ${item.name} to Favourites`)}>    
                <Text style={styles.favouriteText}>Favourite</Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Add to Basket"
              onPress={() => handleAlert(`Added ${item.name} to the basket`)}   
            />
            <TouchableOpacity
              style={styles.reviewButton}
              onPress={() => handleAlert(`See reviews for ${item.name}`)}   
            >
              <Text style={styles.reviewButtonText}>See Review</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('OrderForm')}    
      >
        <Text style={styles.actionButtonText}>View Basket</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleAlert('View Favourites Feature Coming Soon!')}   
      >
        <Text style={styles.actionButtonText}>View Favourites</Text>
      </TouchableOpacity>
    </View>
  );
}

//all styles for my menu screen
const styles = StyleSheet.create({
  container: {
    flex: 1,                      //makes use of the full screen for the height
    padding: 20,                  //adds padding around the edges
    backgroundColor: '#f5f5f5',   //light gray background for contrast, this may change in the future
  },
  title: {
    fontSize: 24,           //large font size for the title/main header
    fontWeight: 'bold',     //bold text for emphasis, to pop out to user
    marginBottom: 10,       //space below the title so text is not crammed
  },
  itemContainer: {
    padding: 10,                  //inner spacing for each menu item
    marginBottom: 10,             //space between different menu items
    backgroundColor: '#e0e0e0',   //light gray background for each item, may change in the future
    borderRadius: 5,              //rounded corners for a improved look
  },
  itemRow: {
    flexDirection: 'row',             //align items horizontally
    justifyContent: 'space-between',  //space out text and buttons evenly
    alignItems: 'center',             //align items to the center to match theme
  },
  itemText: {
    fontSize: 18,        //medium font size for menu items
  },
  favouriteText: {
    fontSize: 14,       //smaller font size for favourite text
    color: '#007bff',   //blue text to indicate interactivity, colour may change in future
  },
  reviewButton: {
    marginTop: 10,                //space above the review button
    alignSelf: 'flex-start',      //aligns to the start of the row
    padding: 5,                   //padding for comfortable touch area
    backgroundColor: '#3cc9b9',   //teal background colour, may change in future
    borderRadius: 5,              //rounded corners for button, match theme
  },
  reviewButtonText: {
    color: '#fff',        //white text for contrast
    fontSize: 14,         //small font size
  },
  actionButton: {
    backgroundColor: '#3cc9b9',       //teal background colour for actions, may change in the future
    padding: 15,                      //inner padding for comfortable clicking
    borderRadius: 8,                  //rounded corners for styling
    alignItems: 'center',             //center text inside button
    marginVertical: 10,               //space between action buttons for improved appearance
  },
  actionButtonText: {
    color: '#fff',              //white text colour for visibility
    fontSize: 16,               //medium font size
    fontWeight: 'bold',         //bold text for emphasis, pop out to user
  },
});

