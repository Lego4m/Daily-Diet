import { Modal as ModalBase, ModalProps } from 'react-native';

import { Container, Content } from './styles';

export function Modal({ children, ...rest }: ModalProps) {
  return (
    <ModalBase
      transparent
      statusBarTranslucent
      {...rest}
    >
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </ModalBase>
  )
}