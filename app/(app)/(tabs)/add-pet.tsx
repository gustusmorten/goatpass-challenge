import { api } from '@/api';
import { NewPetFormInterface } from '@/api/interfaces/pet/pet';
import NewPetForm, { NewPetSchemaType } from '@/components/forms/newPetForm';
import { ThemedText } from '@/components/ThemedText';
import {
	Toast,
	ToastDescription,
	ToastTitle,
	useToast,
} from "@/components/ui/toast";
import { VStack } from '@/components/ui/vstack';
import useLazyApi from '@/hooks/useLazyApi';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

export default function addPet() {
	const {
		data: responseData,
		error,
		loading: isLoading,
		callApi: onNewPet,
	} = useLazyApi(api.newPetPost);
	const router = useRouter();
	const toast = useToast()
	const resetFormRef = useRef<() => void>();

	const handleSubmit = (values: NewPetSchemaType) => {
		onNewPet(values as unknown as NewPetFormInterface);
	};

	if (error) {
		console.log(error);
	}

	useEffect(() => {
		if (responseData && !isLoading) {
			showSuccessToast();
			resetFormRef.current?.();
			router.replace('/pets');
		}
	}, [responseData, isLoading]);

	const showSuccessToast = () => {
		toast.show({
			placement:"top",
			duration: 3000,
			render: () => (
				<Toast>
					<ToastTitle>Success</ToastTitle>
					<ToastDescription>Your pet has been registered</ToastDescription>
				</Toast>
			),
		});
	}

	return (
		<SafeAreaView className=''>
			<ScrollView className='px-4 py-4 pb-8'>
				<VStack className='pb-4' space='sm'>
					<ThemedText type="subtitle">Register a new pet</ThemedText>
					<ThemedText type='defaultSemiBold'>
						Keep track of your pets health and information
					</ThemedText>
				</VStack>
				<NewPetForm
					onsubmit={handleSubmit}
					postError={!!error}
					isLoading={isLoading}
					onResetRef={(resetFn) => (resetFormRef.current = resetFn)}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
