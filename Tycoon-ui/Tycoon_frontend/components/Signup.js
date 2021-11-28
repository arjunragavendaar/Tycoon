import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,Icon } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Signin from './Signin.js';
export default function Signup({ navigation: { navigate } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  function signup(){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Alert.alert("Successfully signed up")
    navigate('Signin');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    console.log(error.code);
    // ..
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
            onChangeText={(email) => setEmail(email)}
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
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password."
            placeholderTextColor="#afafaf"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}  onPress={signup}>Sign Up</Text>
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
    }
  });
  