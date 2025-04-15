/* App V3

R.Maunick
01/02/2025
20:06

*/

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';          //retrieve splash screen
import MenuScreen from './screens/MenuScreen';              //retrieve menu screen
import OrderFormScreen from './screens/OrderFormScreen';    //retrieve order-form screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="OrderForm" component={OrderFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

