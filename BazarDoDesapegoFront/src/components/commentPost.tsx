import { Colors } from "@/constants/theme";
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  click?: () => any;
  commentUser:string;
  commentText:string;

}
export default function CommentPost(prop: Props){
  return(
  <View style={styles.itemCommentPublication}>
    <Text style={styles.userItemCommentPublication}>{prop.commentUser}</Text>
    <Text numberOfLines={2} style={styles.messageItemCommentPublication}>{prop.commentText}</Text>
  </View> 
  );
} 
const styles = StyleSheet.create({
  itemCommentPublication:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    gap:5,
  },userItemCommentPublication:{
    fontSize:12,
    fontWeight:'bold',
    color:Colors.dark.text,
  },messageItemCommentPublication:{
    width:'60%',
    fontSize:12,
    fontWeight:300,
    color:Colors.dark.light,
  }

});