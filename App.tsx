import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';

import theme from '@theme/index';
import Groups from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
// import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />

        {fontsLoaded ? < Groups /> : <NewGroup />}
      </ThemeProvider>
    </>
  );
}

