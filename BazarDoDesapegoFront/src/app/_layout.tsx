import { AuthProvider, useAuth } from '@/context/authContext';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import Loading from './(auth)/loading';

function InitialLayout() {
  const {isAuthenticated,isLoading} = useAuth();
  const segments = useSegments();
  const router = useRouter();
 
useEffect(() => {
  //Enquanto isLoading = true nao faz nada , apenas espera
  if(isLoading) return;

  const inAuthGroup =  segments[0] === '(auth)';
  if(!isAuthenticated &&!inAuthGroup){
    //sem user e nao esta em (auth) -> manda para login
    router.replace('/(auth)/login');
  }else if(isAuthenticated && inAuthGroup){
    //sem user e nao esta em (auth) -> manda para login
    router.replace("/(tabs)/home");
  }
  },[isAuthenticated,isLoading,segments]);

  if(isLoading) return<Loading message='carregando ...' />
 
  
  return (<Slot screenOptions={{statusBarStyle:'inverted',}}/>)
}
// Sso envolve com o provider 
export default function RootLayout() {
  
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
)
}

