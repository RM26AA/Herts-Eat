/**
 * Payment Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:45]
 * Description: This screen acts as the payment page. It lets the user fill in a form like name, credit card etc. It also shows the total price at the bottom.
 * After all fields have been filled out, it shows an alert and brings them to confirmation screen.
 */

import {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Audio} from 'expo-av';
import styles from '../Styles/PaymentStyles';

export default function PaymentScreen({ route, navigation }) {
  const { total } = route.params;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
  });

  const [sound, setSound] = useState();

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  //unload the sound on cleanup
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playConfirmSound = async () => {
    const obj = await Audio.Sound.createAsync({
      uri: 'https://cdn.pixabay.com/download/audio/2024/11/27/audio_9845a2bc5a.mp3?filename=pop-off-269284.mp3',
    });
    const { sound } = obj;
    setSound(sound);
    await sound.playAsync();
  };

  const handleGetConfirm = async () => {
    //validation: Ensure all fields are filled
    const isFormValid = Object.values(form).every((value) => value.trim() !== '');

    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in all fields.', [{ text: 'OK' }]);
      return;
    }

    //play sound and show success alert
    await playConfirmSound();
    Alert.alert('Payment Successful', 'Your payment has been processed.', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('ConfirmOrder'), //navigate to ConfirmOrder screen
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Payment</Text>
        <Text style={styles.instructions}>Please enter your payment details</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={form.firstName}
            onChangeText={(value) => handleInputChange('firstName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={form.lastName}
            onChangeText={(value) => handleInputChange('lastName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={form.address}
            onChangeText={(value) => handleInputChange('address', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
          />
          <View style={styles.iconInput}>
            <Ionicons name="card-outline" size={20} color="#555" />
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Credit Card Number"
              keyboardType="number-pad"
              value={form.cardNumber}
              onChangeText={(value) => handleInputChange('cardNumber', value)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Expiry Date (MM/YY)"
            keyboardType="number-pad"
            value={form.expiryDate}
            onChangeText={(value) => handleInputChange('expiryDate', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Security Code (CVV)"
            keyboardType="number-pad"
            value={form.securityCode}
            onChangeText={(value) => handleInputChange('securityCode', value)}
          />
        </View>

        <Text style={styles.total}>Order Total: £{total.toFixed(2)}</Text>

        <TouchableOpacity style={styles.confirmButton} onPress={handleGetConfirm}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}



