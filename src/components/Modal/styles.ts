import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  
  padding: 0 24px;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};

  padding: 24px;
  border-radius: 8px;
`;