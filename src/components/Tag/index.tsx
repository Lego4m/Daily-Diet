import { Container, Ball, Title } from './styles';

interface TagProps {
  isOnDiet: boolean
}

export function Tag({ isOnDiet }: TagProps) {
  return (
    <Container>
      <Ball isOnDiet={isOnDiet} />

      <Title>
        {isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
      </Title>
    </Container>
  )
}