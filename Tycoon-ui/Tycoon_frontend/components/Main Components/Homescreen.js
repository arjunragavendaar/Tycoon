import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,Icon, ScrollView } from 'react-native';
export default function HomeScreen({route, navigation: { navigate } }){
    
    return (
        <View style={styles.container}>
            
        <Text>Hello</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555555'
       
      }
  });