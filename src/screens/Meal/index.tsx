import { useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { format } from 'date-fns';

import { Pencil, Trash } from 'phosphor-react-native';

import { Meal as MealType } from 'src/types';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Tag } from '@components/Tag';
import { Modal } from '@components/Modal';

import { mealRemove } from '@storage/meal/mealRemove';

import {
  Container,
  MealTitle,
  InfoDescription,
  InfoTitle,
  TagsContainer,
  ButtonsContainer,
  ModalTitle,
  ModalButtonsContainer
} from './styles';

interface RouteParams {
  meal: MealType;
}

export function Meal() {
  const [excludeModalVisible, setExcludeModalVisible] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  function handleEditMeal() {
    navigation.navigate('editMeal', { meal })
  }

  async function handleRemoveMeal() {
    try {
      await mealRemove(meal.id);

      navigation.navigate('home');
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <Header 
        title='Refeição' 
        headerColor={meal.isOnDiet ? 'inDiet' : 'outOfDiet'}
      />

      <Container>
        <MealTitle>
          {meal.name}
        </MealTitle>

        <InfoDescription>
          {meal.description}
        </InfoDescription>

        <InfoTitle>
          Data e hora
        </InfoTitle>

        <InfoDescription>
          {format(new Date(meal.date), "dd/MM/yyyy 'às' HH:mm")}
        </InfoDescription>

        <TagsContainer>
          <Tag isOnDiet={meal.isOnDiet} />
        </TagsContainer>
        
        <ButtonsContainer>
          <Button icon={Pencil} onPress={handleEditMeal}>
            Editar refeição
          </Button>

          <Button 
            icon={Trash} 
            type='secondary'
            onPress={() => setExcludeModalVisible(true)}
            style={{ marginTop: 8 }}
          >
            Excluir refeição
          </Button>
        </ButtonsContainer>
      </Container>

      <Modal
        onRequestClose={() => setExcludeModalVisible(false)}
        visible={excludeModalVisible}
      >
        <ModalTitle>
          Deseja realmente excluir o registro da refeição?
        </ModalTitle>

        <ModalButtonsContainer>
          <Button 
            style={{ flex: 1 }} 
            onPress={() => setExcludeModalVisible(false)}
          >
            Cancelar
          </Button>

          <Button
            type='secondary'
            style={{ marginLeft: 12, flex: 1 }}
            onPress={handleRemoveMeal}
          >
            Sim, exluir
          </Button>
        </ModalButtonsContainer>
      </Modal>
    </>
  )
}