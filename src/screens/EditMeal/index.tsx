import { useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Meal } from '../../types';

import { Header } from '@components/Header';
import { InputBox } from '@components/InputBox';
import { Radio } from '@components/Radio';
import { DateInput } from '@components/DateInput';
import { Button } from '@components/Button';

import { Container, DatePickerContainer } from './styles';

interface RouteParams {
  meal: Meal;
}

export function EditMeal() {
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [isMealOnDiet, setIsMealOnDiet] = useState(meal.isOnDiet);
  const [date, setDate] = useState(new Date(meal.date));

  function handleSaveEditions() {
    const data = {
      name, 
      description,
      isOnDiet: isMealOnDiet,
      date
    }

    navigation.navigate('home');
  }

  return (
    <>
      <Header title='Editar refeição' />

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
          <DateInput
            title='Data'
            value={date}
            onChange={setDate}
            mode='date'
          />

          <DateInput 
            title='Hora'
            value={date}
            onChange={setDate}
            mode='time'
            containerStyle={{ marginLeft: 20 }} 
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
          onPress={handleSaveEditions}
        >
          Salvar alterações 
        </Button>
      </Container>
    </>
  )
}