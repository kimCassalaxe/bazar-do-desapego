import { Colors } from "@/constants/theme";
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  url: () => any;
  name:string;
  arroba:string;
  local:string;
  timeAgo:string;
}
export default function PublicationHeader(prop: Props){
  return(
      <View style={styles.headerPublication}>
        <Image style={styles.headerPublicationUser} source={prop.url()}/>
        <View style={styles.isOnStatus}></View>
        <View style={styles.headerPublicationCardTextBox}>
          <View style={styles.headerPublicationCardTextBoxName}>
            <Text style={styles.headerPublicationCardTextBoxNameN}>{prop.name}</Text>  
            <MaterialCommunityIcons name="check-decagram-outline" size={16} color={Colors.dark.yellow} /> 
          </View>
          <View style={styles.headerPublicationCardTextBoxSub}>  
            <Text style={styles.headerPublicationCardTextBoxSubText}>{prop.arroba}</Text>  
            <Text style={styles.headerPublicationCardTextBoxSubPoint}>•</Text>  
            <Text style={styles.headerPublicationCardTextBoxSubTextLocal}>{prop.local}</Text>  
            <Text style={styles.headerPublicationCardTextBoxSubPoint}>•</Text>  
            <Text style={styles.headerPublicationCardTextBoxSubText} >"{prop.timeAgo}"</Text>  
          </View>
        </View>
        <TouchableOpacity style={styles.buttonFollow}>
          <AntDesign name="plus" size={10} color={Colors.dark.text}/>
          <Text style={styles.buttonFollowText}>Seguir</Text>
        </TouchableOpacity>
      </View>
  );
} 
const styles = StyleSheet.create({

  headerPublication:{
    width:"100%",
    padding:10,
    backgroundColor:Colors.dark.backgroundPost,
    display:"flex",
    gap:5,
    flexDirection:"row",
    
    alignItems:"center",
    justifyContent:"space-between",

  },headerPublicationUser:{
    width:50,
    height:50,
    borderRadius:35,

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
    color:Colors.dark.text,
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
    color:Colors.dark.text,
    fontSize:18,
  },headerPublicationCardTextBoxSubText:{
    color:Colors.dark.text,
    fontSize:12,
  },headerPublicationCardTextBoxSubTextLocal:{
    color:Colors.dark.yellow,
    textTransform:"capitalize",
  }
  ,buttonFollow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:3,
    backgroundColor:Colors.dark.backgroundLigth,
    borderRadius:10,
    paddingVertical:2,
    paddingHorizontal:6,
  },buttonFollowText:{
    color:Colors.dark.text,
    fontSize:12,
  }
});