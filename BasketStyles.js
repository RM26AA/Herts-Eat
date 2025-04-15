import { StyleSheet } from 'react-native';

//styles for the basket screen
const styles = StyleSheet.create({

  //main container for the entire basket screen

  container: {
    flex: 1,                        //takes up the entire screen height
    padding: 20,                    //adds spacing from the edges
    backgroundColor: '#f5f5f5',     //light gray background
  },

  //title style for "Your Basket" header
  title: {
    fontSize: 24,           //large text for the title
    fontWeight: 'bold',     //bold text for emphasis
    marginBottom: 20,       //space below the title
    textAlign: 'center',    //centers the title text
  },

  //text displayed when the basket is empty
  emptyText: {
    textAlign: 'center',    //centers the text
    fontSize: 16,           //medium font size
    color: '#666',          //gray color for a subtle look
  },

  //container for each item in the basket
  itemContainer: {
    flexDirection: 'row',                     //aligns image, name, and price horizontally
    justifyContent: 'space-between',          //space between name/price and remove button
    alignItems: 'center',                     //aligns items vertically in the center
    backgroundColor: '#fff',                  //white background for each item card
    padding: 15,                              //inner padding
    borderRadius: 10,                         //rounded corners for better look
    marginBottom: 10,                         //space between items
    shadowColor: '#000',                      //shadow color (black)
    shadowOpacity: 0.1,                       //subtle shadow
    shadowOffset: { width: 0, height: 2 },    //shadow below the item
    shadowRadius: 5,                          //shadow blur
    elevation: 2,                             //android shadow elevation
  },

  //container for item name and price text
  itemContent: {
    flexDirection: 'column',    //arrange text vertically (name and price)
    flex: 1,                    //allow text to take up available space
  },

  //text style for the item name
  itemText: {
    fontSize: 16,             //medium font size
    fontWeight: 'bold',       //bold to emphasize the item name
  },

  //text style for the item price
  itemPrice: {
    fontSize: 14,       //slightly smaller font size
    color: '#555',      //dark gray for less emphasis than the name
  },

  //text displaying the total price in red
  totalText: {
    fontSize: 18,             //larger font size for emphasis
    fontWeight: 'bold',       //bold text
    color: 'red',             //red to indicate importance (total price)
    textAlign: 'center',      //center the total amount text
    marginVertical: 5,        //space above and below
  },

  //wrapper for the buttons at the bottom (Back to Menu, Continue to Payment)
  buttonsWrapper: {
    flexDirection: 'column',  //stack buttons vertically
    alignItems: 'center',     //center buttons horizontally
    marginTop: 20,            //space above the buttons
  },

  //container style for each individual button
  singleButtonContainer: {
    backgroundColor: '#fff',                    //white background for buttons
    padding: 15,                                //inner padding for comfortable touch
    marginVertical: 10,                         //space between buttons
    borderRadius: 10,                           //rounded corners
    borderWidth: 1,                             //border line
    borderColor: '#ccc',                        //light gray border color
    shadowColor: '#000',                        //shadow for the button
    shadowOpacity: 0.1,                         //light shadow
    shadowOffset: { width: 0, height: 2 },      //subtle shadow at the bottom
    shadowRadius: 5,                            //shadow blur radius
    elevation: 2,                               //elevation for Android
    width: '90%',                               //button width, 90% of the screen width
    alignItems: 'center',                       //center text inside the button
  },

  //text style for button labels (e.g., Back to Menu, Continue to Payment)
  buttonText: {
    color: '#3cc9b9',     //teal color for button text
    fontSize: 16,         //medium font size
    //fontWeight: 'bold', //optional, if you prefer bold text
  },
});

export default styles;

