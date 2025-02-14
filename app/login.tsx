import { api } from '@/api';
import { LoginForm } from '@/components/forms';
import { LoginSchemaType } from '@/components/forms/login-form';
import useLazyApi from '@/hooks/useLazyApi';
import { login } from '@/redux/stores/auth';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function Login() {
	const dispatch = useDispatch();
	const {data: loginData, error: loginError, loading: isLoading, callApi: onLogin} = useLazyApi(api.loginPost);
	const router = useRouter();



	const handleSubmit = (values: LoginSchemaType) => {
		onLogin(values);
	};

	if(loginError) {
		console.log(loginError);
		console.error("Error on credentials, please check your data");
	}

	useEffect(() => {
		if (loginData) {
			dispatch(login(loginData));
			router.replace('/pets');
		}
	}, [loginData]);

	return (
		<View  className='flex items-center justify-center end full-view bg-gray-light'>
			<LoginForm onsubmit={handleSubmit} loginError={!!loginError} isLoading={isLoading} />
		</View>
	);
}
