import { View } from 'react-native';
import { s } from './ForecastList.style';
import { useRoute } from '@react-navigation/native';
import { getWeatherInterpretation } from '../../service/meteo-service';
import { dateToDDMM, DAYS } from '../../service/date-service';
import { ForecastListItem } from '../ForecastListItem/ForecastListItem';

export function ForecastList({}) {
	const { params } = useRoute();

	return (
		<View style={s.ForecastList}>
			{params.time.map((time, index) => {
				const code = params.weathercode[index];
				const image = getWeatherInterpretation(code).image;
				const date = new Date(time);
				const day = DAYS[date.getDay()];
				const temperature = params.temperature_2m_max[index];

				return <ForecastListItem image={image} day={day} key={dateToDDMM(date)} temperature={temperature.toFixed(0)} />;
			})}
		</View>
	);
}
