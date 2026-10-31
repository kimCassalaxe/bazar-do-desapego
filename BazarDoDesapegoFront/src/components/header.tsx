
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BableNotification from './bableNotification';
import IconsNotification from './iconsNotification';
import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';

type Props = {
  url: () => any;
  textAler: string;
  textMens: string;
  style?: any;
};
export default function Header(prop: Props){
  const router = useRouter()
  return(
     <View style={styles.header}>
      <View style={styles.imgBox}>

      <Image source={prop.url()} style={styles.logo} />
      </View>
      <View style={styles.headerIcons}>
          <IconsNotification onPress={()=>{}} color={Colors.dark.text} iconName={"search"} textAler=''/>
          <IconsNotification onPress={()=>{router.push('/(expor)/notification')}} color={Colors.dark.text} iconName={"notifications"} textAler='2'/>
          <IconsNotification onPress={()=>{router.push('/(tabs)/mensagem')}} color={Colors.dark.text} iconName={"message"} textAler='5'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  height: 60,
  justifyContent: 'space-between',
  alignItems: 'center',
  },
  imgBox:{
    flex:1,
    width: '40%',
  },
  logo:{
    width: "60%", 
    height: "60%", 
  },
  headerIcons:{
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
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
});