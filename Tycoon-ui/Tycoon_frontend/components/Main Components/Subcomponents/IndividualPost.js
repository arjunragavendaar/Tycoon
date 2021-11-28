import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView, Alert,Icon ,Image} from 'react-native';
export default function IndividualPost(props){
     const[likedata,setLikedata]=useState(false);
  function likethepost(){
    if(likedata){
      Alert.alert("Unliked the post");
      setLikedata(false);
    }else{
      Alert.alert("Liked the post");
      setLikedata(true);
    }
   
  }

  function sharepost(){
    Alert.alert("shared!!!");
  }
    return(
    <View style={ styles.preview1 }>
        <Text>Individual Component</Text>
        <View style={styles.profile}>
          <Text style={styles.profileText}>AR</Text>
         
        </View>
        <Text style={styles.nametext}>@{props.data.email.split('@')[0]} <MaterialCommunityIcons style={styles.available} name="check-circle" color='#3c3ea3' /></Text>
        
        <Text style={styles.desctext}>{props.data.posttext}</Text>
        <View>
          <Image source ={{uri:props.data.image}} style={styles.preview}></Image>
        </View>

        <Text style={styles.hashtag}>{props.data.hashtag}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={likethepost}
          style={styles.touchableOpacityStyle}>
        <MaterialCommunityIcons  name="heart-multiple-outline" style={likedata?styles.like:styles.unlike}  />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.2}
          onPress={sharepost}
          style={styles.touchableOpacityStyle}>
        <MaterialCommunityIcons  name="cloud-check" style={styles.share} color='#fff' />
        </TouchableOpacity>
    </View>
    );
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
    preview1:{
      //borderColor:'#fff',
      borderWidth:3,
      borderRadius:15,
      width:390,
      height:490,
      backgroundColor:'#000000',
      marginBottom:20,
      elevation:15,
      shadowColor: '#ffffff',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.9,

  },
    profileText:{
      textAlign:'center',
      color:'#fff',
      fontSize:30,
      paddingTop:10,
      fontWeight:"bold"
    },
    profile:{
      alignItems: 'center',
      borderColor:'#3c3ea3',
      borderWidth:1.2,
      height:65,
      width:65,
      marginBottom:20,
      marginLeft:20,
      backgroundColor:'#3c3ea3',
      borderRadius:40,
      elevation:10,
      shadowColor: '#ffffff',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.9,
    },
    available:{
      fontSize:20,
      
      
    },
    nametext:{
      color:'#fff',
      marginTop:-70,
      marginLeft:94
    },
    preview:{
      borderColor:'#3c3ea3',
      borderRadius:20,
      width:370,
      height:190,
      marginLeft:10,
      marginTop:40

   },
   desctext:{
     color:'#fff',
     marginLeft:30,
     marginTop:50
   },
   hashtag:{
     color:'#3c3ea3',
     marginTop:25,
     marginLeft:20
   },
   unlike:{
     marginTop:50,
     marginLeft:30,
     fontSize:30,
     color:'#fff',
     //backgroundColor:'#fff',
     width:30
   },
   like:{
    marginTop:50,
    marginLeft:30,
    fontSize:30,
    color:'#3c3ea3'
   },
   share:{
    marginTop:40,
    paddingLeft:150,
    fontSize:30
   }
  });