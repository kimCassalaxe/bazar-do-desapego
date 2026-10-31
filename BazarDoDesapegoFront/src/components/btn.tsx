import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Colors } from '@/constants/theme';

type Props = {
  icon?:any;
  iconSize?:any;
  iconColor?:any;
  hasIcon:boolean;
  onPress:()=> void;
  message:string;
  isActive?:boolean;
  style?:{}
  styleText?:{}
};
export default function Btn(prop: Props){
  return(
    <TouchableOpacity disabled={prop.isActive} onPress={prop.onPress} style={[styles.btn,prop.style]}>
      <Text style={[styles.btnText,prop.styleText]}>{prop.message}</Text>
      {!prop.hasIcon?
        <></> :
        <Ionicons name={prop.icon} size={prop.iconSize?prop.iconSize:24} color={prop.iconColor} />
      }
    </TouchableOpacity>      
  );
}

const styles = StyleSheet.create({
  btn:{
    width:"100%",
    display:'flex',
    flexDirection:"row",
    borderRadius:8,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },googleBtn:{
    
    backgroundColor:Colors.dark.backgroundVariable,
  },btnText:{
    fontSize:16,
    textAlign:'center',
    fontWeight: 400,
  },
});