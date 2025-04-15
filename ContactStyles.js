import { StyleSheet } from 'react-native';

//styles for the Contact-Us Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',   //light background for a clean and professional look
    justifyContent: 'center',     //centers everything vertically
  },

  //contact Us title at the top
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',   //centers the title
    marginBottom: 20,      //adds spacing below the title
  },

  //subtitle under the title
  subtitle: {
    fontSize: 18,
    textAlign: 'center',   //centers the subtitle
    marginBottom: 20,      //adds space below the subtitle
  },

  //input fields (Name, Email)
  input: {
    backgroundColor: '#fff',   //white background for contrast
    borderRadius: 8,           //rounded corners for a smooth look
    padding: 12,               //padding for better text visibility
    marginBottom: 15,          //space between input fields
    borderWidth: 1,            //border thickness
    borderColor: '#ccc',       //light gray border
  },

  //larger input field for messages
  textArea: {
    backgroundColor: '#fff',   //white background for contrast
    borderRadius: 8,           //rounded corners
    padding: 12,               //padding for readability
    height: 100,               //slightly increased height for better space
    marginBottom: 15,          //adds space below text area
    borderWidth: 1,            //border thickness
    borderColor: '#ccc',       //light gray border
  },

  //row to align the attach file and submit buttons side by side
  buttonRow: {
    flexDirection: 'row',                   //places buttons side by side
    justifyContent: 'space-between',        //evenly distributes space
    marginBottom: 30,                       //adds spacing below buttons
  },

  //attach file button styling
  attachButton: {
    flexDirection: 'row',                   //aligns icon and text horizontally
    alignItems: 'center',                   //centers text and icon
    backgroundColor: '#3cc9b9',             //theme color
    padding: 12,                            //adds padding for better touch response
    borderRadius: 8,                        //rounded corners
    flex: 1,                                //takes half of the button row
    marginRight: 5,                         //space between attach and submit button
    justifyContent: 'center',               //centers content inside button
  },

  //text inside attach file button
  attachButtonText: {
    color: '#fff',            //white text for contrast
    marginLeft: 5,            //adds spacing between icon and text
    fontWeight: 'bold',       //bold text
  },

  //submit button styling
  submitButton: {
    backgroundColor: '#3cc9b9',       //theme color
    padding: 12,                      //adds padding for a better touchable area
    borderRadius: 8,                  //rounded corners
    flex: 1,                          //takes half of the button row
    marginLeft: 5,                    //space between attach and submit button
    alignItems: 'center',             //centers text
  },

  //text inside the submit button
  submitButtonText: {
    color: '#fff',            //white text for contrast
    fontWeight: 'bold',       //bold text
  },

  //social Media Icons Row
  socialMedia: {
    flexDirection: 'row',                 //aligns icons in a row
    justifyContent: 'space-evenly',       //even spacing between icons
    marginTop: 20,                        //space above social media section
    marginBottom: 40,                     //space below social media icons
  },

  //back button for returning to the previous screen
  backButton: {
    position: 'absolute',                 //absolute positioning for fixed placement
    top: 40,                              //positioning from top
    left: 20,                             //positioning from left
    backgroundColor: 'transparent',       //no background color
    padding: 10,                          //adds padding for easier clickability
    zIndex: 10,                           //ensures it stays above other elements
  },

  //styling for the submit button icon
  submitIcon: {
    marginRight: 5,            //adds spacing between icon and text
  },
});

export default styles;












