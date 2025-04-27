import React from 'react';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import MoreButton from '@/components/MoreButton';
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
					title: 'Today',
					header: ({ options }) => (
						<Header
							{...options}
							title={options.title || 'Browse'}
							headerStyle={{
								height: 100,
								alignItems: 'center',
							}}
						/>
					),
					headerTitleStyle: {
						fontFamily: 'Nunito',
						fontWeight: 'bold',
						fontSize: 30,
					},
					headerRight: () => <MoreButton />,
				}}
			/>
		</Stack>
	);
};

export default Layout;
