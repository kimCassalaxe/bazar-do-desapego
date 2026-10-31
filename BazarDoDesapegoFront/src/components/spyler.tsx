import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '@/constants/theme';

type Props = {
  icon?:any;
  iconColor?:any;
  message:string;
  isActive?:boolean;
  style?:{}
  styleText?:{}
};
export default function Spyler(prop: Props){
  return(
    <View style={[styles.container,prop.style]}>
      <Feather name={prop.icon} size={16} color={prop.iconColor} />
      <Text style={[styles.btnText,prop.styleText]}>{prop.message}</Text>
    </View>      
  );
}

const styles = StyleSheet.create({
  container:{
    width:'auto',
    backgroundColor:Colors.dark.gray,
    borderRadius:20,
    paddingVertical:8,
    display:'flex',
    flexDirection:"row",

    padding:10,
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },btnText:{
    fontSize:10,
    textAlign:'center',
    fontWeight: 700,
    color:Colors.dark.text,

  },
});