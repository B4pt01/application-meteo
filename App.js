import { Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import landBackground from './assets/background.png';
import AltaRegular from './assets/fonts/Alata-Regular.ttf';
import { useFonts } from 'expo-font';
import { Home } from './Pages/Home/Home';
import { s } from './App.style';

export default function App() {
	const [isFontLoaded] = useFonts({
		'Alta-Regular': AltaRegular
	});
	return (
		<ImageBackground source={landBackground} style={s.image} resizeMode="cover" imageStyle={s.img}>
			<SafeAreaProvider>
				<SafeAreaView style={s.container}>{isFontLoaded ? <Home /> : null}</SafeAreaView>
			</SafeAreaProvider>
		</ImageBackground>
	);
}
