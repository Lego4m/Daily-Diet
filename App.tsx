import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics';
import { Meal } from '@screens/Meal';
import { NewMeal } from '@screens/NewMeal';
import { Feedback } from '@screens/Feedback';

import { Loading } from '@components/Loading';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      { fontsLoaded ? <Feedback /> : <Loading /> }
    </ThemeProvider>
  )
}