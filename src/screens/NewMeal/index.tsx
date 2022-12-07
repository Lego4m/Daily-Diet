import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { InputBox } from '@components/InputBox';
import { Radio } from '@components/Radio';
import { Button } from '@components/Button';

import { Container, DatePickerContainer } from './styles';

export function NewMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isMealOnDiet, setIsMealOnDiet] = useState(true);
  
  function handleSaveMeal() {
    const data = {
      name, 
      description,
      isOnDiet: isMealOnDiet,
    }

    navigation.navigate('feedback', { isMealOnDiet });
  }

  return (
    <>
      <Header title='Nova refeição' />

      <Container>
        <InputBox title='Nome' value={name} onChangeText={setName} />

        <InputBox 
          title='Descrição'
          multiline
          numberOfLines={4}
          textAlignVertical='top'
          containerStyle={{ marginTop: 24 }}
          value={description}
          onChangeText={setDescription}
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
          value={isMealOnDiet}
          onChangeSelection={setIsMealOnDiet}
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