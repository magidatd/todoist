import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const MoreButton = () => {
	return (
		<View style={styles.container}>
			<Text>MoreButton</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginRight: 10,
	},
});

export default MoreButton;
