import { TouchableHighlightProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { IconProps } from 'phosphor-react-native';

import { ButtonTypeStyleProps, Container, Content, Title } from './styles';

interface ButtonProps extends TouchableHighlightProps {
  Icon?: React.FC<IconProps>;
  type?: ButtonTypeStyleProps;
}

export function Button({ type = 'primary', Icon, children }: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      type={type}
    >
      <Content>
        { Icon && (
          <Icon 
            style={{ marginRight: 12 }}
            size={18}
            color={theme.colors.white}
          />
        ) }
        
        <Title>
          {children}
        </Title>
      </Content>
    </Container>
  )
}