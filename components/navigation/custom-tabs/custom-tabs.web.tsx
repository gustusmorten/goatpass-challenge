import { Tabs } from 'expo-router';
import React from 'react';

import { Icon } from '@/components/ui/icon';
import { FilePlus, Home, User2 } from 'lucide-react-native';

const tabs = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarPosition:  'left',
				tabBarLabelPosition: 'below-icon',
				tabBarVariant: 'material',
				animation: 'shift',
				
			}}
			initialRouteName='pets'
		>
			<Tabs.Screen
				name='pets'
				options={{
					tabBarIcon: ({ color }) => <Icon as={Home} color={color}  />,
					headerShown: false,
					title: 'Home'
				}}

			/>
			<Tabs.Screen
				name='add-pet'
				options={{
					tabBarIcon: ({ color }) => <Icon as={FilePlus}  color={color} />,
					headerShown: false,
					title: 'Add Pet'
				}}
				
			/>
			<Tabs.Screen
				name='profile'
				options={{
					tabBarIcon: ({ color }) => <Icon as={User2}  color={color} />,
					headerShown: false,
					title: 'Profile'
				}}
			/>
   
		</Tabs>
	);
};

tabs.displayName = 'CustomTabs';
export { tabs as CustomTabs };
