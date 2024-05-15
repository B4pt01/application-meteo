import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	clock: {
		alignItems: 'flex-end'
	},
	weather_label: {
		alignSelf: 'flex-end',
		transform: [{ rotate: '-90deg' }],
		fontSize: 20
	},
	image: {
		heignt: 90,
		width: 90,
		backgroundColor: 'white'
	},
	temperature_box: {
		alignItems: 'baseline',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	temperature: {
		fontSize: 150
	}
});
