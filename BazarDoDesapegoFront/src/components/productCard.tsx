import { Colors } from "@/constants/theme";
import { Comment } from "@/constants/types";
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CommentPost from "./commentPost";

type Props = {
  userImg: string;
  photoPost:string;
  click: () => any;
  isOn:boolean;
  userName:string;
  arroba:string;
  local:string;
  productName:string;
  linkNumber:number;
  commentNumber:number;
  preco:number;
  precoAnterior:number;
  timeAgo:string;
  comments:Comment[] | null;

}
export default function productCard(prop: Props){

  return(
    
    <TouchableOpacity  style={styles.container}>

      <View style={styles.bodyPublication}>
        <Image style={[styles.ItemImgBodyPublication,]} source={{uri:prop.photoPost}} />
          <View style={styles.imgBodyPublication}>
            <TouchableOpacity style={styles.lickItemImgBodyPublication}>
              <Ionicons name="heart-outline" size={21} color={Colors.dark.light}/>
            </TouchableOpacity> 
          </View>
      </View>
      <View style={styles.descriptionPublication}>
        <View style={styles.VaulerDescriptionPublication}>
          <Text style={styles.valueProduct}>{prop.preco} Kz</Text>
          {prop.precoAnterior ? <Text style={styles.voucherProduct}>{prop.precoAnterior - prop.preco} kz</Text>:null}
          <Text style={styles.difrencProduct}>{prop.precoAnterior} Kz</Text>
        </View>
        <Text style={styles.productDescriptionPublication} numberOfLines={1}> {prop.productName}</Text>
        <View style={styles.headerPublicationCardTextBoxSub}>  
          <Text style={styles.headerPublicationCardTextBoxSubText}>{prop.arroba}</Text>  
          <Text style={styles.headerPublicationCardTextBoxSubPoint}>•</Text>  
          <Text style={styles.headerPublicationCardTextBoxSubTextLocal}>{prop.local}</Text>  
          <Text style={styles.headerPublicationCardTextBoxSubPoint}>•</Text>  
          <Text  style={styles.headerPublicationCardTextBoxSubText}>{prop.timeAgo}</Text>  
        </View>

      </View>
     
    </TouchableOpacity >
  );
} 
const styles = StyleSheet.create({
  container: {
    marginBottom:20,
    borderRadius:20,
    backgroundColor:Colors.dark.backgroundPost,
    width: '100%',
    boxSizing: 'border-box',
    justifyContent: 'center',
    
  },headerPublication:{
    width:"100%",
    padding:10,
    backgroundColor:Colors.dark.backgroundPost,
    display:"flex",
    gap:5,
    flexDirection:"row",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignItems:"center",
    justifyContent:"space-between",

  },headerPublicationUser:{
    width:50,
    height:50,
    borderRadius:25,

  },isOnStatus:{
    width:10,height:10,
    backgroundColor:Colors.dark.green,
    borderRadius:7,
    position:'relative',
    top:15,
    right:16,

  },headerPublicationCardTextBox:{
    display:"flex",
    marginLeft:-10,
  },headerPublicationCardTextBoxNameN:{
    fontSize:18,
    color:'#fff',
    fontWeight:500,
    

  },headerPublicationCardTextBoxName:{
    gap:5,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",

  },headerPublicationCardTextBoxSub:{
    display:"flex",
    flexDirection:"row",
    alignItems:'center',
    gap:2,
  },headerPublicationCardTextBoxSubPoint:{
    color:"#ffffff",
    fontSize:18,
  },headerPublicationCardTextBoxSubText:{
    color:"#ffffff",
    fontSize:12,
  },headerPublicationCardTextBoxSubTextLocal:{
    color:Colors.dark.yellow,
    textTransform:"capitalize",
  },buttonFollow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:3,
    backgroundColor:Colors.dark.backgroundLigth,
    borderRadius:10,
    paddingVertical:2,
    paddingHorizontal:6,
  },buttonFollowText:{
    color:"#ffffff",
    fontSize:12,
  },bodyPublication:{
  },imgBodyPublication:{
    width:'100%',
  },ItemImgBodyPublication:{
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },descriptionPublication:{
  },lickItemImgBodyPublication:{
    borderRadius:20,
    padding:10,
    backgroundColor:Colors.dark.backgroundLigth,
    position:'absolute',
    top:10,
    right:10,
  },VaulerDescriptionPublication:{
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'flex-end',
    gap:10,
    padding:10,
  },valueProduct:{
    color:Colors.dark.yellow,
    fontSize:22,
    fontWeight:'bold',
  },voucherProduct:{
    color:Colors.dark.textSecondary,
    fontSize:12,
    textDecorationLine:"line-through",
  },difrencProduct:{
    paddingHorizontal:10,
    paddingVertical: 0,
    borderRadius:20,
    fontSize:14,
    color:Colors.dark.green,
    backgroundColor:Colors.dark.backgroundGreen,
  },productDescriptionPublication:{
    fontSize:20,
    fontWeight:700,
    paddingHorizontal:10,
    color:Colors.dark.text,
  },feedBackProduct:{
    display:'flex',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-around',
    padding:10,
    gap:10,

  },itemFeedBackProduct:{
    display:'flex',
    flexDirection:'row',
    gap:3,

  },
  textItemFeedBackProduct:{
    color:Colors.dark.text,
    fontWeight:400,
  },feedBackProductBtn:{
    paddingHorizontal:16,
    paddingVertical:8,
    backgroundColor:Colors.dark.green,
    borderRadius:20,
    display:'flex',
    flexDirection:'row',
    gap:3,
    alignItems:'center',
    alignSelf:'center',
  },commentPublication:{
    display:'flex',
    padding:10,
    margin:10,
    borderRadius:10,
    gap:10,
    backgroundColor:Colors.dark.backgroundPost,

  },btnAllCommentPublication:{
    
  },textBtnAllCommentPublication:{
    fontSize:10,
    color:Colors.dark.yellow,
  }

});