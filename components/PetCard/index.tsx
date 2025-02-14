import { PetInterface } from '@/api/interfaces/pet/pet';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Link } from 'expo-router';
import { Platform, Text, View } from 'react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '../ui/avatar';

interface petCardProps {
  pet: Omit<PetInterface, 'vacination' | 'weight'>;
}

const PetCard = ({pet}:petCardProps) => {
	const cardWidth = Platform.OS === 'web' ? 'w-[18%]' : 'w-[45%]';

	return (
		<Link href={`/pets/${pet.id}`} asChild>
			<Card className={`p-5 rounded-lg  outline border border-gray-200 ${cardWidth} hover:opacity-80`}>
				<View className='flex flex-row items-center justify-center mb-4'>
					<Avatar className='mr-3'>
						<AvatarFallbackText>{pet.name}</AvatarFallbackText>
						<AvatarImage
							source={{
								uri: pet.photo,
							}}
							alt='image'
						/>
					</Avatar>
				</View>
				<View className='flex items-center justify-center'>
					<Text className='text-sm font-normal mb-2 text-typography-700'>
						{pet.type.toUpperCase()}
					</Text>
					<Heading size='md' className='text-typography-800'>
						{pet.name}
					</Heading>
				</View>
			</Card>
		</Link>
	);
};

export default PetCard;
