import {StyleSheet} from 'react-native';

//styles for the account page
const styles = StyleSheet.create({

  //main container for the entire screen

  container: {
    flex: 1,                      //takes up the entire screen
    padding: 20,                  //adds padding around the edges
    backgroundColor: '#f5f5f5',   //light gray background color
  },

  //header style for "My Account"
  header: {
    fontSize: 24,             //large text
    fontWeight: 'bold',       //bold text for emphasis
    textAlign: 'center',      //centers the header text
    marginBottom: 20,         //adds spacing below the header
  },

  //container for user profile icon and email   -------
  userInfo: {
    flexDirection: 'row',     //aligns icon and text horizontally
    alignItems: 'center',     //aligns icon and text vertically in the center
    marginBottom: 20,         //adds spacing below the user info section
    marginLeft: 10,
  },

  //user details (email and description) next to the profile icon
  userDetails: {
    marginLeft: 10,     //space between icon and email text
  },

  //user email text style
  email: {
    fontSize: 18,         //medium-large text
    fontWeight: 'bold',   //bold email text
  },

  //user description text style
  description: {
    fontSize: 14,       //smaller text
    color: '#555',      //slightly darker gray text
  },

  //list of accounts
  accountList: {
    flex: 1,              //takes up remaining space
    marginBottom: 20,     //space below the list
    marginLeft: 10,       //space from left edge
    marginRight: 10,      //space from right edge
  },

  //style for each individual account item
  accountItem: {
    flexDirection: 'row',                             //aligns icon and account details horizontally
    alignItems: 'center',                             //vertically center icon and details
    padding: 15,                                      //padding inside the account item box
    backgroundColor: '#fff',                          //white background for each account item
    borderRadius: 8,                                  //rounded corners for card-like appearance
    marginBottom: 10,                                 //space between accounts
    shadowColor: '#000',                              //shadow color (black)
    shadowOpacity: 0.1,                               //light shadow
    shadowOffset: { width: 0, height: 2 },            //slight shadow below the card
    shadowRadius: 5,                                  //shadow blur radius
    elevation: 2,                                     //elevation for Android shadow
  },

  //container for the details within each account item
  accountDetails: {
    flex: 1,              //takes up remaining space
    marginLeft: 10,       //space between icon and text
  },

  //email text within an account item
  accountEmail: {
    fontSize: 16,           //slightly smaller than the profile email
    fontWeight: 'bold',     //bold text
  },

  //description text within an account item
  accountDescription: {
    fontSize: 14,         //regular text size
    color: '#555',        //dark gray
  },

  //date text within an account item
  accountDate: {
    fontSize: 12,         //small text for the date
    color: '#aaa',        //light gray text for less emphasis
  },

  //delete button that appears on swipe
  deleteButton: {
    justifyContent: 'center',       //centers the trash icon vertically
    alignItems: 'center',           //centers the trash icon horizontally
    backgroundColor: 'red',         //red background to indicate danger (delete)
    width: 60,                      //fixed width for the delete button
    height: '90%',                  //matches height of the account item
    borderRadius: 8,                //rounded corners for styling
  },

  //add account input menu
  addMenu: {
    backgroundColor: '#fff',                //white background for the menu box
    padding: 15,                            //inner padding
    borderRadius: 8,                        //rounded corners
    marginBottom: 50,                       //space below the menu
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,                           //shadow for Android
  },

  //text input fields in add account menu
  input: {
    backgroundColor: '#f5f5f5',       //light gray background for input fields
    borderRadius: 8,                  //rounded corners for input fields
    padding: 10,                      //inner padding for easy typing
    marginBottom: 10,                 //space between input fields
    borderWidth: 1,                   //thin border
    borderColor: '#ccc',              //light gray border
  },

  //create button in add account menu
  createButton: {
    backgroundColor: '#3cc9b9',       //teal background color for the button
    padding: 15,                      //padding for button touch area
    borderRadius: 8,                  //rounded corners
    alignItems: 'center',             //center text inside button
    marginBottom: 10,                 //space below the button
  },

  //text inside the create button
  createButtonText: {
    color: '#fff',          //white text color for contrast
    fontWeight: 'bold',     //bold text
    fontSize: 16,           //medium size
  },

  //container for the load, add, and save buttons at the bottom
  buttons: {
    flexDirection: 'column',    //buttons arranged vertically
    marginTop: 10,              //space above buttons
    marginHorizontal: 10,       //margin from left and right edges
  },

  //style for individual buttons (Load, Add, Save)
  button: {
    flexDirection: 'row',           //icon and text horizontally aligned
    alignItems: 'center',           //vertically center icon and text
    backgroundColor: '#3cc9b9',     //teal background color
    padding: 15,                    //padding for touchable area
    borderRadius: 8,                //rounded corners
    marginBottom: 10,               //space between buttons
    justifyContent: 'center',       //center icon and text horizontally
  },

  //text inside the buttons (Load, Add, Save)
  buttonText: {
    color: '#fff',          //white text for contrast
    fontWeight: 'bold',     //bold text
    marginLeft: 10,         //space between icon and text
  },

  bottomNavBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: '#3cc9b9',
  paddingVertical: 20,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  },

  navItem: {
    alignItems: 'center',
    bottom: 10,                   //adjust position upwards a little
  },
  
  navText: {
    color: '#fff',
    fontSize: 12,
  },

});

export default styles;













