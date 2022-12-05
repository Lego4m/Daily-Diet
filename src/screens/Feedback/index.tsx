import { Image } from 'react-native';

import { Button } from '@components/Button';

import { Container, Title, Description, DescriptionBold } from './styles';

import isOnDietImage from '@assets/isOnDietIllustration.png'
import outOfDietImage from '@assets/outOfDietIllustration.png'

const isOnDiet = true;

export function Feedback() {
  return (
    <Container>
      {isOnDiet ? (
        <>
          <Title isOnDiet>
            Continue assim!
          </Title>

          <Description>
            Você continua <DescriptionBold>dentro da dieta</DescriptionBold>. Muito bem!
          </Description>

          <Image 
            source={isOnDietImage}
          />
        </>
      ) : (
        <>
          <Title isOnDiet={false}>
            Que pena!
          </Title>

          <Description>
            Você <DescriptionBold>saiu da dieta</DescriptionBold> dessa vez, mas continue se esforçando e não desista!
          </Description>

          <Image 
            source={outOfDietImage}
          />
        </>
      )}

      <Button
        style={{ marginTop: 32 }}
      >
        Ir para a página inicial
      </Button>
    </Container>
  )
}