import { createContext, useContext, useEffect, useState } from "react";
import {AuthContextType, AuthProviderProps, RegisterData, User} from "@/constants/types"
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const AuthContext = createContext<AuthContextType|undefined>(undefined);

export function AuthProvider({children}:AuthProviderProps){
  const [users,setUsers] = useState<User[]|null>(null);
  const [user,setUser] = useState<User|null>(null);
  const [token,setToken] = useState<string| null>(null);
  const [isLoading,setIsLoading] = useState(true);


  //carrega o usuario salvo ao abrir
  useEffect(() => {
    loadStoredData();
  }, []);


  async function loadStoredData(){
    const storedToken = await AsyncStorage.getItem('token');
    const storadUser = await AsyncStorage.getItem('user');
    if(storedToken && storadUser){
      setToken(storedToken);
      setUser(JSON.parse(storadUser));
    }
    setIsLoading(false)
  }

  async function allUser(){
    const res = await api.get('/api/auth/all');

    if(res){
      const list = res.data;
      setUsers(list);
      return users
    }
    return users
    
  }
  //login
  async function login(email:string,password:string) {
    let emailConst = email.trim();
    try {
      const res = await api.post('/api/auth/login', {email:emailConst,password:password});
     
      if(res){
        await AsyncStorage.setItem('token', res.data.token);
        const user =JSON.stringify(res.data.user)
        await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        setToken(res.data.token);
        setUser(res.data.user);
        console.log(`user ${user}`)
      }
     
      
    } catch (error) {
      alert("ocorreu um erro a fazer o login")
      console.log(`erro  =  = ${error}`);
      
    }
    
  }

  async function register(egisterData:RegisterData) {


    try {
      const res = await api.post('/api/auth/register',egisterData);
      console.log("deu");
      console.log(JSON.stringify(res));
      const data = res.data;
      if(res.status !==200) throw new Error(data.error||"erro no registro");
      
      setToken(data.token);
      setUser(data.user as User)

      await AsyncStorage.setItem('token', res.data.token);
      await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
    } catch (error:any) {
       console.log("Ouve um erro a cadastrar");
      if (error.response) {
      console.log("Detalhes do erro no Backend:", error.response.data);
    } else {
      console.log("Mensagem de erro:", error.message);
    }
    }


  }


  async function logout() {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    setToken(null);
    setUser(null);
    console.log('User logged out');
    
  }
  return (
    <AuthContext.Provider value={{ user,users,token,isLoading,isAuthenticated:!!user,login,allUser,register,logout }}>
      {children}
    </AuthContext.Provider>
  );

}
export function useAuth():AuthContextType{
  const context = useContext(AuthContext)
  if(!context) throw new Error('useAuth de ser usado dentro de um AuthProvider')
  return context

}