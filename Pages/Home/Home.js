import { Text, View } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { MeteoAPI } from '../../API/meteo';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic';
import { getWeatherInterpretation } from '../../service/meteo-service';
import { s } from './Home.style';

export function Home({}) {
	const [weather, setWeather] = useState();
	const currentWeather = weather?.current_weather;

	async function fetchWeather(coordinates) {
		const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
		setWeather(weatherResponse);
	}
	useEffect(() => {
		if (coords) {
			fetchWeather(coords);
		}
	}, [coords]);

	const [coords, setCoords] = useState();
	useEffect(() => {
		getUserCoords();
	}, []);

	async function getUserCoords() {
		let { status } = await requestForegroundPermissionsAsync();
		if (status === 'granted') {
			const location = await getCurrentPositionAsync();
			setCoords({
				lat: location.coords.latitude,
				lng: location.coords.longitude
			});
		} else {
			setCoords({ lat: '30.55', lng: '3.06' });
		}
	}
	// console.log(coords);
	return currentWeather ? (
		<>
			<View style={s.meteo_basic}>
				<MeteoBasic interpretation={getWeatherInterpretation(currentWeather.weathercode)} />
			</View>
			<View style={s.searchbar_container}>
				<Txt style={{ fontSize: 60 }}>Barre de recherche</Txt>
			</View>
			<View style={s.meteo_advanced}>
				<Txt style={{ fontSize: 60 }}>La météo avancée</Txt>
			</View>
		</>
	) : null;
}
