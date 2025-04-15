import { StyleSheet } from 'react-native';

//styles for the View-More Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',         //light background for a clean look
  },

  //full-width food image at the top
  foodImage: {
    width: '100%',
    height: 250,                    //adjusted height for better visibility
    resizeMode: 'cover',            //ensures the image covers the entire area
  },

  //section containing the food name, calories, and ingredients
  detailsContainer: {
    padding: 20,              //adds spacing around the content
  },

  //styling for the food name/title
  foodName: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',        //centers the food name
    marginBottom: 5,            //adds spacing below
  },

  //styling for the calories information
  calories: {
    fontSize: 16,
    textAlign: 'center',      //centers the text
    color: '#555',            //dark gray for readability
    marginBottom: 15,         //adds spacing below
  },

  //title for ingredients section
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,          //spacing before listing ingredients
  },

  //styling for the list of ingredients
  ingredients: {
    fontSize: 16,
    color: '#666',          //medium gray for a soft appearance
  },

  //container for quantity adjustment buttons
  quantityContainer: {
    flexDirection: 'row',           //aligns items in a horizontal row
    justifyContent: 'center',       //centers the buttons and text
    alignItems: 'center',           //aligns buttons and number properly
    marginVertical: 20,             //spacing from the ingredients section
  },

  //buttons to increase or decrease quantity
  quantityButton: {
    backgroundColor: '#3cc9b9',       //matches the theme color
    padding: 10,                      //gives the button a touchable area
    borderRadius: 8,                  //rounded corners for a modern look
    marginHorizontal: 15,             //spacing between the minus/plus buttons
  },

  //text that displays the selected quantity
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  //button for adding item to basket
  addToBasketButton: {
    backgroundColor: '#3cc9b9',       //button color to match the theme
    padding: 15,                      //padding for better clickability
    borderRadius: 8,                  //rounded corners
    alignItems: 'center',             //centers text inside the button
    marginHorizontal: 20,             //adds spacing from screen edges
    marginBottom: 30,                 //bottom margin for spacing
  },

  //text inside the "Add for £XX" button
  addToBasketText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',                  //white text for contrast against the button
  },
});

export default styles;







