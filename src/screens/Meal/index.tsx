import { format } from 'date-fns';

import { Pencil, Trash } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Tag } from '@components/Tag';

import {
  Container,
  MealInformationsContainer,
  MealTitle,
  InfoDescription,
  InfoTitle,
  TagsContainer,
  ButtonsContainer
} from './styles';

export function Meal() {
  return (
    <Container>
      <Header 
        title='Refeição' 
        headerColor='inDiet'
      />

      <MealInformationsContainer>
        <MealTitle>
          Sanduíche
        </MealTitle>

        <InfoDescription>
          Sanduíche de pão integral com atuam e salada de alface e tomate
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
            style={{ marginTop: 8 }}
          >
            Excluir refeição
          </Button>
        </ButtonsContainer>
      </MealInformationsContainer>
    </Container>
  )
}