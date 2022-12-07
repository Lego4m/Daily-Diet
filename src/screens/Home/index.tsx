import { useState } from 'react';

import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns';

import { Plus } from 'phosphor-react-native';

import { Meal } from 'src/types';

import { 
  Container, 
  Header, 
  PercentBox, 
  ArrowUpRight, 
  NewMealTitle, 
  MealSectionHeader 
} from './styles';

import { InfoBox } from '@components/InfoBox';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';


const DATA = [
  {
    sectionDate: '2022-11-26T12:26:31.000Z',
    data: [
      {
        id: 1,
        name: 'Hambúrguer',
        date: '2022-11-26T23:26:31.000Z',
        description: 'teste',
        isOnDiet: false,
      },
      {
        id: 2,
        name: 'Whey Protein',
        date: '2022-11-26T18:26:31.000Z',
        description: 'teste',
        isOnDiet: true,
      }
    ]
  }
]

export function Home() {
  const [isOnDiet, setIsOnDiet] = useState(true);

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

  return (
    <Container
      ListHeaderComponent={
        <>
          <Header>
            <Image source={logo} />
            <Image source={avatar} />
          </Header>

          <PercentBox isOnDiet={isOnDiet} onPress={handleGoToStatistics}>
            <>
              <ArrowUpRight isOnDiet={isOnDiet} />

              <InfoBox
                information='98,86%'
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
      sections={DATA}
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
    />
  );
}
