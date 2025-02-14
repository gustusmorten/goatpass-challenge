import { Box } from '@/components/ui/box';
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import {
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
	FormControlLabel,
	FormControlLabelText,
} from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react-native';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { z } from 'zod';

export interface LoginFormProps {
	onsubmit: (data: LoginSchemaType) => void;
	loginError: boolean;
	isLoading?: boolean;
	
}

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const LoginForm = ({
	onsubmit,
	loginError,
	isLoading = false,
}: LoginFormProps) => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const [showPassword, setShowPassword] = useState(false);

	const handleState = () => {
		setShowPassword((showState) => {
			return !showState;
		});
	};
	const handleKeyPress = () => {
		Keyboard.dismiss();
		handleSubmit(onsubmit)();
	};

	return (
		<Center className='w-full px-3'>
			<Box className='p-5 max-w-md w-full bg-white border border-background-300 rounded-lg'>
				<VStack className='pb-4' space='xs'>
					<Heading className='leading-[30px]'>Login to your account</Heading>
					<Text className='text-sm'>
						Enter your email and password to login
					</Text>
				</VStack>
				<VStack space='xl' className='py-2'>
					<FormControl
						isInvalid={!!errors?.email || loginError}
						className='w-full'
						isDisabled={isLoading}
					>
						<FormControlLabel>
							<FormControlLabelText>Email</FormControlLabelText>
						</FormControlLabel>
						<Controller
							defaultValue=''
							name='email'
							control={control}
							rules={{
								validate: async (value) => {
									try {
										await loginSchema.parseAsync({ email: value });
										return true;
									} catch (error: any) {
										return error.message;
									}
								},
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input>
									<InputField
										placeholder='Enter email'
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										onSubmitEditing={handleKeyPress}
										returnKeyType='done'
									/>
								</Input>
							)}
						/>
						<FormControlError>
							<FormControlErrorIcon as={AlertTriangle} />
							<FormControlErrorText>
								{errors?.email?.message || (loginError && 'Email ID not found')}
							</FormControlErrorText>
						</FormControlError>
					</FormControl>
					<FormControl
						isInvalid={!!errors.password || loginError}
						className='w-full'
						isDisabled={isLoading}
					>
						<FormControlLabel>
							<FormControlLabelText>Password</FormControlLabelText>
						</FormControlLabel>
						<Controller
							defaultValue=''
							name='password'
							control={control}
							rules={{
								validate: async (value) => {
									try {
										await loginSchema.parseAsync({ password: value });
										return true;
									} catch (error: any) {
										return error.message;
									}
								},
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input>
									<InputField
										type={showPassword ? 'text' : 'password'}
										placeholder='Enter password'
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										onSubmitEditing={handleKeyPress}
										returnKeyType='done'
									/>
									<InputSlot onPress={handleState} className='pr-3'>
										<InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
									</InputSlot>
								</Input>
							)}
						/>
						<FormControlError>
							<FormControlErrorIcon as={AlertTriangle} />
							<FormControlErrorText>
								{errors?.password?.message ||
									(loginError && 'Password was incorrect')}
							</FormControlErrorText>
						</FormControlError>
					</FormControl>
				</VStack>
				<VStack space='lg' className='pt-4'>
					<Button size='md' onPress={handleSubmit(onsubmit)}>
						{isLoading ? (
							<>
								<ButtonSpinner className='color-slate-400' />
								<ButtonText className='font-medium text-sm ml-2'>
									Please wait...
								</ButtonText>
							</>
						) : (
							<ButtonText>Submit</ButtonText>
						)}
					</Button>
				</VStack>
			</Box>
		</Center>
	);
};
