import { StyleSheet } from 'react-native';

//styles for the Splash Screen
const styles = StyleSheet.create({

  //main container for the splash screen

  container: {
    flex: 1,                           //takes up the full screen
    justifyContent: 'center',          //vertically centers the content
    alignItems: 'center',              //horizontally centers the content
    backgroundColor: '#3cc9b9',        //teal background color
  },

  //style for the logo image
  logo: {
    width: 250,                        //logo width in pixels
    height: 250,                       //logo height in pixels
    marginBottom: 0,                   //no margin below the logo
  },

  //style for the welcome title text
  title: {
    fontSize: 28,                      //large font size for the title
    fontWeight: 'bold',                //bold font for emphasis
    marginBottom: 10,                  //space below the title
  },

  //style for the subtitle below the title
  subtitle: {
    fontSize: 16,                      //medium font size for subtitle
    marginBottom: 20,                  //space below the subtitle
    color: '#666',                     //gray color for a softer look
  },

  //style for the login button at the bottom center
  loginButton: {
    position: 'absolute',              //absolute positioning for precise placement
    bottom: 40,                        //positioned 40 pixels from the bottom
    backgroundColor: '#fff',           //white background for contrast
    paddingVertical: 10,               //vertical padding inside the button
    paddingHorizontal: 20,             //horizontal padding inside the button
    borderRadius: 8,                   //rounded corners for a modern look

    //shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,

    elevation: 2,                      //shadow effect for Android
  },

  //style for the text inside the login button
  loginButtonText: {
    fontSize: 16,                      //font size for button text
    fontWeight: 'bold',                //bold text for clarity
    color: '#3cc9b9',                  //teal text color to match the app theme
  },
});

export default styles;


