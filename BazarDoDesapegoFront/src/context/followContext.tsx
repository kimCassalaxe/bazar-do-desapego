import { createContext, useContext, useEffect, useState } from "react";
import {AuthContextType, AuthProviderProps, RegisterData, User} from "@/constants/types"
import api from "../services/api";



export  async function allFollowers(id:string){
  try {
    const res = await api.get(`/api/follow/allbyfollowee/${id}`);

    if(res){
      const list = res.data;
      return list
    }
  } catch (error:any) {
    return error.message
  }

  }
