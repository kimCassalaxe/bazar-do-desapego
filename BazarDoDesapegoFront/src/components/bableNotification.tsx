
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
  style?: any;
};
export default function BableNotification(prop: Props){
  return(
    <>
      <Text style={[styles.alertTextNumber, prop.style]}>{prop.text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
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