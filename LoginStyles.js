import { StyleSheet } from 'react-native';

//styles for the login screen
const styles = StyleSheet.create({

  //main container, covering the full screen with padding

  container: {
    flex: 1,                        //uses the full height of the screen
    backgroundColor: '#f5f5f5',     //light gray background for a clean look
    padding: 20,                    //padding around the content
    justifyContent: 'center',       //centers the content vertically
  },

  //logo styling at the top center of the screen
  logo: {
    width: 190,                     //logo width
    height: 190,                    //logo height
    resizeMode: 'contain',          //ensures the image scales properly
    position: 'absolute',           //allows positioning the logo independently
    top: 60,                        //moves the logo down from the top
    alignSelf: 'center',            //centers the logo horizontally
  },

  //large heading for the login screen
  heading: {
    fontSize: 32,               //large font for emphasis
    fontWeight: 'bold',         //bold text
    textAlign: 'center',        //centers the heading text
    marginBottom: 10,           //space below the heading
  },

  //subtitle (e.g., "Welcome back!")
  subtitle: {
    fontSize: 24,             //slightly smaller font than heading
    textAlign: 'center',      //centered text
    marginBottom: 5,          //space below subtitle
  },

  //additional description under subtitle
  description: {
    fontSize: 14,           //smaller font for description text
    textAlign: 'center',    //centered text
    color: '#555',          //gray text for a softer appearance
    marginBottom: 20,       //space below description
  },

  //container for input fields (email, password)
  inputContainer: {
    flexDirection: 'row',         //icon and input field in a row
    alignItems: 'center',         //center content vertically
    backgroundColor: '#fff',      //white background for input field
    borderRadius: 8,              //rounded corners for better appearance
    padding: 10,                  //padding inside the container
    marginBottom: 15,             //space below each input container
    borderWidth: 1,               //border around the input box
    borderColor: '#ccc',          //light gray border
  },

  //icon styling (e.g., email or password icon)
  icon: {
    marginRight: 10,        //space between icon and text input
  },

  //text input styling for typing email and password
  input: {
    flex: 1,          //takes up remaining space in the row
    fontSize: 16,     //medium font size for readability
  },

  //container for buttons like "Save Details" and "Login"
  buttonRow: {
    flexDirection: 'row',                   //align buttons horizontally
    justifyContent: 'space-between',        //spread buttons apart
    alignItems: 'center',                   //align vertically in the center
    marginTop: 10,                          //space above the button row
  },

  //save Details button style (wrapper)
  saveButton: {
    paddingVertical: 10,          //vertical padding for height
    paddingHorizontal: 15,        //horizontal padding for width
    borderRadius: 8,              //rounded corners for button
  },

  //style when the Save Details button is active (pressed)
  saveButtonActive: {
    backgroundColor: '#3cc9b9',     //teal color indicating it's active
  },

  //style when the Save Details button is inactive
  saveButtonInactive: {
    backgroundColor: '#ddd',        //light gray indicating it's inactive
  },

  //text style for Save Details button
  saveButtonText: {
    fontSize: 14,             //small font size
    color: '#fff',            //white text
    fontWeight: 'bold',       //bold for emphasis
  },

  //login button styling
  loginButton: {
    backgroundColor: '#3cc9b9',       //teal background for primary action
    paddingVertical: 10,              //padding for button height
    paddingHorizontal: 20,            //padding for button width
    borderRadius: 8,                  //rounded corners
  },

  //text inside the Login button
  loginButtonText: {
    fontSize: 16,               //slightly larger font
    color: '#fff',              //white text for contrast
    fontWeight: 'bold',         //bold for emphasis
  },

  //text prompting the user to register if they don't have an account
  registerText: {
    textAlign: 'center',        //center the text
    marginTop: 20,              //space above the text
    fontSize: 14,               //small font size
    color: '#555',              //gray text for subtlety
  },

  //register button text (part of the register prompt)
  registerButton: {
    fontWeight: 'bold',       //bold to emphasize the clickable text
    color: '#3cc9b9',         //teal color for a link-like appearance
  },

  //button to return to the Home screen (optional, used in some versions)
  backToHome2: {
    backgroundColor: '#3cc9b9',       //teal background
    paddingVertical: 12,              //padding for height
    borderRadius: 8,                  //rounded corners
    alignItems: 'center',             //center text horizontally
    marginTop: 20,                    //space above the button
  },

  //text for "Back to Home" button
  backToHomeText2: {
    fontSize: 16,             //medium font size
    fontWeight: 'bold',       //bold text
    color: '#fff',            //white text for contrast
  },

  //contact us button styling 
  contactUsButton: {
    backgroundColor: '#3cc9b9',       //teal background
    paddingVertical: 12,              //padding for height
    borderRadius: 8,                  //rounded corners
    alignItems: 'center',             //center text horizontally
    marginTop: 20,                    //space above the button
  },

  //text for "contact us" button
  contactUsText: {
    fontSize: 16,             //medium font size
    fontWeight: 'bold',       //bold text
    color: '#fff',            //white text for contrast
  },
});

export default styles;


