/**
 * Review Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [17:15]
 * Description: This is the main app interface.
 */

import {useState, useEffect} from 'react';
import {Alert, Platform} from 'react-native';                   //imports the Platform API
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Accelerometer} from 'expo-sensors';

//all screens imports
import SplashScreen from './screens/SplashScreen';
import MenuScreen from './screens/MenuScreen';
import BasketScreen from './screens/BasketScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ReviewScreen from './screens/ReviewScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmOrderScreen from './screens/ConfirmOrderScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AccountPage from './screens/AccountPage';                //imports the AccountPage
import ContactUs from './screens/ContactUs';
import ViewMoreScreen from './screens/ViewMoreScreen';

const Stack = createStackNavigator();

export default function App() {
  const [basket, setBasket] = useState([]);                   //basket state
  const [favorites, setFavorites] = useState([]);             //favorites state
  const [shakeDetected, setShakeDetected] = useState(false);

  useEffect(() => {
    //only enable shake detection on mobile platforms (iOS and Android)
    if (Platform.OS === 'web') {
      console.log('Shake detection is disabled on the web.');
      return;
    }

    const subscription = Accelerometer.addListener((data) => {
      const { x, y, z } = data;
      const totalForce = Math.sqrt(x * x + y * y + z * z);

      //detect a shake when the total force exceeds a threshold
      if (totalForce > 1.8) {
        handleShake();
      }
    });

    //set accelerometer update interval
    Accelerometer.setUpdateInterval(100);

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  const handleShake = () => {
    if (!shakeDetected) {
      setShakeDetected(true);

      // Show the alert
      Alert.alert('Alert', 'Undo?', [
        {
          text: 'Undo',
          onPress: () => {
            console.log('Undo pressed');    //placeholder for undo functionality
            setShakeDetected(false);
          },
        },
        {
          text: 'OK',
          onPress: () => setShakeDetected(false),
        },
      ]);

      //reset shake detection after 1 second to allow future shakes
      setTimeout(() => {
        setShakeDetected(false);
      }, 1000);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTintColor: '#3cc9b9',     //color may change in future
        }}
      >
        {/* Splash Screen */}
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />

        {/* Menu Screen */}
        <Stack.Screen name="Menu">
          {props => (
            <MenuScreen
              {...props}
              basket={basket}
              setBasket={setBasket}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Stack.Screen>

        {/* Basket Screen */}
        <Stack.Screen name="Basket">
          {props => (
            <BasketScreen
              {...props}
              basket={basket}
              setBasket={setBasket}
            />
          )}
        </Stack.Screen>

        {/* Favorites Screen */}
        <Stack.Screen name="Favorites">
          {props => (
            <FavoritesScreen
              {...props}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Stack.Screen>

        {/* Review Screen */}
        <Stack.Screen name="Review" component={ReviewScreen} />

        {/* Account Screen */}
        <Stack.Screen name="Account" component={AccountPage} options={{ headerShown: false }} />

        {/* View more Screen */}
        <Stack.Screen name="ViewMore">
          {props => <ViewMoreScreen {...props} basket={basket} setBasket={setBasket} />}
        </Stack.Screen>


        {/* Payment Screen */}
        <Stack.Screen name="Payment">
          {props => (
            <PaymentScreen
              {...props}
              basket={basket}
              setBasket={setBasket}
            />
          )}
        </Stack.Screen>

        {/* Confirm Order Screen */}
        <Stack.Screen
          name="ConfirmOrder"
          component={ConfirmOrderScreen}
          options={{ headerShown: false }}    //disables the header for this screen
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login1"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Register Screen */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        {/* Contact us Screen */}
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


