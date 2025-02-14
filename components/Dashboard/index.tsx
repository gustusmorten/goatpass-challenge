import { api } from '@/api';
import useApi from '@/hooks/useApi';
import { View } from 'react-native';
import PetCard from '../PetCard';
import { Spinner } from '../ui/spinner';

const Dashboard = () => {
	const { data, error, loading } = useApi(api.getPets);

	const pets = data?.pets;

	if (error) {
		console.error('Error fetching pets, please try again later');
	}

	return (
		<>
			{loading && !pets ? (
				<View className='w-full h-full flex flex-col justify-center items-center p-4'>
					<Spinner size='small' className='text-gray-800' />
				</View>
			) : (
				<View className='w-full flex flex-col items-center p-4'>
					<View className='w-full flex flex-row flex-wrap gap-x-8 gap-4'>
						{pets?.map((pet) => (
							<PetCard key={pet.id} pet={pet} />
						))}
					</View>
				</View>
			)}
		</>
	);
};

export default Dashboard;
