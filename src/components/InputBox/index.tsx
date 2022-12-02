import { TextInputProps, ViewProps } from 'react-native';

import { Container, Title, Input } from './styles';

interface InputBoxProps extends TextInputProps {
  title: string;
  containerProps?: ViewProps;
}

export function InputBox({ title, containerProps, ...rest }: InputBoxProps) {
  return (
    <Container {...containerProps}>
      <Title>
        {title}
      </Title>

      <Input 
        {...rest}
      />
    </Container>
  )
}