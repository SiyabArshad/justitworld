import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import colors from "../config/colors"
const wid=Dimensions.get("screen").width
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import Navigationcomp from '../config/Navigationcomp'
export default function Scrum({navigation}) {
  return (
    <ImageBackground resizeMode='cover' style={styles.home} source={require("../../assets/images/scrum.png")}>
       <Navigationcomp navigation={navigation} back={"testing"}/>
          <View style={styles.parbtn}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("ux")}
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
  top:hp("55%"),
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center"
},
btn:{
  backgroundColor:colors.yellow,
  paddingVertical:10,
  paddingHorizontal:15,
  marginHorizontal:5,
  borderRadius:25,
  width:"40%"
 },
btntext:{
  textAlign:"center",
  color:"black",
  fontWeight:"bold",
  fontSize:17
}
})