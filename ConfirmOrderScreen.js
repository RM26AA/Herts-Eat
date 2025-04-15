/**
 * Confirm-order Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:12]
 * Description: This componenet/screen acts as the confirm-order screen. It gets displayed after the user places an order from the payment page.
 * It shows them a message with a tick icon, has 2 buttons, 1 to go home and anoteher to go to the menu.
 */

import {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {Ionicons} from '@expo/vector-icons';            //importing vector icons
import {Audio} from 'expo-av';                          //import Audio from expo-av
import styles from '../Styles/ConfirmOrderStyles';      //import styles 

export default function ConfirmOrderScreen({ navigation }) {
  const [sound, setSound] = useState();
  const fadeAnim = useRef(new Animated.Value(0)).current; //animated value for fade-in effect

  //fade-in animation effect for the checkmark
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,                   //fully visible
      duration: 1000,               //animation duration in milliseconds
      useNativeDriver: true,        //use native driver for better performance
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

  //function to play the confirmation sound
  const playContinueShopSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({
        uri: 'https://cdn.pixabay.com/download/audio/2024/11/27/audio_90ca556330.mp3?filename=notification-1-269296.mp3',
      });
      setSound(soundObject);          //store the sound object in state
      await soundObject.playAsync();  //play the sound
      console.log('Playing confirmation sound');
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  //handle the Confirm Order button press
  const handleContShop = async () => {
    await playContinueShopSound();      //play the sound effect
    navigation.navigate('Menu');        //navigate to the Menu screen
  };

  return (
    <View style={styles.container}>
      {/* Home Icon */}
      <TouchableOpacity
        style={styles.homeIcon}
        onPress={() => navigation.navigate('Splash')}   //navigate to Splash Screen
      >
        <Ionicons name="home-outline" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Confirmation Content */}
      <View style={styles.content}>
        {/* Animated Checkmark Icon */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <Ionicons name="checkmark-circle" size={100} color="#fff" style={styles.checkmark} />
        </Animated.View>

        {/* Title and Message */}
        <Text style={styles.title}>Order Confirmed</Text>
        <Text style={styles.message}>
          Thank you for your order, you will receive email confirmation shortly.
        </Text>
        <Text style={styles.message}>
          Check the status of your order on the Order Tracking page.
        </Text>

        {/* Continue Shopping Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContShop}
        >
          <Text style={styles.continueButtonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




