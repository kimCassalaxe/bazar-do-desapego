
import { StyleSheet, Text, View } from 'react-native';


export default function ScreenMessager() {
  return (
    <View style={styles.container} >
      <Text>Mensagens</Text>
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
