import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,Icon,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signup from './Signup.js';
import Home from './Home.js';
import { firebaseConfig } from '../Dbconfiguration/dbconnect';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Signin({ navigation: { navigate } }){

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const [loginemail, setEmail] = useState('');
    const [loginpassword, setPassword] = useState('');

    

  function signin(){
    
    signInWithEmailAndPassword(auth, loginemail, loginpassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Alert.alert("Signed In Successfully");
    navigate('Home');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
    return(
        <View style={styles.container}>
        {/* <Text>Tycoon</Text> */}
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Email."
            placeholderTextColor="#afafaf"
            onChangeText={(loginemail) => setEmail(loginemail)}
          />  
        </View>
       <View>
  
       </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Password."
            placeholderTextColor="#afafaf"
            secureTextEntry={true}
            onChangeText={(loginpassword) => setPassword(loginpassword)}
          />
        </View>
  
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}  onPress={signin}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.loginText}  onPress={()=>navigate('Signup')}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputView:{
      width:300,
      height:50,
      borderColor:'#444444',
      borderWidth:1,
      borderRadius:20,
      padding:10,
      backgroundColor:'#444444',
      marginBottom:30
    },
    textInput:{
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'left',
      color:'#fff',
      
    },
    loginBtn:{
      backgroundColor:'#3c3ea3',
      width:140,
      height:40,
      borderRadius:20
    },
    loginText:{
      textAlign:'center',
      color:'#fff',
      padding:10
    },
    signupBtn:{
        borderColor:'#3c3ea3',
        borderWidth:2,
        width:140,
        height:45,
        borderRadius:20,
        marginTop:30
    }
  });
  