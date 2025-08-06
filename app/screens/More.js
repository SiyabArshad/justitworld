import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import colors from "../config/colors"
const wid=Dimensions.get("screen").width
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import Navigationcomp from '../config/Navigationcomp'
export default function More({navigation}) {
  
  return (
    <ImageBackground resizeMode='cover' style={styles.home} source={require("../../assets/images/more.png")}>
     <Navigationcomp navigation={navigation} back={"mentore"}/>
    <View style={styles.parbtn}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("bas")}
      style={styles.btn}>
        <Text style={styles.btntext}>Choose Course</Text>
      </TouchableOpacity>
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
    top:hp("63%"),
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  btn:{
    backgroundColor:colors.yellow,
    paddingVertical:15,
    paddingHorizontal:15,
    marginHorizontal:5,
    borderRadius:10,
    width:"60%"
   },
  btntext:{
    textAlign:"center",
    color:"black",
    fontWeight:"bold",
    fontSize:19
  }
  })