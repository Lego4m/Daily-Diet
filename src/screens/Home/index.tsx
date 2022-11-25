import { Image } from 'react-native';

import { Container, Header, PercentBox, ArrowUpRight, PercentualText, PercentualSubText } from './styles';

import { Button } from '@components/Button';

import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'

export function Home() {
  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Image source={avatar} />
      </Header>

      <PercentBox>
        <ArrowUpRight />

        <PercentualText>
          90,86%
        </PercentualText>

        <PercentualSubText>
          das refeições dentro da dieta
        </PercentualSubText>
      </PercentBox>

      <Button>
        Nova refeição
      </Button>
    </Container>
  );
}
