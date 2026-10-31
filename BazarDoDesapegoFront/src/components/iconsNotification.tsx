
import {MaterialIcons } from '@expo/vector-icons';
import {StyleSheet,TouchableOpacity} from 'react-native';
import BableNotification from './bableNotification';

type Props = {
  textAler: string;
  iconName: any;
  style?: any;
  color:any;
  onPress:any;
};
export default function IconsNotification(prop: Props){
  return(
    <TouchableOpacity onPress={prop.onPress}>
      <MaterialIcons name={prop.iconName} size={24} color={prop.color} />
      {prop.textAler && prop.iconName == 'search'? <BableNotification text={prop.textAler} style={[styles.alertTextNumber]} />:null}
      {prop.textAler && <BableNotification text={prop.textAler} style={[styles.alertTextNumber]} />}
    </TouchableOpacity>
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