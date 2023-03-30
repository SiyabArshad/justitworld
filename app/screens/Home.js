import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import colors from "../config/colors"
const wid=Dimensions.get("screen").width
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
export default function Home({navigation}) {
  return (
    <ImageBackground style={styles.home} resizeMode='cover' source={require("../../assets/images/main.png")}>
          <View style={styles.parbtn}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("curi")}
            style={styles.btn}>
              <Text style={styles.btntext}>First Time{'\n'} User</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("login")}
            style={[styles.btn,{marginLeft:10}]}>
              <Text style={styles.btntext}>Existing {'\n'} User</Text>
            </TouchableOpacity>
          </View>
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
home:{
  flex:1,
  height:"100%",
  width:"100%"
}
,parbtn:{
  position:"absolute",
  width:"100%",
  top:hp("74%"),
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center"
},
btn:{
  backgroundColor:colors.yellow,
  paddingVertical:20,
  paddingHorizontal:25,
  marginHorizontal:5,
  borderRadius:5,
 },
btntext:{
  textAlign:"center",
  color:"black",
  fontWeight:"bold",
  fontSize:17
}
})