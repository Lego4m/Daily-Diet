import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { InputBox } from '@components/InputBox';
import { Radio } from '@components/Radio';
import { Button } from '@components/Button';

import { Container, DatePickerContainer } from './styles';

export function NewMeal() {
  const navigation = useNavigation();
  
  function handleSaveMeal() {
    navigation.navigate('feedback', { isMealOnDiet: true })
  }

  return (
    <>
      <Header title='Nova refeição' />

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
          onPress={handleSaveMeal}
        >
          Cadastrar refeição
        </Button>
      </Container>
    </>
  )
}