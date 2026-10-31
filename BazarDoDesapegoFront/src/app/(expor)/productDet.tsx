import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { View,StyleSheet, Text, TouchableOpacity } from 'react-native';

type Prop={
  click:()=>void,

}
export default function ScreenProductDet() {


  return (
    <View style={[styles.container]}>
      <View >
        <Image source={require('@/assets/img/feed3.jpg')}/>
        <Image source={require("@/assets/img/feed1.jpg")}/>
        <TouchableOpacity >
          <Ionicons name="heart-outline" size={21} color={Colors.dark.light}/>
        </TouchableOpacity> 
      </View>
              
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:20,
    borderRadius:10,
    backgroundColor:Colors.dark.backgroundPost,
    boxSizing: 'border-box',
    justifyContent: 'center',
        
  },headerPublication:{
      padding:10,
      backgroundColor:Colors.dark.backgroundPost,
      display:"flex",
      gap:5,
      flexDirection:"row",
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      alignItems:"center",
      justifyContent:"space-between",
  
    },headerPublicationUser:{
      width:50,
      height:50,
      borderRadius:35,
  
    },isOnStatus:{
      width:10,height:10,
      backgroundColor:Colors.dark.green,
      borderRadius:7,
      position:'relative',
      top:15,
      right:16,
  
    },headerPublicationCardTextBox:{
      display:"flex",
      marginLeft:-10,
    },headerPublicationCardTextBoxNameN:{
      fontSize:18,
      color:'#fff',
      fontWeight:500,
      
  
    },headerPublicationCardTextBoxName:{
      gap:5,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start",
  
    },headerPublicationCardTextBoxSub:{
      display:"flex",
      flexDirection:"row",
      alignItems:'center',
      gap:2,
    },headerPublicationCardTextBoxSubPoint:{
      color:"#ffffff",
      fontSize:18,
    },headerPublicationCardTextBoxSubText:{
      color:"#ffffff",
      fontSize:12,
    },headerPublicationCardTextBoxSubTextLocal:{
      color:Colors.dark.yellow,
      textTransform:"capitalize",
    },buttonFollow:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:3,
      backgroundColor:Colors.dark.backgroundLigth,
      borderRadius:10,
      paddingVertical:2,
      paddingHorizontal:6,
    },buttonFollowText:{
      color:"#ffffff",
      fontSize:12,
    },bodyPublication:{
  },imgBodyPublication:{
    width:'100%',
  },ItemImgBodyPublication:{
    width:'100%',
  },descriptionPublication:{
  },lickItemImgBodyPublication:{
    borderRadius:20,
    padding:10,
    backgroundColor:Colors.dark.backgroundLigth,
    position:'absolute',
    top:10,
    right:10,
  },
});
