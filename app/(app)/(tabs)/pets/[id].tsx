import { api } from '@/api';
import { ThemedText } from '@/components/ThemedText';
import {
	Avatar,
	AvatarFallbackText,
	AvatarImage,
} from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Spinner } from '@/components/ui/spinner';
import useApi from '@/hooks/useApi';
import { capitalize } from '@/utils/format/format';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const PetProfile = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { data: petData, error, loading } = useApi(api.getPet, [id]);
	return (
		<>
			{loading && !petData ? (
				<View className='w-full h-full flex flex-col justify-center items-center p-4'>
					<Spinner size='small' className='text-gray-500' />
				</View>
			) : (
				<View className='w-full flex flex-col items-center p-4'>
					<Box className='bg-white gap-4 rounded-xl w-full pt-4 pb-8 px-2'>
						<View className='flex flex-row items-center justify-center py-2'>
							<Avatar className=''>
								<AvatarFallbackText>{petData?.name}</AvatarFallbackText>
								<AvatarImage
									source={{
										uri: petData?.photo,
									}}
									alt='image'
								/>
							</Avatar>
						</View>
						<View className='flex gap-2 items-center justify-center'>
							<ThemedText type='subtitle'>{petData?.name}</ThemedText>
							<ThemedText type='defaultSemiBold' className='text-gray-400'>
								{capitalize(petData?.type || '')} - {petData?.weight} kg
							</ThemedText>
						</View>
						<ThemedText type='defaultSemiBold'>Vacination schema</ThemedText>
						<View>
							<View className='flex flex-col gap-2 items-center justify-center'>
								{petData?.vacinations.map((vacination, index) => (
									<View
										className='p-2 max-w-md w-full gap-2 border border-background-300 rounded-lg'
										key={index}
									>
										<ThemedText type='defaultSemiBold'>
											{vacination.name}
										</ThemedText>
										<ThemedText type='default'>{vacination.date}</ThemedText>
									</View>
								))}
							</View>
						</View>
					</Box>
				</View>
			)}
		</>
	);
};

export default PetProfile;
