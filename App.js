import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
//Components
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {

  return (
        <NavigationContainer> 
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});
