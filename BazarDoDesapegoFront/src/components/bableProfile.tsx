import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/theme';

type Props = {
  url: () => any;
  isFocus:boolean;
  onPress?: () => void;
  profile:string;
  img?:boolean;
  name?:string;
  styleImg?:{},
  style?:{}
};
export default function BobleProfile(prop: Props){
  return(
    <TouchableOpacity onPress={prop.onPress} style={{alignItems:'center',gap:5}} >
      <View style={[styles.bannerCertificationBoxProfile, prop.isFocus?styles.isFocus:styles.isNotFocus, prop.name ? {width:50,height:50,borderWidth: 2,} : null,prop.style]}>
        <Image style={[styles.logoImage,prop.styleImg]} source={prop.url()}/>
        { prop.profile === 'true' ? <MaterialCommunityIcons style={styles.inconLogo} name="check-circle" size={16} color="#25d366" /> : null }
      </View>
      { prop.name ? <Text style={{ color: 'white', fontSize: 12 }}>{prop.name}</Text> : null }
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    bannerCertificationBoxProfile:{
    width:80,
    height:80,
    borderRadius:50,
    overflow:'hidden',
    borderWidth: 3,
    borderColor: Colors.dark.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },isFocus:{
    borderColor: Colors.dark.yellow,
  },isNotFocus:{
    borderColor: Colors.dark.text,
  },
  logoImage:{
      width:'100%',
      height:'100%',
      transform: [{ scale: 1.4},{translateY:10}],
      resizeMode:'cover',
  },
  inconLogo:{
    position:'absolute',
    bottom:10,
    right:0,
  },
});