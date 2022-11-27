import { TouchableOpacityProps } from 'react-native';
import { format } from 'date-fns';

import { Meal } from '../../types';

import { Container, Hour, Title, Ball } from './styles';

interface MealCardProps extends TouchableOpacityProps {
  meal: Meal;
}

export function MealCard({ meal, ...rest }: MealCardProps) {
  return (
    <Container
      activeOpacity={0.65}
      {...rest}
    >
      <Hour>
        {format(new Date(meal.date), 'HH:mm')}
      </Hour>

      <Title>
        {meal.name}
      </Title>

      <Ball isOnDiet={meal.isOnDiet} />
    </Container>
  )
}