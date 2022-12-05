import { useState } from 'react';

import { format } from 'date-fns';

import { Pencil, Trash } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Tag } from '@components/Tag';
import { Modal } from '@components/Modal';

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

export function Meal() {
  const [excludeModalVisible, setExcludeModalVisible] = useState(false);

  return (
    <>
      <Header 
        title='Refeição' 
        headerColor='inDiet'
      />

      <Container>
        <MealTitle>
          Sanduíche
        </MealTitle>

        <InfoDescription>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </InfoDescription>

        <InfoTitle>
          Data e hora
        </InfoTitle>

        <InfoDescription>
          {format(new Date(), "dd/MM/yyyy 'às' HH:mm")}
        </InfoDescription>

        <TagsContainer>
          <Tag isOnDiet={false} />
        </TagsContainer>
        
        <ButtonsContainer>
          <Button icon={Pencil}>
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
          <Button style={{ flex: 1 }}>
            Cancelar
          </Button>

          <Button
            type='secondary'
            style={{ marginLeft: 12, flex: 1 }}
          >
            Sim, exluir
          </Button>
        </ModalButtonsContainer>
      </Modal>
    </>
  )
}