/* Splash screen V4

R.Maunick
02/02/2025
11:36

*/

import {View,Text,StyleSheet,Button,Alert} from 'react-native';

//splash-screen componenet/screen
export default function SplashScreen({ navigation }) {
  
  //small funtion to handle the login button press
  const handleLoginPress = () => {
    Alert.alert('Login Button', 'This button does nothing for now.', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      
      {/* app main header */}
      <Text style={styles.title}>Welcome to Herts Eats</Text>   
      
      {/* app small description text */}
      <Text style={styles.subtitle}>Delicious meals at your fingertips 😀</Text>
      
      {/* get Started button - this brings the user to the menu screen */}
      <Button title="Get Started" onPress={() => navigation.navigate('Menu')} />    {/*brings the user to the menu screen*/}

      {/* login button - brings user to login page in future, for now justt shows alert when clicked */}
      <View style={styles.loginButtonContainer}>
        <Button title="Login" onPress={handleLoginPress} color="#000" />    {/*this shows small alert/pop up message*/}
      </View>

    </View>
  );
}

//all Styles for my splash-screen
const styles = StyleSheet.create({
  container: {
    flex: 1,                      //sets height to full size of screen
    justifyContent: 'center',     //centers content vertically
    alignItems: 'center',         //centers content horizontally
    backgroundColor: '#f5f5f5',   //light grey background for now but this may change in future
  },
  title: {
    fontSize: 28,               //large font size for title/main header
    fontWeight: 'bold',         //bold text so it pops out to the the user
    marginBottom: 10,           //spacing below the title, I dont want all the text to be crammed
  },
  subtitle: {
    fontSize: 16,         //medium font size for subtitle/description text
    marginBottom: 20,     //spacing below the subtitle/description text to make text not look cramed
    color: '#666',        //slightly faded text color but this may change in future
  },
  loginButtonContainer: {
    position: 'absolute',     //positions the login button at the bottom for now but could change in future or may add icon instad
    bottom: 40,               //add space from bottom to improve appearance
    alignSelf: 'center',      //centering horizontally to match theme of app
  },
});


