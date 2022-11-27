import { TouchableHighlightProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { IconProps } from 'phosphor-react-native';

import { ButtonTypeStyleProps, Container, Title } from './styles';

interface ButtonProps extends TouchableHighlightProps {
  Icon?: React.FC<IconProps>;
  type?: ButtonTypeStyleProps;
}

export function Button({ type = 'primary', Icon, children, ...rest }: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      type={type} 
      {...rest}
    >
      <>
        { Icon && (
          <Icon 
            style={{ marginRight: 12 }}
            size={18}
            color={
              type === 'primary' ? theme.colors.white : theme.colors.gray_100
            }
          />
        ) }
        
        <Title type={type}>
          {children}
        </Title>
      </>
    </Container>
  )
}