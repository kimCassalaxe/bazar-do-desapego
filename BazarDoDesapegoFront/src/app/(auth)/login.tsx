import Btn from '@/components/btn';
import Input from '@/components/input';
import { Colors } from '@/constants/theme';
import { useAuth } from '@/context/authContext';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useRouter } from 'expo-router';
import { Route } from 'expo-router/build/Route';
import React, { useEffect, useState } from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native';
export default function ScreenLogin() {
  const [isActive,setIsActive] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {login} = useAuth() ;
  const route = useRouter();


  useEffect(()=>{
    setIsActive(!(email !== '' && password !== ''))
  },[email,password]);
  function hendlerPasswordRecuver(){

  }

  function hendlerLogin(email:string,password:string){
    console.log("estanid")
    if(!email) return;
   ( async()=>{
      const res = await login(email,password);
    })()

  }
  function hendlerRegister(){
    route.push('/(auth)/register');
  }
  function hendlerGoogle(){
    route.replace('/(auth)/register');
  }
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <View style={styles.logoBox}>
        <Image style={styles.logo1} source={require("@/assets/img/logo.png")}/>
      </View>
      <Text style={styles.hTextHeader}>Bem-vindo de volta, Garimpeiro! 👋 </Text>
      <Text style={styles.textHeader}>Entra para continuar a fechar negócios e garimpar os melhores desapegos de Luanda. </Text>
     </View>
     
      <View style={styles.form}>
        <Input 
          label='Telemóvel, E-mail ou @garimpeiro' 
          message='Obrigatório' 
          placeholder='923 000 000 ou @Kamba'
          value={email}
          setValue={(txt)=>{setEmail(txt)}}
          icon={'person-outline'}
        />
        <Input 
          label='Palavra-passe' 
          message='Esqueceste a senha?' 
          isBtn={true}
          placeholder='*****'
          value={password}
          setValue={(txt)=>{setPassword(txt)}}
          onPress={hendlerPasswordRecuver}
          icon={'lock-closed-outline'}
        />
        
        <View style={styles.remember}>  
          <Text style={styles.textInput}>Lembrar neste telemóvel</Text>
        </View>
        <View style={styles.otherWay}>
          <Btn isActive={isActive} hasIcon={true} message='Entrar no Bazar Luanda' onPress={()=>hendlerLogin(email,password)} style={styles.phoneBtn} icon={'log-in-outline'}/>
          <Btn hasIcon={true} message={'Ainda não tens conta? Criar Conta'} styleText={styles.creatBtnText} onPress={hendlerRegister} style={styles.googleBtn} icon={'create-outline'} iconColor={Colors.dark.yellow}/>
        </View>
        <View style={styles.otherWay}>
        <Btn hasIcon={true} message={'Continuar com a conta Google'} styleText={styles.googlebtnText} onPress={hendlerGoogle} style={styles.googleBtn} icon={'logo-google'} iconColor={Colors.dark.yellow}/>
        </View>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:Colors.dark.background,
  },header:{
    marginTop:40,
    width:"100%",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
  
  },logoBox:{
    width:"50%",
    height:40,
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
  },logo1:{
    width:"100%",
    height:"100%",
  },hTextHeader:{
    marginVertical:30,
    padding:10,
    fontSize:22,
    textAlign:'center',
    fontWeight: 700,
    color:Colors.dark.text,
  },textHeader:{
    width:'100%',
    marginVertical:20,
    paddingHorizontal:30,
    fontWeight: 300,
    textAlign:'center',
    color:Colors.dark.text,
  },otherWay:{
    marginVertical:10,
    width:"100%",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },btn:{
    width:"100%",
    display:'flex',
    flexDirection:"row",
    borderRadius:8,
    padding:10,

  },googleBtn:{
    
    backgroundColor:Colors.dark.backgroundVariable,
  },creatBtnText:{
    color:Colors.dark.yellow,
  },googlebtnText:{
    color:Colors.dark.text,
  },phoneBtn:{
    backgroundColor:Colors.dark.yellow,

  },inLineText:{
    padding:10,
    fontSize:13,
    textAlign:'center',
    fontWeight: 500,
    textTransform:'uppercase',
    opacity:.5,
    color:Colors.dark.text,
  },form:{
    padding:10,

  },
  remember:{},
  textInput:{
    opacity:.7,
    color:Colors.dark.text,
   fontSize:13,
  }
  
  
});
