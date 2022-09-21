import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })


  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Background>
          {fontLoaded ? <Home /> : <Loading />}
        </Background>
      </ThemeProvider>
    </>
  );
}


