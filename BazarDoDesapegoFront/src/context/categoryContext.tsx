import { createContext, useContext, useEffect, useState } from "react";
import {AuthContextType, AuthProviderProps, RegisterData, User} from "@/constants/types"
import api from "../services/api";



export  async function allCategory(){
    const res = await api.get('/api/category/all');

    if(res){
      const list = Array(res.data);
      return list
    }
  }
