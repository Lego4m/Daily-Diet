import { Container, DatePickerContainer, EditorContainer } from './styles';

import { Header } from '@components/Header';
import { InputBox } from '@components/InputBox';

export function NewMeal() {
  return (
    <Container>
      <Header 
        title='Editar Refeição'
      />
      <EditorContainer>
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
          <InputBox title='Data'  />

          <InputBox 
            title='Hora'
            containerProps={{ style: { marginLeft: 20 } }} 
          />
        </DatePickerContainer>
      </EditorContainer>
    </Container>
  )
}