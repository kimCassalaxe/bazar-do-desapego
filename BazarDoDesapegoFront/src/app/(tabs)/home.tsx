
import Carrossel from '@/components/carrossel';
import PublicationCard from '@/components/publicationCard';
import { Colors } from '@/constants/theme';
import { Category, Feed, Product } from '@/constants/types';
import { useAuth } from '@/context/authContext';
import { allCategory } from '@/context/categoryContext';
import { allPosts } from '@/context/PostsContext';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import {StyleSheet, Text, View } from 'react-native';


export default function ScreenHome() {
  const router = useRouter();
  const [data,setData] =  useState<Feed[]| null>(null);
  
  function hendleShowDetilhe(){
    router.push('/(expor)/productDet');
  }

  useEffect(()=>{
  (async ()=>{
    try {
      const dados = await allPosts();
    if(dados)setData(dados);
    if(dados){
 const ur = dados[0]
 console.log(ur);
    }   

    } catch (error) {
      
    }
    
  })()

},[])

  return(
    <View style={styles.container}>
      <View style ={styles.headerCarrossel}>
        <Text style ={styles.categoryHeaderCarrossel}>Pordutos por Nicho</Text>
        <Text style={styles.viewAll}>ver tudo</Text>
      </View>
      <Carrossel/>

      {!data ? <Text style={styles.viewAll}>Sem produtos disponiveil</Text>:
      <FlatList
        data={data}
        style={styles.list}
        renderItem={({item})=><PublicationCard
        isOn={true}  
        preco={item.price} 
        precoAnterior={item.oldPrice} 
        commentNumber={item.comments.length} 
        linkNumber={item.comments.length} 
        productName={item.title} 
        userImg={item.seller.user_avatar} 
        photoPost={item.images[0].imageUrl} 
        userName={item.seller.user_name}
        arroba={`@${item.seller.user_name}`}
        local={item.city}
        timeAgo={item.createdAt}
        comments={item.comments}
        click={()=>hendleShowDetilhe()}
      />}
      />
    }
      
      
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    boxSizing: 'border-box',
    backgroundColor:Colors.dark.background,


  },
  headerCarrossel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  categoryHeaderCarrossel: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  viewAll:{
    color: Colors.dark.yellow,
    textTransform: 'lowercase',
    fontSize: 12,
  },list:{
    padding:10,
  }
});
