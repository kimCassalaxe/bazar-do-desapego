import { ReactNode } from "react";

export interface User{
  userId:string,
  username: string,
  email:string,
  passwordHash:string,
  bio:string,
  avatarUrl: string,
  city:string,
  whatsapp:string,
  followersCount:number,
  avgRating:number,
}
export interface LoginPayload{
  email:string,
  passwordHash:string,
  
}
export interface AuthContextType{
  user:User | null;
  users:User[] | null;
  token:string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  allUser:()=> Promise<User[]| null>;
  login:(emai:string,password:string)=> Promise<void>;
  register:(data:RegisterData)=> Promise<void>;
  logout:()=>Promise<void>;
}
//tipos de dados para cadastrar um user
export interface RegisterData{
  username:string;
  email:string;
  password:string;
  display_name:string;
  city?:string;
}
/***
export interface RegisterData2{
  username:string;
  email:string;
  password:string;
  telefone:string;
  display_name:string;
  city?:string;
}
*/
//tipo do provedor 
//ReactNode =  aqualquer coisa que react renderizar
export interface AuthProviderProps{
  children:ReactNode;
}


export interface Product{
  product_id:string,
  seller_id:string,
  category_id:string,
  title:string,
  description:string,
  price:number,
  old_price:number,
  condition:string,
  status:string,
  city:string,
  views_count:number,
  likes_count:number,
  comments_count:number,
  created_at:string,
  user_name:string,
  user_avatar:string,
  category_name:string,
  images:{id:string,image:string}
}
export interface Category{
  categoryId:string,
  name:string,
  slug:string,
  icon:string,
}
export interface Feed{
  productId:string,
  sellerId:string,
  categoryId:string,
  title:string,
  description:string,
  price:number,
  oldPrice:number,
  condition:string,
  status:string,
  city:string,
  viewsCount:number,
  likesCount:number,
  commentsCount:number,
  createdAt:string,
  seller:{
    user_name:string,
    user_avatar:string
  },
  images:{
    imageUrl:string
  }[],
  comments:Comment[]
}
export interface Comment{
    commentId:string,
    userId:string,
    productId:string,
    commentText:string,
    createdAt:string,
    author:{
      comment_user_id:string,
      comment_user_name:string,
      comment_user_avatar:string
    }
  }
export interface Comment{
  comment_id:string,
  product_id:string,
  user_id:string,
  comment_text:string,
  created_at:Date,
  }