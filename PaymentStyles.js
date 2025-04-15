import { StyleSheet } from 'react-native';

//styles for the payment page
const styles = StyleSheet.create({

  //main container for the payment screen

  container: {
    flex: 1,                            //ensures the container fills the entire screen
    padding: 20,                        //adds spacing around the edges
    backgroundColor: '#f5f5f5',         //light gray background for contrast
  },

  //title at the top (e.g., "Payment")
  title: {
    fontSize: 24,                   //large font size for emphasis
    fontWeight: 'bold',             //bold font for prominence
    textAlign: 'center',            //centers the title horizontally
    marginBottom: 20,               //space below the title
  },

  //instructional text (e.g., "Please enter your payment details")
  instructions: {
    fontSize: 16,               //medium font size
    color: '#666',              //dark gray text for readability
    textAlign: 'center',        //centers text horizontally
    marginBottom: 20,           //space below the instructions
  },

  //container for the entire form section
  form: {
    marginBottom: 20,           //space below the form before showing total price
  },

  //style for each input field (e.g., Name, Address, etc.)
  input: {
    backgroundColor: '#fff',          //white background for contrast
    borderRadius: 8,                  //rounded corners for a modern look
    padding: 15,                      //inner spacing for comfortable typing
    marginBottom: 10,                 //space between input fields
    borderWidth: 1,                   //thin border around the input
    borderColor: '#ccc',              //light gray border color
  },

  //container for input field with an icon (e.g., Credit Card Number)
  iconInput: {
    flexDirection: 'row',                     //aligns icon and input side by side
    alignItems: 'center',                     //vertically centers the icon and text input
    backgroundColor: '#fff',                  //white background for consistency
    borderRadius: 8,                          //rounded corners for uniform appearance
    paddingHorizontal: 10,                    //horizontal padding for inner spacing
    marginBottom: 10,                         //space between fields
    borderWidth: 1,                           //border thickness
    borderColor: '#ccc',                      //border color to match other inputs
  },

  //style for text input within the icon input field
  inputWithIcon: {
    flex: 1,                //takes remaining space after the icon
    padding: 10,            //padding for comfortable typing
    marginLeft: 5,          //space between icon and input field
  },

  //style for the total price text (e.g., "Order Total: £XX.XX")
  total: {
    fontSize: 18,                 //slightly larger font for importance
    fontWeight: 'bold',           //bold font to stand out
    color: 'red',                 //red color to highlight the total cost
    textAlign: 'center',          //centers the text
    marginBottom: 20,             //space below the total text
  },

  //style for the 'Confirm Order' button
  confirmButton: {
    backgroundColor: '#3cc9b9',         //teal color to match app theme
    padding: 15,                        //padding for comfortable touch area
    borderRadius: 8,                    //rounded corners
    alignItems: 'center',               //centers text inside the button
    position: 'absolute',               //fixed positioning at the bottom
    bottom: 40,                         //40px above the bottom of the screen
    left: 20,                           //20px from the left
    right: 20,                          //20px from the right
  },

  //text inside the 'Confirm Order' button
  confirmButtonText: {
    color: '#fff',              //white text for contrast
    fontSize: 16,               //medium font size
    fontWeight: 'bold',         //bold text for emphasis
  },
});

export default styles;



