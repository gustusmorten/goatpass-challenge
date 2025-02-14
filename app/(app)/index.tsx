import { isAutehnticatedSelector } from '@/redux/selectors/auth-selectos';
import { Redirect } from 'expo-router';
import 'react-native-reanimated';
import { useSelector } from 'react-redux';


export default function RootLayout() {

  const isAutehnticated = useSelector(isAutehnticatedSelector);
  
  if(!isAutehnticated) {
    return <Redirect href="/login" />;
  }


  return <Redirect href="/pets" />;
}
