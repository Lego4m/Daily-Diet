import { useState, useCallback, useMemo } from 'react';

import { Image, Alert } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { format, isSameDay } from 'date-fns';

import { Plus } from 'phosphor-react-native';

import { Meal } from 'src/types';

import { InfoBox } from '@components/InfoBox';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { ListEmpty } from '@components/ListEmpty';

import { mealsGetAll } from '@storage/meal/mealsGetAll';

import { getDietInfos } from '@utils/dietInfos';
import { formatNumber } from '@utils/formatNumber';

import { 
  Container, 
  Header, 
  PercentBox, 
  PercentBoxArrow, 
  NewMealTitle, 
  MealSectionHeader 
} from './styles';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

type MealsListSection = {
  sectionDate: string,
  data: Meal[]
}

export function Home() {
  const insets = useSafeAreaInsets();

  const [meals, setMeals] = useState<Meal[]>([]);

  const navigation = useNavigation();

  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }

  function handleNewMeal() {
    navigation.navigate('newMeal');
  }

  function handleGoToMealDetails(meal: Meal) {
    navigation.navigate('meal', { meal });
  }

  async function fetchMeals() {
    try {
      const fetchedMeals = await mealsGetAll();
      setMeals(fetchedMeals);
    } catch (error) {
      Alert.alert('Carregar refeições', 'Erro ao carregar as refeições.');
      console.log(error);
    }
  }

  const mealsBySection = useMemo(() => {
    const reducedMeals = meals.reduce((acc, meal) => {
      const mealDate = new Date(meal.date);

      if (!acc.some((section) => isSameDay(new Date(section.sectionDate), mealDate))) {
        acc.push({ sectionDate: mealDate.toISOString(), data: [] });
      }
      
      const indexOfMealSection = acc.findIndex((section) => isSameDay(new Date(section.sectionDate), mealDate));

      acc[indexOfMealSection].data.push(meal);

      return acc;
    }, [] as MealsListSection[]);

    const mealsByDecrescentDateOrder = reducedMeals
      .sort((a, b) => new Date(b.sectionDate).getTime() - new Date(a.sectionDate).getTime())  // Order the sections by section date
      .map((section) => ({...section, data: section.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())}));  // Order the meals by meal date

    return mealsByDecrescentDateOrder;
  }, [meals]);

  const dietInfos = useMemo(() => {
    return getDietInfos(meals);
  }, [meals]);  

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));

  return (
    <Container
      ListHeaderComponentStyle={{ paddingTop: insets.top + 32 }}
      ListHeaderComponent={
        <>
          <Header>
            <Image source={logo} />
            <Image source={avatar} />
          </Header>

          <PercentBox 
            isOnDiet={dietInfos.isOnDiet} 
            onPress={handleGoToStatistics}
          >
            <>
              <PercentBoxArrow isOnDiet={dietInfos.isOnDiet} />

              <InfoBox
                information={`${formatNumber(dietInfos.percentOfMealsInDiet)}%`}
                description='das refeições dentro da dieta' 
              />
            </>
          </PercentBox>

          <NewMealTitle>
            Refeições
          </NewMealTitle>

          <Button icon={Plus} onPress={handleNewMeal}>
            Nova refeição
          </Button>
        </>
      }
      sections={mealsBySection}
      keyExtractor={(item) => String(item.id)}
      renderSectionHeader={({ section }) => (
        <MealSectionHeader>
          {format(new Date(section.sectionDate), 'dd.MM.yy')}
        </MealSectionHeader>
      )}
      renderItem={({ item }) => (
        <MealCard 
          meal={item} 
          onPress={() => handleGoToMealDetails(item)}
        />
      )}
      ListEmptyComponent={() => <ListEmpty message='Que tal adicionar sua primeira refeição?'/>}
    />
  );
}
