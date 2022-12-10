import { useState } from 'react';

import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { InputBox } from '@components/InputBox';
import { Radio } from '@components/Radio';
import { DateInput } from '@components/DateInput';
import { Button } from '@components/Button';

import { mealCreate } from '@storage/meal/mealCreate';

import { Container, DatePickerContainer } from './styles';

export function NewMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isMealOnDiet, setIsMealOnDiet] = useState(true);
  const [date, setDate] = useState(new Date());
  
  async function handleNewMeal() {
    const data = {
      name, 
      description,
      isOnDiet: isMealOnDiet,
      date: date.toISOString(),
    }

    try {
      if (data.name.length < 1) {
        return Alert.alert('Adicionar refeição', 'Você deve inserir o nome da refeição!');
      }

      await mealCreate(data);
      navigation.navigate('feedback', { isMealOnDiet });
    } catch (error) {
      console.log(error);
    }
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
          onPress={handleNewMeal}
        >
          Cadastrar refeição
        </Button>
      </Container>
    </>
  )
}