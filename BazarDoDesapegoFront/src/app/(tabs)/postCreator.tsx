import BobleProfile from '@/components/bableProfile';
import { Colors } from '@/constants/theme';
import { AntDesign, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet, Text, View } from 'react-native';


export default function ScreenPostCreator() {
  return (
    <View style={styles.container}>
      <Text>Explorar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:"100%",
    boxSizing: 'border-box',

  },  
});
