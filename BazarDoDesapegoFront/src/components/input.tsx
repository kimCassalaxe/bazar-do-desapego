import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/theme';
import Btn from './btn';

type Props = {
  icon?:any;
  onPress?:()=> void;
  setValue:(txt:string)=> void;
  value:string;
  message:string;
  label:string;
  placeholder:string;
  style?:{}
  borderCoolor?:{}
  styleText?:{};
  isBtn?: boolean;
  isPassword?: boolean;

};
export default function Input(prop: Props){
  return(
    <View style={styles.InputBox}>
      <View style={styles.labelInput}>  
        <Text style={styles.textInput}>{prop.label}</Text>
        {
          !prop.isBtn?
          <Text style={styles.textInput}>{prop.message}</Text>:
          <Btn hasIcon={false}  message={prop.message} onPress={()=>{prop.onPress}}style={styles.btn} styleText={styles.TextBtn}/>

        }
      </View>
      <View style={styles.Input}>  
        <Ionicons name={prop.icon} size={16} color={Colors.dark.textSecondary}/>
        <TextInput style={styles.In} value={prop.value}  onChangeText={prop.setValue} placeholder={prop.placeholder}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InputBox:{
    width:"100%",

  },labelInput:{
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:"row",


  },textInput:{
    opacity:.7,
    color:Colors.dark.text,
    fontSize:13,
  },Input:{
    marginTop:5,
    marginBottom:20,
    backgroundColor:Colors.dark.backgroundVariable,
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:'center',
    gap:5,
    borderRadius:10,
    paddingHorizontal:10,
    color:Colors.dark.text,
    borderColor:'transparent',
    borderStyle:'solid',
    borderWidth:1,
  },In:{
    width:"100%",
    color:Colors.dark.text,
  },
  btn:{
    padding:0,
    margin:0,
    backgroundColor:'transparent',

  },
  TextBtn:{
    opacity:.7,
    color:Colors.dark.text,
    fontSize:13
  }
});