import { Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import landBackground from './assets/background.png';
import AltaRegular from './assets/fonts/Alata-Regular.ttf';
import { useFonts } from 'expo-font';
import { Home } from './Pages/Home/Home';
import { s } from './App.style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Forecast } from './Pages/Forecast/Forecast';

export default function App() {
	const [isFontLoaded] = useFonts({
		'Alta-Regular': AltaRegular
	});
	const Stack = createNativeStackNavigator();

	const navTheme = {
		colors: {
			background: 'transparent'
		}
	};
	return isFontLoaded ? (
		<NavigationContainer theme={navTheme}>
			<Stack.Navigator screenOptions={{ animation: 'fade', headerShown: false }} initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Forecast" component={Forecast} />
			</Stack.Navigator>
		</NavigationContainer>
	) : null;
}
