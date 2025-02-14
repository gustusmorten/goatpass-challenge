import {
	Select,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicator,
	SelectDragIndicatorWrapper,
	SelectIcon,
	SelectInput,
	SelectItem,
	SelectPortal,
	SelectTrigger,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle, ChevronDownIcon } from 'lucide-react-native';
import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Keyboard, Text, View } from 'react-native';
import { z } from 'zod';
import { Box } from '../ui/box';
import { Button, ButtonSpinner, ButtonText } from '../ui/button';
import {
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
	FormControlLabel,
	FormControlLabelText,
} from '../ui/form-control';
import { Input, InputField } from '../ui/input';
import { VStack } from '../ui/vstack';

export interface NewPetFormProps {
	onsubmit: (data: NewPetSchemaType) => void;
	postError: boolean;
	isLoading?: boolean;
	onResetRef: (resetFunction: () => void) => void;
}

const typesOfPets = ['cat', 'dog'];

const newPetSchema = z.object({
	file: z.string().optional(),
	name: z.string(),
	type: z.enum(['cat', 'dog']),
	weight: z.string().optional(),
	vacinations: z
		.array(
			z.object({
				date: z.string(),
				name: z.string(),
			}),
		)
		.optional(),
});

export type NewPetSchemaType = z.infer<typeof newPetSchema>;

export default function NewPetForm({
	onsubmit,
	postError,
	isLoading,
	onResetRef,
}: NewPetFormProps) {
	const { control, handleSubmit, reset, formState } = useForm<NewPetSchemaType>(
		{
			resolver: zodResolver(newPetSchema),
		},
	);

	const {
		fields: vacinationsFields,
		append,
		prepend,
		remove,
		swap,
		move,
		insert,
	} = useFieldArray({
		control,
		name: 'vacinations',
	});
	onResetRef(() => reset());
	const handleKeyPress = () => {
		Keyboard.dismiss();
		handleSubmit(onsubmit)();
	};

	const addVacinationHandle = () => {
		append({ name: '', date: '2021-09-01' });
	};


	return (
		<View>
			
			<VStack className='pb-4' space='xs'>
				<FormControl
					isInvalid={!!formState.errors?.name}
					className='w-full'
					isDisabled={isLoading}
				>
					<FormControlLabel>
						<FormControlLabelText>Name</FormControlLabelText>
					</FormControlLabel>
					<Controller
						defaultValue=''
						name='name'
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input>
								<InputField
									placeholder='Name'
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
									onSubmitEditing={handleKeyPress}
									returnKeyType='done'
									className='bg-white'
								/>
							</Input>
						)}
					/>
					<FormControlError>
						<FormControlErrorIcon as={AlertTriangle} />
						<FormControlErrorText>
							{formState.errors?.name?.message}
						</FormControlErrorText>
					</FormControlError>
				</FormControl>
				<FormControl
					isInvalid={!!formState.errors?.type}
					className='w-full'
					isDisabled={isLoading}
				>
					<FormControlLabel>
						<FormControlLabelText>Choose yout pet's type</FormControlLabelText>
					</FormControlLabel>

					<Controller
						name='type'
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Select
								onValueChange={onChange}
								defaultValue={value}
								className='bg-white'
							>
								<SelectTrigger>
									<SelectInput
										placeholder='Select option'
										className='flex-1 bg-white'
									/>
									<SelectIcon className='mr-3' as={ChevronDownIcon} />
								</SelectTrigger>
								<SelectPortal>
									<SelectBackdrop />
									<SelectContent>
										<SelectDragIndicatorWrapper>
											<SelectDragIndicator />
										</SelectDragIndicatorWrapper>
										<SelectItem label='Cat' value='cat' />
										<SelectItem label='Dog' value='dog' />
									</SelectContent>
								</SelectPortal>
							</Select>
						)}
					/>
					<FormControlError>
						<FormControlErrorIcon as={AlertTriangle} />
						<FormControlErrorText>
							{formState.errors?.type?.message}
						</FormControlErrorText>
					</FormControlError>
				</FormControl>
				<FormControl
					isInvalid={!!formState.errors?.weight}
					className='w-full'
					isDisabled={isLoading}
				>
					<FormControlLabel>
						<FormControlLabelText>Weigth</FormControlLabelText>
					</FormControlLabel>
					<Controller
						defaultValue=''
						name='weight'
						control={control}
						rules={{
							validate: async (value) => {
								try {
									await newPetSchema.parseAsync({ weight: value });
									return true;
								} catch (error: any) {
									return error.message;
								}
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input>
								<InputField
									className='bg-white'
									placeholder='Weight'
									value={value?.toString() || ''}
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
							{formState.errors?.weight?.message}
						</FormControlErrorText>
					</FormControlError>
				</FormControl>
				<Text className='text-md'>Enter yout vacination schema </Text>
				<Box className='p-5 max-w-md w-full  border border-background-300 rounded-lg gap-3'>
					{vacinationsFields.map((vacination, index) => (
						<Box
							className='p-5 max-w-md w-full gap-2 border border-background-300 rounded-lg'
							key={index}
						>
							<FormControl className='w-full' isDisabled={isLoading}>
								<FormControlLabel>
									<FormControlLabelText>Vacination name</FormControlLabelText>
								</FormControlLabel>
								<Controller
									defaultValue=''
									name={`vacinations.${index}.name`}
									control={control}
									render={({ field: { onChange, onBlur, value } }) => (
										<Input>
											<InputField
												placeholder='Name'
												value={value}
												onChangeText={onChange}
												onBlur={onBlur}
												onSubmitEditing={handleKeyPress}
												returnKeyType='done'
												className='bg-white'
											/>
										</Input>
									)}
								/>
							</FormControl>
							<FormControl className='w-full' isDisabled={isLoading}>
								<FormControlLabel>
									<FormControlLabelText>Vacination date</FormControlLabelText>
								</FormControlLabel>
								<Controller
									defaultValue={'2021-09-01'}
									name={`vacinations.${index}.date`}
									control={control}
									render={({ field: { onChange, onBlur, value } }) => (
										<Input>
											<InputField
												placeholder='Date'
												value={value.toString()}
												onChangeText={onChange}
												onBlur={onBlur}
												onSubmitEditing={handleKeyPress}
												returnKeyType='done'
												className='bg-white'
											/>
										</Input>
									)}
								/>
							</FormControl>
							<Button size='md' action='negative' onPress={() => remove(index)}>
								<ButtonText>Remove vacination</ButtonText>
							</Button>
						</Box>
					))}
					<Button
						size='md'
						action='positive'
						onPress={addVacinationHandle}
						variant='outline'
					>
						<ButtonText>Add vacination</ButtonText>
					</Button>
				</Box>
				<Button size='md' action='positive' onPress={handleSubmit(onsubmit)}>
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
		</View>
	);
}
