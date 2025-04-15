/**
 * Register Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:55]
 * Description: This screen acts as the register page. Here the user can input thier data like name, email etc.. to create an account. From there, it brings them to the menu page.
 * It has another button to bring them back to the login page and checks all fields are filled to continue.
 */

import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Image,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons';
import {Audio} from 'expo-av';    //importing expo-av for audio playback
import styles from '../Styles/RegisterStyles';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [sound, setSound] = useState();

  //load saved credentials from AsyncStorage
  useEffect(() => {
    const loadSavedDetails = async () => {
      try {
        const savedName = await AsyncStorage.getItem('fullName');
        const savedEmail = await AsyncStorage.getItem('email');
        const savedPhone = await AsyncStorage.getItem('phoneNumber');
        const savedPassword = await AsyncStorage.getItem('password');
        if (savedName && savedEmail && savedPhone && savedPassword) {
          setFullName(savedName);
          setEmail(savedEmail);
          setPhoneNumber(savedPhone);
          setPassword(savedPassword);
          setSaveDetails(true);
        }
      } catch (error) {
        console.error('Error loading saved details:', error);
      }
    };

    loadSavedDetails();
  }, []);

  //save details to AsyncStorage
  const handleSaveDetails = async () => {
    if (saveDetails) {
      try {
        await AsyncStorage.setItem('fullName', fullName);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('phoneNumber', phoneNumber);
        await AsyncStorage.setItem('password', password);
        console.log('Details saved to AsyncStorage');
      } catch (error) {
        console.error('Error saving details:', error);
      }
    } else {
      //clear details if saveDetails is unchecked
      try {
        await AsyncStorage.removeItem('fullName');
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('phoneNumber');
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


  const handleSignUp = async () => {
  try {
    //play the sound when the button is pressed
    await playSound3();

    //validation logic
    if (!fullName || !email || !phoneNumber || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    //success alert
    Alert.alert('Success', 'Your account has been created!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Menu'),
      },
    ]);
  } catch (error) {
    console.error('Error playing sound or handling sign-up:', error);
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

  const playSound3 = async () => {
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
      {/* Logo */}
      <Image
        source={require('../assets/logo4.png')}     //may change in the future
        style={styles.logo}
      />

      {/* Heading */}
      <Text style={styles.heading}>Create Account</Text>

      {/* Description */}
      <Text style={styles.description}>
        Fill your information below to register with your social account.
      </Text>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
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

      {/* Save Details Button */}
      <TouchableOpacity
        style={[
          styles.saveButton,
          saveDetails ? styles.saveButtonActive : styles.saveButtonInactive,
        ]}
        onPress={() => setSaveDetails(!saveDetails)}
      >
        <Text style={styles.saveButtonText}>
          {saveDetails ? '✔ Save Details for Future' : 'Save Details for Future'}
        </Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Back to login Button */}
      <TouchableOpacity style={styles.backToLogin2} onPress={() => navigation.navigate('Login1')}>
        <Text style={styles.backToLoginText2}>Back to Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

