import { useState } from 'react';

import { Image } from 'react-native';

import { format } from 'date-fns';

import { Plus } from 'phosphor-react-native';

import { 
  Container, 
  Header, 
  PercentBox, 
  ArrowUpRight, 
  PercentualText, 
  PercentualSubText, 
  NewMealTitle, 
  MealSectionHeader 
} from './styles';

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

  return (
    <Container
      ListHeaderComponent={
        <>
          <Header>
            <Image source={logo} />
            <Image source={avatar} />
          </Header>

          <PercentBox isOnDiet={isOnDiet}>
            <>
              <ArrowUpRight isOnDiet={isOnDiet} />

              <PercentualText>
                90,86%
              </PercentualText>

              <PercentualSubText>
                das refeições dentro da dieta
              </PercentualSubText>
            </>
          </PercentBox>

          <NewMealTitle>
            Refeições
          </NewMealTitle>

          <Button
            Icon={Plus}
            onPress={() => {}}
          >
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
      renderItem={({ item }) => <MealCard meal={item}/>}
    />
  );
}
