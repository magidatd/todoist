import { Stack, useRouter } from 'expo-router';
import { useWindowDimensions, Button, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import React from 'react';

const AuthenticatedLayout = () => {
	return (
		<Stack screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}>
			<Stack.Screen
				name='(tabs)'
				options={{ headerShown: false }}
			/>
		</Stack>
	);
};

export default AuthenticatedLayout;
