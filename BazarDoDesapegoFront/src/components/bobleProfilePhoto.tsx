import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/theme';

type Props = {
  url:string|undefined;
  profile:string;
  img?:boolean;
  name?:string;
  styleImg?:{},
  style?:{}
};

export default function BobleProfilePhoto(prop: Props){
  return(
    <TouchableOpacity style={{alignItems:'center',gap:5}} >
      <View style={[styles.bannerCertificationBoxProfile, prop.name ? {width:50,height:50,borderWidth: 2,} : null,prop.style]}>
        {!prop.img?<Ionicons name='person' size={80} color={"grey"} />:<Image style={[styles.logoImage,prop.styleImg]} source={{uri:prop.url}}/>}
        { prop.profile === 'true' ? <MaterialCommunityIcons style={styles.inconLogo} name="check-circle" size={16} color="#25d366" /> : null }
      </View>
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
    backgroundColor: Colors.dark.text,
    borderColor: Colors.dark.green,
    justifyContent: 'center',
    alignItems: 'center',
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