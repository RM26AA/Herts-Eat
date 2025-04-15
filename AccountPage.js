/**
 * Account Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [15:02]
 * Description: This componenet/screen acts as the account page in which the user can add new accounts, save those accouints, delete accounts, load pre-made accounts and more.
 */

import {useState, useEffect} from 'react';
import {View,Text,TouchableOpacity,TextInput,FlatList,Alert,KeyboardAvoidingView,SafeAreaView,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons';
import {Swipeable} from 'react-native-gesture-handler';
import styles from '../Styles/AccountStyles';

export default function AccountPage({ navigation }) {
  const [userAccounts, setUserAccounts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newAccount, setNewAccount] = useState({
    email: '',
    description: '',
    date: '',
  });
  const [loggedInEmail, setLoggedInEmail] = useState('');

  //load saved accounts and logged-in email from AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedAccounts = await AsyncStorage.getItem('userAccounts');
        const savedEmail = await AsyncStorage.getItem('email');
        if (savedAccounts) setUserAccounts(JSON.parse(savedAccounts));
        if (savedEmail) setLoggedInEmail(savedEmail);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  //save accounts to AsyncStorage
  const saveAccounts = async () => {
    try {
      await AsyncStorage.setItem('userAccounts', JSON.stringify(userAccounts));
      Alert.alert('Accounts Saved', 'Your accounts have been saved successfully.', [{ text: 'OK' }]);
    } catch (error) {
      console.error('Error saving accounts:', error);
    }
  };

  //load pre-made accounts
  const loadPreMadeAccounts = () => {
    const preMadeAccounts = [
      { email: 'elon@tesla.com', description: 'Electric cars are the future.', date: '2024-01-11' },
      { email: 'JeffBezos@amazon.com', description: 'Best shipping company.', date: '2025-02-23' },
      { email: 'MarkZuck@facebook.com', description: 'Number one social media company.', date: '2023-04-26' },
    ];
    setUserAccounts(preMadeAccounts);
  };

  //add a new account to the list
  const handleAddAccount = () => {
    if (!newAccount.email || !newAccount.description || !newAccount.date) {
      Alert.alert('Error', 'Please fill in all fields before adding an account.', [{ text: 'OK' }]);
      return;
    }
    setUserAccounts([...userAccounts, newAccount]);
    setNewAccount({ email: '', description: '', date: '' });
    setIsAdding(false);
  };

  //delete an account
  const deleteAccount = (index) => {
    const updatedAccounts = [...userAccounts];
    updatedAccounts.splice(index, 1);
    setUserAccounts(updatedAccounts);
  };

  const renderAccount = ({ item, index }) => {
    return (
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteAccount(index)}>
            <Ionicons name="trash-outline" size={24} color="#fff" />
          </TouchableOpacity>
        )}
      >
        <View style={styles.accountItem}>
          <Ionicons name="person-outline" size={24} color="#555" />
          <View style={styles.accountDetails}>
            <Text style={styles.accountEmail}>{item.email}</Text>
            <Text style={styles.accountDescription}>{item.description}</Text>
            <Text style={styles.accountDate}>{item.date}</Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>My Account</Text>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Ionicons name="person-circle-outline" size={60} color="#3cc9b9" />
        <View style={styles.userDetails}>
          <Text style={styles.email}>{loggedInEmail}</Text>
          <Text style={styles.description}>Hi, I'm using Herts Eats!</Text>
        </View>
      </View>

      {/* Accounts List */}
      <FlatList
        data={userAccounts}
        keyExtractor={(item, index) => index.toString()}
        style={styles.accountList}
        renderItem={renderAccount}
      />

      {/* Add Account Menu */}
      {isAdding && (
        <KeyboardAvoidingView behavior="padding" style={styles.addMenu}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={newAccount.email}
            onChangeText={(text) => setNewAccount({ ...newAccount, email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={newAccount.description}
            onChangeText={(text) => setNewAccount({ ...newAccount, description: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            value={newAccount.date}
            onChangeText={(text) => setNewAccount({ ...newAccount, date: text })}
          />
          <TouchableOpacity style={styles.createButton} onPress={handleAddAccount}>
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Login1')} style={styles.navItem}>
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={styles.navText}>Back</Text>
        </TouchableOpacity>

        {/* Load Pre-Made Accounts */}
        <TouchableOpacity onPress={loadPreMadeAccounts} style={styles.navItem}>
          <Ionicons name="cloud-download-outline" size={24} color="white" />
          <Text style={styles.navText}>Load</Text>
        </TouchableOpacity>

        {/* Add New Account */}
        <TouchableOpacity onPress={() => setIsAdding(!isAdding)} style={styles.navItem}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.navText}>Add</Text>
        </TouchableOpacity>

        {/* Save Accounts */}
        <TouchableOpacity onPress={saveAccounts} style={styles.navItem}>
          <Ionicons name="save-outline" size={24} color="white" />
          <Text style={styles.navText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



