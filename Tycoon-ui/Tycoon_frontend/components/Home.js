import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { FloatingAction } from "react-native-floating-action";
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,Button } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeScreen from './Main Components/Homescreen.js';
import Profile from './Main Components/Profile.js';
import Timeline from './Main Components/Timeline.js';
import Analytics from './Main Components/Analytics.js';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
       <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Timeline"
          component={Timeline}
          options={{
            tabBarLabel: 'Posts',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="database-refresh" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="barcode" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

export default function Home({ navigation: { navigate } }){
    const[homesession,setSession]=useState('');
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;
    setSession(user);
    } else {
    
    }
    });

    if(!homesession){
        return(
          <View style={{flex:1,paddingLeft:160,justifyContent: "center",backgroundColor:'#3f7afb',paddingTop:-20}}>
         <Text>Loading....</Text>
          </View>
          );
      } 
    return(
        <View style={styles.container}>
           <TouchableOpacity style={styles.signupBtn}>
           <Text style={styles.loginText}  onPress={()=>navigate('HomeScreen',{session:homesession})}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn}>
           <Text style={styles.loginText}  onPress={()=>navigate('Timeline',{session:homesession})}>Timeline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn}>
           <Text style={styles.loginText}  onPress={()=>navigate('Profile',{session:homesession})}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn}>
           <Text style={styles.loginText}  onPress={()=>navigate('Analytics',{session:homesession})}>Analytics</Text>
          </TouchableOpacity>
            {/* <MyTabs/> */}
            {/* <ActionButton buttonColor="rgba(231,76,60,1)">
          
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Add to Watch Later"
            onPress={() => alert('Added to watch later')}>
            <Icon
              name="md-eye"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Add to Favourite"
            onPress={() => alert('Added to favourite')}>
            <Icon
              name="md-star"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Share"
            onPress={() => alert('Share Post')}>
            <Icon
              name="md-share-alt"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
        </ActionButton>
             */}
            
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000'
     
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
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