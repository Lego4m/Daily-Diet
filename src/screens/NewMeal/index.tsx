import { Container, DatePickerContainer } from './styles';

import { Header } from '@components/Header';
import { InputBox } from '@components/InputBox';
import { Radio } from '@components/Radio';
import { Button } from '@components/Button';

export function NewMeal() {
  return (
    <>
      <Header 
        title='Nova Refeição'
      />

      <Container>
        <InputBox 
          title='Nome'
        />

        <InputBox 
          title='Descrição'
          multiline
          numberOfLines={4}
          textAlignVertical='top'
          containerProps={{ style: { marginTop: 24 } }}
        />

        <DatePickerContainer>
          <InputBox 
            title='Data'
            containerProps={{ style: { flexGrow: 1 } }} 
          />

          <InputBox 
            title='Hora'
            containerProps={{ style: { marginLeft: 20, flexGrow: 1 } }} 
          />
        </DatePickerContainer>

        <Radio
          title='Está dentro da dieta?'
          onChangeSelection={() => {}}
          containerStyle={{ marginBottom: 24 }}
        />

        <Button
          style={{ marginTop: 'auto' }}
        >
          Cadastrar Refeição
        </Button>
      </Container>
    </>
  )
}