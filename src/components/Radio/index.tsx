import { useState, useEffect } from 'react';
import { ViewProps } from 'react-native';

import { Container, Title, ButtonsContainer, Button, Ball, ButtonText } from './styles';

interface RadioProps {
  title: string;
  onChangeSelection: (value: boolean) => void;
  containerStyle: ViewProps['style']
}

export function Radio({ title, onChangeSelection, containerStyle = {} }: RadioProps) {
  const [MealIsOnDiet, setMealIsOnDiet] = useState(true);

  useEffect(() => {
    onChangeSelection(MealIsOnDiet);
  }, [MealIsOnDiet]);

  return (
    <Container
      style={containerStyle}
    >
      <Title>
        {title}
      </Title>

      <ButtonsContainer>
        <Button
          buttonType='primary'
          isSelected={MealIsOnDiet}
          onPress={() => setMealIsOnDiet(true)}
        >
          <Ball colorType='onDiet' />

          <ButtonText>
            Sim
          </ButtonText>
        </Button>

        <Button
          buttonType='secondary'
          isSelected={!MealIsOnDiet}
          onPress={() => setMealIsOnDiet(false)}
          style={{ marginLeft: 8 }}
        >
          <Ball colorType='outOfDiet' />

          <ButtonText>
            Não
          </ButtonText>
        </Button>
      </ButtonsContainer>
    </Container>
  )
}