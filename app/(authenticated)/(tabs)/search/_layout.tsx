import React from 'react';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Header } from '@react-navigation/elements';

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerShadowVisible: false,
				contentStyle: { backgroundColor: Colors.background },
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					title: 'Search',

					headerTitleStyle: {
						fontFamily: 'Nunito',
						fontWeight: 'bold',
						fontSize: 30,
					},
					headerSearchBarOptions: {
						placeholder: 'Tasks, Projects and More.',
						headerIconColor: Colors.primary,
						hideNavigationBar: true,
					},
				}}
			/>
		</Stack>
	);
};

export default Layout;
