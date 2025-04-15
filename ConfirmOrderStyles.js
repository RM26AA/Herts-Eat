import { StyleSheet } from 'react-native';

//styles for the confirm-order screen
const styles = StyleSheet.create({

  //main container for the entire screen
  
  container: {
    flex: 1,                      //takes up the full height of the screen
    backgroundColor: '#3cc9b9',   //teal background (same as splash screen for consistency)
    padding: 20,                  //padding around the edges
    justifyContent: 'center',     //centers content vertically
  },

  //home icon position (top left corner)
  homeIcon: {
    position: 'absolute',       //position it independently from other elements
    top: 80,                    //distance from the top (below status bar)
    left: 20,                   //distance from the left (added padding)
  },

  //wrapper for content in the middle of the screen
  content: {
    alignItems: 'center',       //centers content horizontally
    justifyContent: 'center',   //centers content vertically
    flex: 1,                    //allows content to take up available space
  },

  //checkmark icon spacing
  checkmark: {
    marginBottom: 20,     //space below the checkmark icon
  },

  //title text style ("Order Confirmed")
  title: {
    fontSize: 28,           //large font size for emphasis
    fontWeight: 'bold',     //bold for importance
    color: '#fff',          //white text for contrast with teal background
    marginBottom: 20,       //space below the title
  },

  //message text style ("Your order is on its way!")
  message: {
    fontSize: 16,           //medium font size
    color: '#fff',          //white text for readability
    textAlign: 'center',    //centers the message text
    marginBottom: 10,       //space below the message
  },

  //continue button style (navigate to home/menu)
  continueButton: {
    backgroundColor: '#fff',      //white button background
    paddingVertical: 12,          //vertical padding for height
    paddingHorizontal: 30,        //horizontal padding for width
    borderRadius: 8,              //rounded corners for a modern look
    marginTop: 20,                //space above the button
  },

  //continue button text style
  continueButtonText: {
    fontSize: 16,             //medium font size
    fontWeight: 'bold',       //bold for emphasis
    color: '#3cc9b9',         //teal text color (matches background)
  },
});

export default styles;



