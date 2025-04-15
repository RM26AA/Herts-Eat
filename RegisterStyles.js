import { StyleSheet } from 'react-native';

//styles for the Register Page
const styles = StyleSheet.create({

  //container for the entire screen

  container: {
    flex: 1,                            //allows the container to fill the whole screen
    backgroundColor: '#f5f5f5',         //light gray background for contrast
    padding: 20,                        //padding around the content
    justifyContent: 'center',           //centers the content vertically
  },

  //logo image style
  logo: {
    width: 190,                         //set the width of the logo
    height: 190,                        //set the height of the logo
    resizeMode: 'contain',              //ensures the logo scales properly
    alignSelf: 'center',                //centers the logo horizontally
    marginBottom: 0,                    //spacing below the logo (set to 0 here)
    position: 'absolute',               //allows positioning relative to the screen
    top: 10,                            //moves the logo down from the top
  },

  //page heading style
  heading: {
    fontSize: 32,                 //large font size for the heading
    fontWeight: 'bold',           //bold text for emphasis
    textAlign: 'center',          //centers the text
    marginBottom: 10,             //adds space below the heading
  },

  //description text under the heading
  description: {
    fontSize: 14,                 //smaller font size
    textAlign: 'center',          //centers the description
    color: '#555',                //gray text for readability
    marginBottom: 20,             //space below the description
  },

  //container for input fields with icons
  inputContainer: {
    flexDirection: 'row',                 //places icon and input field side by side
    alignItems: 'center',                 //vertically aligns the items
    backgroundColor: '#fff',              //white background for the input field
    borderRadius: 8,                      //rounded corners for the input field
    padding: 10,                          //inner padding
    marginBottom: 15,                     //space between input fields
    borderWidth: 1,                       //border thickness
    borderColor: '#ccc',                  //light gray border color
  },

  //icon next to input fields
  icon: {
    marginRight: 10,        //space between icon and input field
  },

  //style for text inputs inside the input container
  input: {
    flex: 1,                //takes up remaining space after icon
    fontSize: 16,           //font size for input text
  },

  //save details button container
  saveButton: {
    paddingVertical: 10,        //vertical padding
    paddingHorizontal: 15,      //horizontal padding
    borderRadius: 8,            //rounded corners
    marginBottom: 15,           //space below the button
    alignSelf: 'center',        //centers the button horizontally
  },

  //active state for save details button (when checked)
  saveButtonActive: {
    backgroundColor: '#3cc9b9',     //teal background when active
  },

  //inactive state for save details button (when unchecked)
  saveButtonInactive: {
    backgroundColor: '#ddd',        //gray background when inactive
  },

  //text inside the save details button
  saveButtonText: {
    fontSize: 14,                 //font size for button text
    color: '#fff',                //white text color
    fontWeight: 'bold',           //bold text
  },

  //sign up button container
  signUpButton: {
    backgroundColor: '#3cc9b9',       //teal background color
    paddingVertical: 12,              //vertical padding
    borderRadius: 8,                  //rounded corners
    alignItems: 'center',             //centers the button text
  },

  //text inside the sign up button
  signUpButtonText: {
    fontSize: 16,                   //font size for button text
    fontWeight: 'bold',             //bold text
    color: '#fff',                  //white text color
  },

  //back to login button container
  backToLogin2: {
    backgroundColor: '#3cc9b9',       //teal background color
    paddingVertical: 12,              //vertical padding
    borderRadius: 8,                  //rounded corners
    alignItems: 'center',             //centers the button text
    marginTop: 10,                    //space above the button
  },

  //text inside the back to login button
  backToLoginText2: {
    fontSize: 16,               //font size for button text
    fontWeight: 'bold',         //bold text
    color: '#fff',              //white text color
  },
});

export default styles;



