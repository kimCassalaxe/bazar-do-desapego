import BobleProfile from '@/components/bableProfile';
import BobleProfilePhoto from '@/components/bobleProfilePhoto';
import Btn from '@/components/btn';
import BtnCardDtProfile from '@/components/btnCardDtProfile';
import Spyler from '@/components/spyler';
import { Colors } from '@/constants/theme';
import { User } from '@/constants/types';
import { useAuth } from '@/context/authContext';
import { allFollowers } from '@/context/followContext';
import { AntDesign, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Try } from 'expo-router/build/views/Try';
import { useEffect, useState } from 'react';
import { Button, ScrollView } from 'react-native';

import { Alert, StyleSheet, Text, View } from 'react-native';



export default function ScreenProfile() {
  const {logout,user} = useAuth();
  const [userOn,setUserOn] = useState<User| null>(null)
  const route = useRouter();
  let avatar= "@/assets/img/user.png";

  useEffect(()=>{
    if(user){
      avatar = user.avatarUrl;
      try {(
        async ()=>{
          const followers = await allFollowers(user.userId);
          if(followers){
            user.followersCount = followers.length
          }
        }
        )()
      } catch (error:any) {
        console.log(error.message)
      }
    }


    

  },[userOn])

function hendlerLogOut(){
    Alert.alert(
      "Terminar Sessão",
      "Certeza que quer Terminar a Sessão? ",
      [
        {
          text:"Cancelar",
          style:'cancel',
        },
        {
          text:"Sair",
          style:'destructive',
          onPress:async()=>{
            try {
              console.log('click')
              await logout();
              route.replace('/(auth)/login');
            } catch (error) {
              console.log(error)
            }
          },
        }
      ]
    )
  
}

  if(user){
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <View style={styles.bannerCertification}>
          <MaterialCommunityIcons name="check-decagram-outline" size={16} color={Colors.dark.green} /> 
          <Text style={styles.bannerCertificationText}>Vendedor destacado</Text>
        </View>
        <View style={styles.bannerDescriptio}>
          <BobleProfilePhoto url={user?.avatarUrl} profile="true" />
          <BtnCardDtProfile text={'14'}  description='Garimpo' style={styles.bannerCardValue} onPress={()=>{}}/>
          <BtnCardDtProfile text={user.followersCount.toString()}  description='Seguidores' onPress={()=>{}}/>
          <BtnCardDtProfile hasIcon={true} text={'4.9'}  description='52 notas'onPress={()=>{}}/>
        </View>
      </View>
      <View style={styles.bannerTexts}>
        <View style={styles.bannerName}>
          <Text style={styles.bannerNameText}>{user?.username}</Text>
          <MaterialCommunityIcons name="check-decagram" size={18} color={Colors.dark.yellow} /> 
        </View>
        <View style={styles.bannerl}>
            <Text style={styles.bannerlArroba}>{`@${user?.username}`}</Text>
            <Text style={styles.point}>•</Text>
            <EvilIcons name="location" size={14} color={Colors.dark.light} />
            <Text style={styles.bannerloc}>{user?.city}</Text>
        </View>
      </View>
      <View style={styles.texts}>
        <Text style={styles.textDes}>Apaixonado por tech e sneakers streetwear em Luanda 🇦🇴 | Desapegos 100% originais e testados | Entrega em mão no Kilamba e Talatona | Respondo rápido no WhatsApp! ⚡</Text>
      </View>

    
    <View style={styles.boxCertification}>
      <AntDesign name="safety-certificate" size={24} color={Colors.dark.green} />
      <Text numberOfLines={1} style={styles.boxCertificationText}>Membro verificado desde 2023 • 0 Reclamações • Envio sempre no mesmo dia</Text>
    </View>
    <View style={styles.boxBtns}>
      <Btn style={styles.boxBtn} iconSize={16} iconColor={Colors.dark.text} styleText={styles.boxBtnText} onPress={()=>{}} hasIcon={true} message='A Seguir' icon={"checkmark"}/>
      <Btn style={styles.boxBtn} iconSize={16} iconColor={Colors.dark.text} styleText={styles.boxBtnText} onPress={()=>{}} hasIcon={true} message='Mensagem' icon={"chatbox-ellipses-outline"}/>
      <Btn style={[styles.boxBtn,styles.boxBtnWhatsApp]} iconSize={16} iconColor={Colors.dark.background} styleText={[styles.boxBtnText,styles.boxBtnTextWhatsApp]} onPress={()=>{}} hasIcon={true} message='WhatsApp' icon={"call-outline"}/>
     </View>
     <View style={styles.boxSpyler}>
      <Spyler iconColor={Colors.dark.yellow} icon={'zap'} message='Responde em < 10 min' />
      <Spyler iconColor={Colors.dark.green}  icon={'truck'} message='Entrega presencial grátis' />
      <Spyler iconColor={Colors.dark.pink}  icon={'refresh-cw'} message='Negociável' />
     </View>
     <View style={styles.boxMenuAticle}>
      <Btn style={styles.boxBtn} iconSize={16} iconColor={Colors.dark.text} styleText={styles.boxBtnText} onPress={()=>{}} hasIcon={true} message={`Arquivos(${8})`} icon={"albums-outline"}/>
      <Btn style={styles.boxBtn} iconSize={16} iconColor={Colors.dark.text} styleText={styles.boxBtnText} onPress={()=>{}} hasIcon={true} message={`Vendidos(${8})`}  icon={"checkmark-circle-outline"}/>
      <Btn style={[styles.boxBtn]} iconSize={16} iconColor={Colors.dark.text} styleText={[styles.boxBtnText]} onPress={()=>{}} hasIcon={true} message={`Avaliações`}  icon={"star-outline"}/>
     </View>
     <View style ={styles.headerCarrossel}>
             <Text style ={styles.categoryHeaderCarrossel}>Pordutos Disponiveis</Text>
      <Spyler iconColor={Colors.dark.text}  icon={'sliders'} message='Mais Recentes' />
    </View>
     <View >
      <Btn style={styles.boxBtn} iconSize={16} iconColor={Colors.dark.text} styleText={styles.boxBtnText} onPress={()=>{}} hasIcon={true} message={`Arquivos(${8})`} icon={"albums-outline"}/>
      <Btn style={styles.boxBtn} iconSize={16} iconColor={Colors.dark.text} styleText={styles.boxBtnText} onPress={()=>{}} hasIcon={true} message={`Vendidos(${8})`}  icon={"checkmark-circle-outline"}/>
      <Btn style={[styles.boxBtn]} iconSize={16} iconColor={Colors.dark.text} styleText={[styles.boxBtnText]} onPress={()=>{}} hasIcon={true} message={`Avaliações`}  icon={"star-outline"}/>
     </View>































    <Btn hasIcon={true} message='Terminar Sessão...' onPress={hendlerLogOut} style={styles.btn} icon={"log-out-outline"}/>
    
  </ScrollView >
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:"100%",
    boxSizing: 'border-box',
    backgroundColor: '#111111',
    justifyContent:'center',
  },banner: {
    width: '100%',
    height: 180,
    backgroundColor: '#494949ff',

    //backgroundImage: 'url(https://example.com/banner.jpg)',
  },bannerCertification:{
    width:140,
    display:"flex",
    flexDirection:"row",
    gap:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor:Colors.dark.backgroundLigth,
    position: 'absolute',
    top:10,
    left:10,
  },bannerCertificationText: {
    color: '#FFFFFF',
    fontSize: 10,
  },bannerDescriptio:{
    width: '100%',
    display:"flex",
    flexDirection:"row",
    paddingHorizontal:20,
    gap:5,
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'absolute', // CORREÇÃO: Mudado para absoluto
    bottom: -50, 
  },bannerCardValue:{
    color:Colors.dark.yellow,
    fontSize: 20,
    fontWeight: 'bold',
  },bannerTexts:{
    padding: 10,
    marginTop: 50
  },bannerName:{
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
    gap:5,
  },bannerNameText:{
    color:"#fff",
    fontSize:20,
    fontWeight: 'bold',
  },bannerl:{
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
    gap:5,
  },bannerlArroba:{
    color:"#ffe4a1ff",
  },point:{
    color:"#ffe4a1ff",
    fontSize: 20,
    fontWeight: 'bold',
  },bannerloc:{
    color:"#ffe4a1ff",
    fontWeight: 300,
  },texts:{
    paddingHorizontal: 10,
  },textDes:{
    color:"#fff",
    fontSize: 14,
    lineHeight: 20,
  },boxCertification:{
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
    padding: 10,
    backgroundColor:Colors.dark.backgroundVariable,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
  },boxCertificationText:{
    flex:1,
    color:"#fff",
    fontSize: 10,
    lineHeight: 20,
    marginLeft: 10,
  },boxBtns:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    gap: 10,
  },boxBtn:{
    width:'auto',
    flexDirection:'row-reverse',
    backgroundColor:Colors.dark.gray,
    borderRadius:20,
    paddingVertical:8,
  },boxBtnWhatsApp:{
    backgroundColor:Colors.dark.green,
  },boxBtnText:{
    color:Colors.dark.text,
    fontSize:12,
    fontWeight:'bold',
  },boxBtnTextWhatsApp:{
    color:Colors.dark.background,
  },btn:{
    backgroundColor: Colors.dark.yellow,
  },boxSpyler:{
    width:"100%",
    display:'flex',
    flexDirection:'row',
    padding:10,
    gap: 10,
  },boxMenuAticle:{

    backgroundColor:Colors.dark.backgroundVariable,
    width:"auto",
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    padding:10,
    margin:10,
    gap: 5,
  },headerCarrossel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  categoryHeaderCarrossel: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
  },  viewAll:{
    color: Colors.dark.yellow,
    textTransform: 'lowercase',
    fontSize: 12,
  },

});
