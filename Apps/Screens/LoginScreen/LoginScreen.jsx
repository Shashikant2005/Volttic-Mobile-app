import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './utils/Colors'
import { Link, useRouter } from 'expo-router'

const LoginScreen = () => {
  const router = useRouter();
  const handlelogin = ()=>{
router.replace("/(auth)/sign-in")
  }
  return (
    <View style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      marginTop:60
    }}>
      <Image style={styles.logoImage} source={require('./../../../assets/images/slogan.png')} />
      <Image style={styles.bgImage} source={require("./../../../assets/images/car1.png")} />
     
      <View style={{padding:20,}}>
        <Text style={styles.heading}>Your Ultimate EV charging Station Finder APP</Text>
        <Text style={styles.desc} >Find EV charging Station near you plan trip and so much more in just one Click</Text>
        
        <TouchableOpacity onPress={()=>handlelogin()} style={styles.button}>
           <Text style={{
            color:Colors.WHITE,
            textAlign:"center",
            fontFamily:"Outfit-regular",
            fontSize:17
           }}>Login</Text>
         </TouchableOpacity>
      
         
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  logoImage:{
    width:280,
    height:40,
    objectFit:"contain",
    marginBottom:10
  },
  bgImage:{
    width:"100%",
    height:260,
    marginTop:25,
    objectFit:"contain",
  },
  heading:{
    fontSize:25,
    fontFamily:"Outfit-bold",
    textAlign:"center",
    marginTop:20
  },
  desc:{
    fontSize:17,
    fontFamily:"Outfit-regular",
    textAlign:"center",
    marginTop:15,
    color:Colors.GRAY
   
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    display:"flex",
    borderRadius:99,
    marginTop:60
  }
})

export default LoginScreen