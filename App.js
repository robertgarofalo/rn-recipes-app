import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
//Components
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

const BackButton = () => {
    const navigation = useNavigation();
    return (
  <Pressable onPress={() => navigation.goBack()}>
    <Image style={styles.back} source={require('./assets/back.png')} />
  </Pressable>
)
    }

export default function App() {

  return (
        <NavigationContainer> 
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>
            <Stack.Screen name="Splash" component={Splash} 
            options={{ headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} 
            options={{ headerLeft: null, gestureEnabled: false}}
            />
            <Stack.Screen name="Search" component={Search} 
            options={{ headerLeft: () => <BackButton />}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
back: {
  width: 24,
  height: 24,
  margin: 16,
},
});
