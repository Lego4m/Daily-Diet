import { useState, useEffect } from 'react';
import { ViewProps } from 'react-native';

import { Container, Title, ButtonsContainer, Button, Ball, ButtonText } from './styles';

interface RadioProps {
  title: string;
  onChangeSelection: (value: boolean) => void;
  containerStyle?: ViewProps['style'];
}

export function Radio({ title, onChangeSelection, containerStyle = {} }: RadioProps) {
  const [mealIsOnDiet, setMealIsOnDiet] = useState(true);

  useEffect(() => {
    onChangeSelection(mealIsOnDiet);
  }, [mealIsOnDiet]);

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
          isSelected={mealIsOnDiet}
          onPress={() => setMealIsOnDiet(true)}
        >
          <Ball colorType='onDiet' />

          <ButtonText>
            Sim
          </ButtonText>
        </Button>

        <Button
          buttonType='secondary'
          isSelected={!mealIsOnDiet}
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