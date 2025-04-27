import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import Icon from '@react-native-vector-icons/material-design-icons';

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.primary,
				tabBarInactiveTintColor: Colors.dark,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: 'absolute',
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name='today'
				options={{
					title: 'Today',
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='calendar-month'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='upcoming'
				options={{
					title: 'Upcoming',
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='calendar-search'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='magnify-expand'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='browse'
				options={{
					title: 'Browse',
					tabBarIcon: ({ color, size }) => (
						<Icon
							name='text-box-search-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
