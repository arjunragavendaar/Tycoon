import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import WebView from 'react-native-webview';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,Icon } from 'react-native';

export default function Analytics({route, navigation: { navigate } }){
    return (
        <WebView source={{ uri: 'https://app.powerbi.com/home?noSignUpCheck=1' }} />
    )
}