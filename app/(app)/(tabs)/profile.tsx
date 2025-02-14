import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { logout } from '@/redux/stores/auth';
import { useRouter } from 'expo-router';
import { Image, View } from 'react-native';
import { useDispatch } from 'react-redux';

const profile = () => {
	const router = useRouter();
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(logout())
		router.replace('/login')
    }
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<Image
					source={require('../../../assets/images/mascotas-header.png')}
					className='object-contain !w-full'
				/>
			}
		>
			<View className='flex py-2'>
				<VStack space='lg' className='pt-4'>
					<Button size='md' action='negative' onPress={handleLogout}>
						<ButtonText>Logout</ButtonText>
					</Button>
				</VStack>
			</View>
		</ParallaxScrollView>
	);
};

export default profile;
