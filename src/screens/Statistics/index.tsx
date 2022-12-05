import { 
  Container, 
  StatisticsTitle,
  StatisticsBlock,
  StatisticsGroupBlock
} from './styles';

import { Header } from '@components/Header';
import { InfoBox } from '@components/InfoBox';

const infos = {
  daysOnDietInSequence: 22,
  meals: 109,
  mealsInDiet: 99,
  mealsOutOfDiet: 10,
}

export function Statistics() {
  return (
    <>
      <Header headerColor='inDiet'>
        <InfoBox 
          information='90,86%'
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
      </Container>
    </>
  )
}