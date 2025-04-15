/**
 * Login Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:38]
 * Description: This screen acts as the login page. It lets the user enter login details, save those detaisl, register, or go back to the home page.
 */

import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Image,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons';
import {Audio} from 'expo-av';        //importing expo-av for audio playback
import styles from '../Styles/LoginStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [sound, setSound] = useState();

  //load saved credentials from AsyncStorage
  useEffect(() => {
    const loadSavedDetails = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('email');
        const savedPassword = await AsyncStorage.getItem('password');
        if (savedEmail && savedPassword) {
          setEmail(savedEmail);
          setPassword(savedPassword);
          setSaveDetails(true);
        }
      } catch (error) {
        console.error('Error loading saved details:', error);
      }
    };

    loadSavedDetails();
  }, []);

  //save email and password to AsyncStorage
  const handleSaveDetails = async () => {
    if (saveDetails) {
      try {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        console.log('Details saved to AsyncStorage');
      } catch (error) {
        console.error('Error saving details:', error);
      }
    } else {
      //clear details if saveDetails is unchecked
      try {
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('password');
        console.log('Details cleared from AsyncStorage');
      } catch (error) {
        console.error('Error clearing details:', error);
      }
    }
  };

  useEffect(() => {
    handleSaveDetails();
  }, [saveDetails]);


const handleLogin = async () => {
  try {
    //play the sound as soon as the button is pressed
    await playSound2();

    //validate the fields after playing the sound
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      Alert.alert('Account Successfully Logged In', '', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Account'),
        },
      ]);
    }
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};


//unload the sound on cleanup
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound2 = async () => {
    const obj = await Audio.Sound.createAsync({
      uri: 'https://cdn.pixabay.com/download/audio/2024/11/27/audio_831507d507.mp3?filename=pop-3-269281.mp3',
    });
    const { sound } = obj;
    setSound(sound);
    await sound.playAsync();
    console.log('Playing Sound');
  };


  return (
    <View style={styles.container}>
      {/* Image at the top center */}
      <Image
        source={require('../assets/logo4.png')} //may change in the future
        style={styles.logo}
      />

      {/* Welcome Heading */}
      <Text style={styles.heading}>Welcome!</Text>

      {/* Login Subtitle */}
      <Text style={styles.subtitle}>Login</Text>

      {/* Description */}
      <Text style={styles.description}>Please sign in to continue.</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email/Username"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Save Details and Login Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.saveButton,
            saveDetails ? styles.saveButtonActive : styles.saveButtonInactive,
          ]}
          onPress={() => setSaveDetails(!saveDetails)}
        >
          <Text style={styles.saveButtonText}>
            {saveDetails ? '✔ Save Details' : 'Save Details'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Register Section */}
      <Text style={styles.registerText}>
        Don't have an account?{' '}
        <Text
          style={styles.registerButton}
          //onPress={() => Alert.alert('Register button clicked!')}  
          //onPress={navigation.navigate('Login1')}
          onPress={() => navigation.navigate('Register')}

        >
          Register
        </Text>
      </Text>

      {/* Back to login Button */}
      <TouchableOpacity style={styles.backToHome2} onPress={() => navigation.navigate('Splash')}>
        <Text style={styles.backToHomeText2}>Back to Home</Text>
      </TouchableOpacity>

      {/* Contact Us Button */}
      <TouchableOpacity style={styles.contactUsButton} onPress={() => navigation.navigate('ContactUs')}>
        <Text style={styles.contactUsText}>Contact Us</Text>
      </TouchableOpacity>

    </View>
  );
}












