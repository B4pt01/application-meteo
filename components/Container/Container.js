import { s } from './Container.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import landBackground from '../../assets/background.png';

export function Container({ children }) {
	return (
		<ImageBackground source={landBackground} style={s.image} resizeMode="cover" imageStyle={s.img}>
			<SafeAreaView style={s.container}>{children}</SafeAreaView>
		</ImageBackground>
	);
}
