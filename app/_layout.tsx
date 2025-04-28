import { useFonts } from 'expo-font';
import { Stack, useRouter, usePathname, useSegments, useRootNavigationState } from 'expo-router';
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@/utils/cache';
import { Colors } from '@/constants/Colors';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import React from 'react';

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
	throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env');
}

const InitialLayout = () => {
	const [loaded] = useFonts({
		Nunito: require('../assets/fonts/Nunito-Regular.ttf'),
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	const { isLoaded, isSignedIn } = useAuth();
	const router = useRouter();
	const pathname = usePathname();
	const segments = useSegments();

	const navigationState = useRootNavigationState();

	useEffect(() => {
		if (!navigationState?.key) return;

		if (!isLoaded) return;

		if (loaded) {
			SplashScreen.hideAsync();
		}

		const inAuthGroup = segments[0] === '(authenticated)';

		if (isSignedIn && !inAuthGroup) {
			router.replace('/(authenticated)/(tabs)/today');
		} else if (!isSignedIn && pathname !== '/') {
			router.replace('/');
		}
	}, [loaded, isSignedIn, navigationState]);

	if (!loaded) {
		return null;
	}

	if (!isLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator
					size='large'
					color={Colors.primary}
				/>
			</View>
		);
	}

	return (
		<Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.background } }}>
			<StatusBar
				style='auto'
				hidden
			/>
			<Stack.Screen
				name='index'
				options={{ headerShown: false, animation: 'slide_from_right' }}
			/>
			<Stack.Screen
				name='(authenticated)'
				options={{ headerShown: false, animation: 'slide_from_right' }}
			/>
		</Stack>
	);
};

const RootLayout = () => {
	return (
		<ClerkProvider
			publishableKey={publishableKey}
			tokenCache={tokenCache}
		>
			<ClerkLoaded>
				<InitialLayout />
			</ClerkLoaded>
		</ClerkProvider>
	);
};

export default RootLayout;
