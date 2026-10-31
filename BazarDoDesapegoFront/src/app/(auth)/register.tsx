import Btn from '@/components/btn';
import Input from '@/components/input';
import { Colors } from '@/constants/theme';
import { RegisterData } from '@/constants/types';
import { useAuth } from '@/context/authContext';
import { Ionicons } from '@expo/vector-icons';
import { AxiosError } from 'axios';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export default function ScreenRegister(){
  const [name,setName] = useState('');
  const [nickname,setNickName] = useState('');
  const [password,setPassword] = useState('');
  const [telephone,setTelephone] = useState('');
  const [city,setCity] = useState('');
  const [email,setEmail] = useState('');
  const { register, allUser,users} = useAuth();
  const route =  useRouter();

  const [isName,setIsName]= useState<boolean|null >(null);
  const [isPassword,setIsPassword]= useState<boolean|null >(null);
  const [isTelephone,setIsTelephone]= useState<boolean|null >(null);
  const [isCity,setIsCity]= useState<boolean|null >(null);
  const [isEmail,setIsEmail]= useState<boolean|null >(null);

  function hendlerGoCreate(name:string,password:string,email:string,city:string){
    try {
      
   
    if(isName && isPassword &&  isCity && isEmail){
        console.log('estou dentro')
      const user:RegisterData= {

        username:name,
        city:city || "Luanda",
        password:password,
        display_name:`@${name}`,
        email:email,
      } 
      const u:RegisterData = {
        "username":"Tella Durao",
        "email":"td@teste.com", 
        "password":"1243", 
        "display_name":"@Tella_durao", 
        "city":"Cacuaco" 
      };
      (async()=>{
        const res = await register(user);
        
      })();
    }
    

 } catch (error) {
      console.log(`luad ${AxiosError}`);
    }

  }

  function validateEmail(email:string){
    const ema= email.trim()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!ema){
      console.log("nome incorreto");
      setIsEmail(false)
    }
    if(!emailRegex.test(ema)){
      console.log("nome incorreto");
      setIsEmail(false);
    }else  setIsEmail(true);
  }
  function validateName(name:string){
    const tratedName = name.trim();
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    const test = nameRegex.test(tratedName);
    if(!tratedName || !test){setIsName(false)}
    else{setIsName(true)}
  }
  function validateCity(city:string){
    const tratedCity = city.trim()
    if(!tratedCity ){
      setIsCity(false);
    }else{
      setIsCity(true);
    }
    
  

  }
  function validatePassword(password:string){
    let mens = "";
    const regexLen = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-0-9]{8,20}$/;
    if(!password ){setIsPassword(false)}
    if(regexLen.test(password)){
      setIsPassword(false)
    }else setIsPassword(true);
  }
  function validatephoneNumber(telephone:string){
    const phone  = telephone.trim()
    const emailRegex = /^[0-9]{9}$/;
    if(!phone){ setIsTelephone(false)}
    if( !emailRegex.test(phone)){
      setIsTelephone(false);
    }else{
      setIsTelephone(true);
    }
  }


  function hendlerGoBlack(){
    route.back();
  }
  useEffect(()=>{(async()=>{
    validateName(name)
    validatePassword(password)
    validateCity(city)
    validateEmail(email);
  })();
  },[]);

    


  return (
   <ScrollView style={styles.container}>
     <View style={styles.header}>
      <View style={styles.logoBox}>
        <Image style={styles.logo1} source={require("@/assets/img/logo.png")}/>
      </View>
      <Text style={styles.hTextHeader}>Bem-vindo de volta, Garimpeiro! </Text>
      <Text style={styles.textHeader}>O maior marketplace social de desapegos de Angola. Encontra pechinchas e vende o que já não usas em Luanda.</Text>
     </View>
     
      <View style={styles.form}>
        <Input borderCoolor={isName === true? {style:{borderColor:Colors.dark.green}}:{style:{borderColor:Colors.dark.red}}} label='Nome Completo' icon={'id-card-outline'} message='' placeholder='Ana Carla' value={name}  setValue={(txt)=>setName(txt)}/>
        <Input label='E-mail' message='Obrigatório' placeholder='Ana Carla' value={email}  setValue={(txt)=>setEmail(txt)}/>
        
        <Input label='city' message='' icon={'location-outline'} placeholder='Luanda' value={city}  setValue={(txt)=>setCity(txt)}/>
        <Input label='Palavra passe' message='Use senha segura' placeholder='wd2fgesdfgtr' value={password}  setValue={(txt)=>setPassword(txt)}/>
      
        <View style={styles.otherWay}>
          <Btn hasIcon={true} message={'Criar Conta'} onPress={()=>{hendlerGoCreate(name,password,email,city )}} style={styles.phoneBtn}  icon={"create-outline"}/>
          <Btn hasIcon={true} message={'Entrar no Bazar Luanda'} onPress={hendlerGoBlack} styleText={styles.creatBtnText} style={styles.googleBtn} icon={"log-in-outline"} iconColor={Colors.dark.yellow}/>
        </View>
        <View style={styles.otherWay}>
        <Btn hasIcon={true} message={'Criar conta com Google'} styleText={styles.googlebtnText} onPress={()=>{}} style={styles.googleBtn} icon={"logo-google"} iconColor={Colors.dark.yellow}/>
        </View>
        
      </View>

    </ScrollView>
  );}

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

  },creatBtnText:{
    color:Colors.dark.yellow,
  },googleBtn:{
    
    backgroundColor:Colors.dark.backgroundVariable,
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
    paddingHorizontal:10,
    paddingTop:30,
    paddingBottom:60,
  },InputBox:{
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
    borderRadius:40,
    paddingHorizontal:10,
    color:Colors.dark.text,
  },In:{
    width:"100%",
    color:Colors.dark.text,
  },remember:{

  }
});