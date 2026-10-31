import React from 'react';
import { DarkTheme, DefaultTheme, router, Stack, Tabs, ThemeProvider } from 'expo-router';
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import BableProfile from '@/components/bableProfile';
import Header from '@/components/header';
import { Colors } from '@/constants/theme';
import { Background } from 'expo-router/build/react-navigation';
import IconsNotification from '@/components/iconsNotification';
import { useAuth } from '@/context/authContext';


export default function LayoutTab() {
  const {} = useAuth();

  return (
    <Tabs screenOptions={{
      headerTintColor: Colors.dark.text,
      headerStyle: { backgroundColor: Colors.dark.background }, 
      tabBarActiveTintColor: Colors.dark.yellow,  // Cor do ícone ativo
      tabBarInactiveTintColor:Colors.dark.text, 
      tabBarStyle: {
          backgroundColor: Colors.dark.backgroundVariable,             // Cor de fundo da barra
          borderTopWidth: 0,                      // Remove a linha superior feia
          elevation: 5,                           // Sombra no Android
          shadowColor: Colors.dark.text,                    // Sombra no iOS
          shadowOpacity: 0.1,
          shadowRadius: 10,                      // Deixa a barra flutuante/arredondada
          height: 65,                             // Altura extra para ficar mais moderna
         
        },
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          headerTitle: () => <Header url={() => require('@/assets/img/logo.png')} textAler={'5'} textMens={'3'} />,
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explorar"
        options={{
          title: 'Explorar',
          headerTitle: () => <Header url={() => require('@/assets/img/logo.png')} textAler={'5'} textMens={'3'} />,
          tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
      name="postCreator"
        options={{
          title:'',
          headerTitle: () => <Header url={() => require('@/assets/img/logo.png')} textAler={'5'} textMens={'3'} />,
          tabBarIcon: ({ color }) => <AntDesign name="plus" size={30}  color={color}/>,
        }}
      />
      
      <Tabs.Screen
        name="mensagem"
        options={{
          title: 'Mensagens',
          tabBarIcon: ({ color,focused }) => <IconsNotification onPress={()=>router.replace('/(tabs)/perfil')}  color={color} iconName={"message"} textAler={'2'} />,
        }}
      />
      
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color,focused}) => <BableProfile isFocus={focused} onPress={()=>{router.replace('/(tabs)/perfil')}} url={()=>require('@/assets/img/user.png')}  styleImg={{transform: [{ scale: 1.6},{translateY:4}]}} style={{width:25,height:25,borderWidth: 1,}} profile='false' />,
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  
  alertTextNumber:{
    width: 15,
    height: 15,
    borderRadius: 10, 
    backgroundColor: '#ffb3caff',
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 15,
    position: 'absolute',
    top: -5,
    right: -5,
  },
  alertTextNumbe2:{
    backgroundColor: '#ffc300',
  },
  headerText:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },plus:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    textAlign:'center',
    position:'relative',
    backgroundColor:Colors.dark.yellow
  }
});
