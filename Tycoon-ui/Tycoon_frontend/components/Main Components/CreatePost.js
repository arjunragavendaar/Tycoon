
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView, Alert,Icon ,Image,ImageBackground} from 'react-native';
import Timeline from './Timeline.js';


export default function  CreatePost({route,navigation: { navigate } }){
    const[hashtag,setHashtag]=useState('');
    const[posttext,setPosttext]=useState('');
    const[imageuri,setUri]=useState('https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg');
    const image = { uri: imageuri };

    function postdata(){
      let postObj={};
      postObj.email=route.params.session.params.session.email;
      postObj.uid=route.params.session.params.session.uid;
      postObj.hashtag=hashtag;
      postObj.posttext=posttext;
      postObj.image=imageuri;
      postObj.time=new Date();
      postObj.like=false;
      postObj.likedby=[];
      console.log(postObj);
       axios.post('http://192.168.1.5:8000/createpost',postObj).then((response)=>{
             if(response){
               console.log(response);
               Alert.alert("Successfully Posted");
               navigate('Timeline');
             }
       })
       .catch(error => console.log(error))
    }

   return(
    <View style={styles.container}>
        {/* <Text>Tycoon</Text> */}
        <StatusBar style="auto" />

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="let's visualize (uri)"
            placeholderTextColor="#afafaf"
            onChangeText={(imageuri) => setUri(imageuri)}
          />
        </View>
        <View style={ styles.preview1 } >

        <ImageBackground source={image} style={ styles.preview }  />
        
        </View>
        <View style={styles.inputView1}>
          <TextInput
            style={styles.textInput}
            placeholder="let everyone know ur thoughts!!"
            placeholderTextColor="#afafaf"
            onChangeText={(posttext) => setPosttext(posttext)}
          />
        </View>
        
        <View style={styles.inputView3}>
          <TextInput
            style={styles.textInput}
            placeholder="#Hashtag"
            placeholderTextColor="#afafaf"
            onChangeText={(hashtag) => setHashtag(hashtag)}
          />  
        </View>
       <View>
  
       </View>
        

       

        <TouchableOpacity style={styles.postBtn}>
          <Text style={styles.loginText}  onPress={postdata}>Post</Text>
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
  preview:{
      borderColor:'#3c3ea3',
      borderRadius:20,
      width:300,
      height:190
  },
  preview1:{
    borderColor:'#3c3ea3',
    borderWidth:2,
    borderRadius:15,
    width:320,
    height:210
},
  inputView1:{
    width:300,
    height:120,
    borderColor:'#444444',
    borderWidth:1,
    borderRadius:20,
    padding:10,
    backgroundColor:'#444444',
    marginTop:20
  },
  inputView3:{
    width:300,
    height:50,
    borderColor:'#444444',
    borderWidth:1,
    borderRadius:20,
    padding:10,
    backgroundColor:'#444444',
    marginTop:40
  },
  textInput:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'left',
    color:'#fff',
    
  },
  postBtn:{
      borderColor:'#3c3ea3',
      borderWidth:2,
      width:140,
      height:45,
      borderRadius:20,
      marginTop:30
  },
  loginText:{
    textAlign:'center',
    color:'#fff',
    padding:10
  }
});
