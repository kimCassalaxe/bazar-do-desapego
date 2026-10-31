
import { Colors } from '@/constants/theme';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerTintColor: Colors.dark.text,
      headerStyle: { backgroundColor: Colors.dark.background }, 
    }}>
      <Stack.Screen name="productDet" />
      <Stack.Screen name="notification" />
    </Stack>
  );
}
