import { TouchableOpacity } from 'react-native';

import { 
  Container, 
  Header, 
  BackIcon, 
  StatisticsContainer, 
  StatisticsTitle,
  StatisticsBlock,
  StatisticsGroupBlock
} from './styles';

import { InfoBox } from '@components/InfoBox';

const isOnDiet = true;

const infos = {
  daysOnDietInSequence: 22,
  meals: 109,
  mealsInDiet: 99,
  mealsOutOfDiet: 10,
}

export function Statistics() {

  return (
    <Container isOnDiet={isOnDiet}>
      <Header>
        <TouchableOpacity activeOpacity={0.65}>
          <BackIcon isOnDiet={isOnDiet} />
        </TouchableOpacity>

        <InfoBox
          information='90,86%'
          description='das refeições dentro da dieta'
          informationFontSize='xxl'
        />
      </Header>

      <StatisticsContainer>
        <StatisticsTitle>
          Estatísticas gerais
        </StatisticsTitle>

        <StatisticsBlock>
          <InfoBox 
            information={String(infos.daysOnDietInSequence)}
            description='melhor sequência de pratos dentro da dieta'
          />
        </StatisticsBlock>

        <StatisticsBlock style={{ marginTop: 12 }}>
          <InfoBox 
            information={String(infos.meals)}
            description='refeições registradas'
          />
        </StatisticsBlock>

        <StatisticsGroupBlock style={{ marginTop: 12 }}>
          <StatisticsBlock 
            backgroundStyle='green'
            style={{ flex: 1 }}
          >
            <InfoBox 
              information={String(infos.mealsInDiet)}
              description='refeições dentro da dieta'
            />
          </StatisticsBlock>

          <StatisticsBlock 
            backgroundStyle='red'
            style={{ flex: 1, marginLeft: 12 }}
          >
            <InfoBox 
              information={String(infos.mealsOutOfDiet)}
              description='refeições fora da dieta'
            />
          </StatisticsBlock>
        </StatisticsGroupBlock>
      </StatisticsContainer>
    </Container>
  )
}