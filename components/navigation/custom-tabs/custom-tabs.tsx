import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Icon } from '@/components/ui/icon';
import { FilePlus, Home, User2 } from 'lucide-react-native';

const tabs = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: 'text-blue-500 dark:text-blue-400',
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						position: 'absolute',
					},
					default: {},
				}),
				animation: 'shift',
				
			}}
			initialRouteName='pets'
		>
			<Tabs.Screen
				name='pets'
				options={{
					tabBarIcon: ({ color }) => <Icon as={Home} className={color} />,
					title: 'Home',
				}}
			/>
			<Tabs.Screen
				name='add-pet'
				options={{
					tabBarIcon: ({ color }) => <Icon as={FilePlus} className={color} />,
					title: 'Add Pet',
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					tabBarIcon: ({ color }) => <Icon as={User2} className={color} />,
					title: 'Profile',
				}}
			/>
		</Tabs>
	);
};

tabs.displayName = 'CustomTabs';
export { tabs as CustomTabs };
