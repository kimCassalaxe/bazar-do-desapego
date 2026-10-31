import React from 'react';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Colors } from '@/constants/theme';
import { View } from 'react-native';

type Props = {
  hasIcon?:boolean;
  style?:any;
  onPress:()=> void;
  text:string;
  description:string;
};
export default function BtnCardDtProfile(prop: Props){
  return(  
    <TouchableOpacity onPress={prop.onPress} style={styles.bannerCard}>
      <View style={styles.bannerCardValueBox}>
        {prop.hasIcon?<MaterialCommunityIcons name="star" size={16} color={Colors.dark.yellow} />:null}
        <Text style={[styles.bannerCardValue1,prop.style]}>{prop.text}</Text>
      </View>
      <Text style={styles.bannerCardText}>{prop.description}</Text>
    </TouchableOpacity>      
  );
}

const styles = StyleSheet.create({
  bannerCard:{
    fontFamily: 'Roboto',
    display:"flex",
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#343436ff',
    borderRadius: 10,
    margin: 5,
  },bannerCardValueBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerCardValue1:{
    fontSize: 20,
    fontWeight: 'bold',
    color:"#fff",
    textAlign:'center',
  },
  bannerCardText:{
    color:"#fff",
    fontSize: 12,
  },
});