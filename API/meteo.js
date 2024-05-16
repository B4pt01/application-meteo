import { Alert } from 'react-native';

export class MeteoAPI {
	static async fetchWeatherFromCoords(coords) {
		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
		);
		if (!response.ok) {
			throw new Error('erreur de réseau');
		}
		return await response.json();
	}
	static async fetchCityFromCoords(coords) {
		const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`);
		if (!response.ok) {
			throw new Error('erreur de réseau');
		}
		const data = await response.json();
		const {
			address: { city, village, town }
		} = data;
		return city || village || town;
	}
	static async fetchCoordsFromCity(city) {
		try {
			const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&language=fr&count=1`);
			if (!response.ok) {
				throw new Error('erreur de réseau');
			}
			const data = await response.json();
			const { latitude: lat, longitude: lng } = data.results[0];
			return { lat, lng };
		} catch (e) {
			Alert.alert("Une erreur s'est produite !", e.message);
		}
	}
}
