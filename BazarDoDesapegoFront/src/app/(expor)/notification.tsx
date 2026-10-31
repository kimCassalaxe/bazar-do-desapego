import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function ScreenNotification() {
  


  return (
    <View style={[styles.scrollView]}>
     <Text> Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
