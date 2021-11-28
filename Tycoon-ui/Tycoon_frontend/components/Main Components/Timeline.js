import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView, Alert,Icon ,Image,ActivityIndicator} from 'react-native';
import CreatePost from './CreatePost.js';
import IndividualPost from './Subcomponents/IndividualPost.js';
import axios from 'axios';
export default function Timeline({route, navigation: { navigate } }){
    
    function createnewpost(){
        setLoading(false);
        navigate('CreatePost',{session:route});
    }

    const [isLoading, setLoading] = useState(false);
    const [timelinedata, setTimelinedata] = useState([]);
	   
    function getdata(){
      axios.get('http://192.168.1.5:8000/fetchposts').then(function(response){
        setLoading(true);
        setTimelinedata(response.data);
      })
    }
     
     function rendertimeline(){
        let timeline=[];
       Object.keys(timelinedata).filter(function(value,key){
         timeline.push(<IndividualPost data={timelinedata[value]} />)
       })
       return timeline;
      
    
       
     }

  if(!isLoading){
    getdata();
    return(
      <View style={{flex:1,padding:20,justifyContent: "center"}}>
      <ActivityIndicator size="large" color="#0000ff"/>
      </View>
      );
  }
    return isLoading && (
        <View style={styles.container}>
            
         <ScrollView >
           {
            rendertimeline()
           }
         
         
         
        </ScrollView>          
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={createnewpost}
          style={styles.touchableOpacityStyle}>
          {/* <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={{
              uri:
                'https://image.shutterstock.com/image-vector/write-text-create-edit-document-260nw-1696455538.jpg',
            }}
            // For local image
            // source={require('C:/Users/amirthaaDesktop\Tycoon_frontend\components\Main Components\images\write.png')}
            style={styles.floatingButtonStyle}
          /> */}
           <MaterialCommunityIcons style={styles.posticon} name="pencil-outline" color='#3c3ea3' />
        </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
       
      },
      touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        backgroundColor:'black',
        borderRadius:50,
        elevation:15,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.9,
      },
      posticon:{
        fontSize:45,
        marginLeft:0,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#3c3ea3',
        elevation:10
        
      }
  });