import { isAutehnticatedSelector } from '@/redux/selectors/auth-selectos';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { useSelector } from 'react-redux';


export default function RootLayout() {

  const isAutehnticated = useSelector(isAutehnticatedSelector);
  
  // if(!isAutehnticated) {
  //   return <Redirect href="/login" />;
  // }

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
