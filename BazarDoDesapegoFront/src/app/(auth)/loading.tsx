import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';

type Prop={
  message:string,
}
export default function Loading({ message = "A carregar.." }: Prop) {

  return (
    <View style={styles.container}>
      <View >
        <View style={styles.imgBox}>

          <Image style={styles.logo} source={require('@/assets/img/logo.png')}/>
        </View>
        <ActivityIndicator size="large" color={Colors.dark.backgroundGreen} />
        {message && (
          <Text style={styles.texto}>{message}</Text>
        )}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.dark.background,
  },imgBox:{
    width:200,
    marginBottom:20,
  },logo:{
    width:200,
    height:50,
  },texto: {
    marginTop: 12,
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
    textAlign:'center',
  },

  
  
});
