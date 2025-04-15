/**
 * Contact Us Screen
 * Date: [23/02/2025]
 * Developer: [R.Maunick]
 * Time: [10:17]
 * Description: This componenet/screen acts as the contact us screen. It shows a form for the user to fill out like name, email and message.
 * It also allows the user to add files, submit message and click social links.
 */

import {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,Linking,Keyboard,TouchableWithoutFeedback,} from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../Styles/ContactStyles';

export default function ContactUsScreen({navigation}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [file, setFile] = useState(null);

  //handle file attachment
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFile(result);
        Alert.alert('File Attached', `Attached: ${result.name}`);
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };

  //handle form submission
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all fields before submitting.');
      return;
    }
    Alert.alert('Message Sent', 'Your message has been submitted successfully!', [{ text: 'OK' }]);
    setFormData({ name: '', email: '', message: '' });
    setFile(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={28} color="black" />
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.title}>Contact Us</Text>

        {/* Subheading */}
        <Text style={styles.subtitle}>Let's Get in Touch</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Your Message"
          multiline
          value={formData.message}
          onChangeText={(text) => setFormData({ ...formData, message: text })}
        />

        {/* Buttons */}
        <View style={styles.buttonRow}>
          {/* Attach File Button */}
          <TouchableOpacity style={styles.attachButton} onPress={pickDocument}>
            <Ionicons name="attach-outline" size={24} color="white" />
            <Text style={styles.attachButtonText}>Attach File</Text>
          </TouchableOpacity>

          {/* Submit Button with Icon */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Ionicons name="send-outline" size={20} color="white" style={styles.submitIcon} />
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/uniofherts/?hl=en')}>
            <FontAwesome name="instagram" size={30} color="#3cc9b9" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/uniofherts/?locale=en_GB')}>
            <FontAwesome name="facebook" size={30} color="#3cc9b9" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/UniofHerts')}>
            <FontAwesome name="twitter" size={30} color="#3cc9b9" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://uk.linkedin.com/school/uniofherts/')}>
            <FontAwesome name="linkedin" size={30} color="#3cc9b9" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}













