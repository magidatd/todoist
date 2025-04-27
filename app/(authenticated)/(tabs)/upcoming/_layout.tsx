import React from 'react';
import { Stack } from 'expo-router';
import MoreButton from '@/components/MoreButton';
import { Header } from '@react-navigation/elements';
import { Colors } from '@/constants/Colors';

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					title: 'Upcoming',
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
