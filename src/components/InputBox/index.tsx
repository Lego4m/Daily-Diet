import { TextInputProps, ViewProps } from 'react-native';

import { Container, Title, Input } from './styles';

interface InputBoxProps extends TextInputProps {
  title: string;
  containerStyle?: ViewProps['style'];
}

export function InputBox({ title, containerStyle = {}, ...rest }: InputBoxProps) {
  return (
    <Container style={containerStyle}>
      <Title>
        {title}
      </Title>

      <Input 
        {...rest}
      />
    </Container>
  )
}