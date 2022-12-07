import { ViewProps } from 'react-native';

import { Container, Title, ButtonsContainer, Button, Ball, ButtonText } from './styles';

interface RadioProps {
  title: string;
  value: boolean;
  onChangeSelection: (value: boolean) => void;
  containerStyle?: ViewProps['style'];
}

export function Radio({ 
  title,
  value,
  onChangeSelection,
  containerStyle = {} 
}: RadioProps) {
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
          isSelected={value}
          onPress={() => onChangeSelection(true)}
        >
          <Ball colorType='onDiet' />

          <ButtonText>
            Sim
          </ButtonText>
        </Button>

        <Button
          buttonType='secondary'
          isSelected={!value}
          onPress={() => onChangeSelection(false)}
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