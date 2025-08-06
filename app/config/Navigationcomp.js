import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions,Linking } from 'react-native'
import React from 'react'
import colors from "./colors"
const wid=Dimensions.get("screen").width
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen"
import Iconsio from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Navigationcomp({navigation,back}) {
  return (
    <View style={{display:"flex",flexDirection:"row",
    justifyContent:"space-between",paddingTop:hp(5),
    paddingHorizontal:wp(5),
    position:"absolute",
    width:"100%"
    
    }}>
        <TouchableOpacity onPress={()=>navigation.navigate(back)}>
        <Iconsio name="arrow-back" size={24} color={colors.yellow} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("home")}>
        <FontAwesome name="home" size={24} color={colors.yellow} />
        </TouchableOpacity>
      </View>
  )
}