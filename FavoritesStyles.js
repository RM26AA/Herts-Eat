import { StyleSheet } from 'react-native';

//styles for the Favorites Component / Screen
const styles = StyleSheet.create({

  //main container style, covers the full screen
  
  container: {
    flex: 1,                      //takes up the entire screen height
    padding: 20,                  //padding around the content
    backgroundColor: '#f5f5f5',   //light gray background for a clean look
  },

  //title at the top of the screen (e.g., "Favorites")
  title: {
    fontSize: 24,             //large font size for visibility
    fontWeight: 'bold',       //bold to emphasize the title
    marginBottom: 20,         //space below the title
    textAlign: 'center',      //centered title
  },

  //text shown when no favorite items are available
  emptyText: {
    textAlign: 'center',      //center the text
    fontSize: 16,             //medium font size
    color: '#666',            //gray color for subtle indication
  },

  //container for each favorite item (e.g., food item)
  itemContainer: {
    flexDirection: 'row',                       //arrange item details and price in a row
    justifyContent: 'space-between',            //space between item details and price
    alignItems: 'center',                       //center content vertically
    backgroundColor: '#fff',                    //white background for contrast
    padding: 15,                                //padding inside the item container
    borderRadius: 10,                           //rounded corners for a smooth appearance
    marginBottom: 10,                           //space between each item container
    shadowColor: '#000',                        //shadow color for a card-like effect
    shadowOpacity: 0.1,                         //light shadow opacity
    shadowOffset: { width: 0, height: 2 },      //shadow position (downwards)
    shadowRadius: 5,                            //blur radius for the shadow
    elevation: 2,                               //android-specific shadow
  },

  //content within the item container (name, price, etc.)
  itemContent: {
    flexDirection: 'column',    //arrange text vertically
    flex: 1,                    //allow content to take up available space
  },

  //style for the food item name (e.g., "Margherita Pizza")
  itemName: {
    fontSize: 16,             //medium font size
    fontWeight: 'bold',       //bold to highlight the name
    marginBottom: 5,          //space between name and price
  },

  //style for the price text (e.g., £10.99)
  itemPrice: {
    fontSize: 14,         //smaller font size than the item name
    color: '#555',        //gray color for subtle display
  },

  //style for the "Back" button at the bottom
  backButton: {
    marginTop: 20,                      //space above the button
    marginBottom: 20,                   //space below the button
    padding: 15,                        //padding for the button height
    borderRadius: 10,                   //rounded corners for a smooth appearance
    backgroundColor: '#3cc9b9',         //teal color for the button
    alignItems: 'center',               //center the button text horizontally
  },

  //text inside the back button
  backButtonText: {
    color: '#fff',          //white text for contrast
    fontSize: 16,           //medium font size
    fontWeight: 'bold',     //bold for emphasis
  },
});

export default styles;


