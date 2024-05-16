import { Txt } from '../../components/Txt/Txt';
import { Container } from '../../components/Container/Container';
import { useNavigation, useRoute } from '@react-navigation/native';
import { s } from './Forecast.style';
import { TouchableOpacity, View } from 'react-native';
import { ForecastListItem } from '../../components/ForecastListItem/ForecastListItem';
import { ForecastList } from '../../components/ForecastList/ForecastList';

export function Forecast({}) {
	const { params } = useRoute();
	const nav = useNavigation();

	const backButton = (
		<TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
			<Txt>{'<'}</Txt>
		</TouchableOpacity>
	);
	const header = (
		<>
			<View style={s.header}>
				{backButton}
				<View style={s.header_text}>
					<Txt>{params.city}</Txt>
					<Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
				</View>
			</View>
		</>
	);

	return (
		<Container>
			{header}
			<View style={{ marginTop: 50 }}>
				<ForecastList />
			</View>
		</Container>
	);
}
