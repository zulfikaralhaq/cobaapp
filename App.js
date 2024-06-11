import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import login from './assets/components/Login';
import beranda from './assets/components/Beranda';
import kalkulator from './assets/components/Kalkulator';
import dzikir from './assets/components/Dzikir';
import galeri from './assets/components/Galeri';
import kontak from './assets/components/Kontak';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2196F3', // Change this to your desired background color
      },
      headerTintColor: '#fff', // Change this to your desired text color
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="beranda" component={beranda} />
      <Stack.Screen name="kalkulator" component={kalkulator} />
      <Stack.Screen name="dzikir" component={dzikir} />
      <Stack.Screen name="galeri" component={galeri} />
      <Stack.Screen name="kontak" component={kontak} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
