/**
 * Review Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [17:11]
 * Description: This screen acts as the splash/intro screen. This is the first screen the user is greeted with.
 * It has a 'get started' button with a login button below. 
 */

import {useEffect, useState, useRef} from 'react';
import {View, Text, Button, Animated, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';              //importing expo-av for audio playback
import styles from '../Styles/SplashStyles';

export default function SplashScreen({ navigation }) {
  const [sound, setSound] = useState();
  const fadeAnim = useRef(new Animated.Value(0)).current;     //animated value for logo opacity

  //fade-in animation effect for the logo
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,                 //fully visible
      duration: 1000,             //animation duration in milliseconds
      useNativeDriver: true,      //makes use of native driver for better performance
    }).start();
  }, [fadeAnim]);

  //unload the sound on cleanup
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const obj = await Audio.Sound.createAsync({
      uri: 'https://cdn.pixabay.com/download/audio/2024/11/27/audio_c8bcd5259d.mp3?filename=intro-sound-2-269294.mp3',
    });
    const { sound } = obj;
    setSound(sound);
    await sound.playAsync();
    console.log('Playing Sound');
  };

  //handle the Get Started button press
  const handleGetStarted = async () => {
    await playSound();                //play the sound effect
    navigation.navigate('Menu');      //navigate to the Menu screen
  };

  //handle the Login button press
  const handleLoginPress = () => {
    navigation.navigate('Login1');    //navigate to the LoginScreen
  };

  return (
    <View style={styles.container}>
      {/* Logo with fade-in animation */}
      <Animated.Image
        source={require('../assets/logo1.png')}
        style={[styles.logo, { opacity: fadeAnim }]}  //applies animated opacity
      />

      {/* Text Content */}
      <Text style={styles.title}>Welcome to Herts Eats!</Text>
      <Text style={styles.subtitle}>Delicious meals at your fingertips 😀</Text>
      <Button title="Get Started" onPress={handleGetStarted} color="#000000" />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}




