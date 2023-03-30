import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions,Linking } from 'react-native'
import React from 'react'
import colors from "../config/colors"
const wid=Dimensions.get("screen").width
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import Navigationcomp from '../config/Navigationcomp';
export default function Signup({navigation}) {
  return (
    <ImageBackground resizeMode='cover' style={styles.home} source={require("../../assets/images/course.png")}>
       <Navigationcomp navigation={navigation} back={"cyber"}/>
    <View style={styles.parbtn}>
      <LinearGradient colors={['black', colors.blue]} style={styles.btn}>
    <TouchableOpacity onPress={()=>Linking.openURL("https://justitworld.com/course-catalog/")}>
    <Text style={styles.btntext}>
    View Courses
  </Text>
    </TouchableOpacity>
</LinearGradient>

    </View>
</ImageBackground>
  )
}
const styles=StyleSheet.create({
  home:{
    flex:1
  }
  ,parbtn:{
    position:"absolute",
    width:"100%",
    top:hp("84%"),
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  btn:{
    width:"60%",
    backgroundColor:colors.blue,
    paddingVertical:10,
    paddingHorizontal:25,
    marginHorizontal:5,
    borderRadius:10,
   },
  btntext:{
    textAlign:"center",
    color:"white",
    fontWeight:"bold",
    fontSize:17
  }
  })