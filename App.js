import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Stack = createNativeStackNavigator();

function ServingScreen({ navigation }) {
  const [serving, setServing] = useState(0);

  let checkServ = () => {
    if (serving != "") {
      return serving;
    } else {
      return 1;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruschetta Recipe</Text>
      <Image source={require('./assets/bruschetta.png')} />
      <TextInput placeholder="Enter the Number of Servings" onChangeText={newServing => setServing(newServing)} defaultValue={serving} style={styles.input}></TextInput>
      <Pressable style={styles.button} onPress={() => {
        
        navigation.navigate('Recipe', {
          serving: checkServ(serving),
        });
      }}>
        <Text style={styles.buttonText}>View Recipe</Text>
      </Pressable>
    </View>
  )
}

function RecipeScreen({ route }) {
  const { serving } = route.params;

  return (
    <View style={styles.recipeContainer}>
      <Text style={styles.title}>Bruschetta</Text>

      <Text style={styles.subtitle}>Ingredients</Text>
      <Text style={styles.content}>{JSON.stringify(4 * serving)} plum tomatoes</Text>
      <Text style={styles.content}>{JSON.stringify(6 * serving)} basil leaves</Text>
      <Text style={styles.content}>{JSON.stringify(3 * serving)} garlic cloves, chopped</Text>
      <Text style={styles.content}>{JSON.stringify(3 * serving)} TB olive oil</Text>

      <Text></Text>
      <Text style={styles.subtitle}>Directions</Text>
      <Text style={styles.content}>Combine the ingredients. Add salt to taste. Top french bread slices with mixture</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Healthy Recipes" component={ServingScreen} options={styles.header} />
        <Stack.Screen name="Recipe" component={RecipeScreen} options={styles.recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    headerStyle: {
      backgroundColor: '#f4501c',
    },
    headerTintColor: '#fff',
  },
  recipe: {
    title: '',
    headerStyle: {
      backgroundColor: '#f4501c',
    },
    headerTintColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    paddingBottom: 20,
    textAlign: 'center',
  },
  input: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 30,
    paddingBottom: 30,
    width: 350,
  },
  button: {
    backgroundColor: '#808080',
    height: 35,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 30,
  },
  content: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 50,
    paddingRight: 35,
  },
});
