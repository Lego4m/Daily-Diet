import { Container, DatePickerContainer } from './styles';

import { Header } from '@components/Header';
import { InputBox } from '@components/InputBox';
import { Radio } from '@components/Radio';
import { Button } from '@components/Button';

export function EditMeal() {
  return (
    <>
      <Header title='Editar refeição' />

      <Container>
        <InputBox title='Nome' />

        <InputBox 
          title='Descrição'
          multiline
          numberOfLines={4}
          textAlignVertical='top'
          containerStyle={{ marginTop: 24 }}
        />

        <DatePickerContainer>
          <InputBox 
            title='Data'
            containerStyle={{ flexGrow: 1 }} 
          />

          <InputBox 
            title='Hora'
            containerStyle={{ marginLeft: 20, flexGrow: 1 }} 
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
          Salvar alterações 
        </Button>
      </Container>
    </>
  )
}