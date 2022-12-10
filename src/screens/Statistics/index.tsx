import { useState, useCallback, useMemo } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { InfoBox } from '@components/InfoBox';

import { mealsGetAll } from '@storage/meal/mealsGetAll';

import { getDietInfos } from '@utils/dietInfos';

import { Meal } from 'src/types';

import { 
  Container, 
  StatisticsTitle,
  StatisticsBlock,
  StatisticsGroupBlock
} from './styles';

export function Statistics() {
  const [meals, setMeals] = useState<Meal[]>([]);

  async function fetchMeals() {
    try {
      const fetchedMeals = await mealsGetAll();
      setMeals(fetchedMeals);
    } catch (error) {
      console.log(error);
    }
  }

  const dietInfos = useMemo(() => {
    return getDietInfos(meals);
  }, [meals]);

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));
  return (
    <>
      <Header headerColor={dietInfos.isOnDiet ? 'inDiet' : 'outOfDiet'}>
        <InfoBox 
          information={`${dietInfos.percentOfMealsInDiet}%`}
          description='das refeições dentro da dieta'
          informationFontSize='xxl'
        />
      </Header>

      <Container>
        <StatisticsTitle>
          Estatísticas gerais
        </StatisticsTitle>

        <StatisticsBlock>
          <InfoBox 
            information={String(dietInfos.bestInDietSequence)}
            description='melhor sequência de pratos dentro da dieta'
          />
        </StatisticsBlock>

        <StatisticsBlock style={{ marginTop: 12 }}>
          <InfoBox 
            information={String(dietInfos.totalMeals)}
            description='refeições registradas'
          />
        </StatisticsBlock>

        <StatisticsGroupBlock style={{ marginTop: 12 }}>
          <StatisticsBlock 
            backgroundStyle='green'
            style={{ flex: 1 }}
          >
            <InfoBox 
              information={String(dietInfos.mealsInDiet)}
              description='refeições dentro da dieta'
            />
          </StatisticsBlock>

          <StatisticsBlock 
            backgroundStyle='red'
            style={{ flex: 1, marginLeft: 12 }}
          >
            <InfoBox 
              information={String(dietInfos.mealsOutOfDiet)}
              description='refeições fora da dieta'
            />
          </StatisticsBlock>
        </StatisticsGroupBlock>
      </Container>
    </>
  )
}