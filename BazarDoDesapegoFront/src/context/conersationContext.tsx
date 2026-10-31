import { createContext, useContext, useEffect, useState } from "react";
import {AuthContextType, AuthProviderProps, RegisterData, User} from "@/constants/types"
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";



export  async function allPosts(){
    const res = await api.get('/api/products/feed');

    if(res){

      const list = res.data;
      if(!Array.isArray(list)) return Array(list)
      return list
    }
  }
