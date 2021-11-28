import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,Icon } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { firebaseConfig } from './Dbconfiguration/dbconnect';
import { initializeApp } from 'firebase/app';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import Home from './components/Home';
import Timeline from './components/Main Components/Timeline.js';
import Profile from './components/Main Components/Profile.js';
import HomeScreen from './components/Main Components/Homescreen.js';
import CreatePost from './components/Main Components/CreatePost.js';
import Analytics from './components/Main Components/Analytics.js';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name="Timeline" component={Timeline}/>
    <Stack.Screen name="CreatePost" component={CreatePost}/>
    <Stack.Screen name="Profile" component={Profile}/>
    <Stack.Screen name="Analytics" component={Analytics}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

