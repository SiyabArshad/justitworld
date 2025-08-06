import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import colors from "../config/colors"
const wid=Dimensions.get("screen").width
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import Navigationcomp from '../config/Navigationcomp'
export default function Career({navigation}) {
  return (
    <ImageBackground resizeMode='cover' style={styles.home} source={require("../../assets/images/career.png")}>
     <Navigationcomp navigation={navigation} back={"projects"}/>
    <View style={styles.parbtn}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("mentore")}
      style={styles.btn}>
        <Text style={styles.btntext}>Next</Text>
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
    top:hp("90%"),
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  btn:{
    backgroundColor:colors.yellow,
    paddingVertical:6,
    paddingHorizontal:11,
    marginHorizontal:5,
    borderRadius:25,
    width:"65%",
    borderWidth:8,
    borderColor:colors.blue
   },
  btntext:{
    textAlign:"center",
    color:"black",
    fontWeight:"bold",
    fontSize:17
  }
  })