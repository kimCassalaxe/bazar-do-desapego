import * as Device from 'expo-device';
import { StyleSheet, Text, View } from 'react-native';


export default function ScreenExplore() {
  return (
    <View style={styles.container}>
      <Text>Explorar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
