import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};
  flex: 1;
`;

export const EditorContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};

  margin-top: -32px;
  padding: 40px 24px 0 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const DatePickerContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  flex-direction: row;
`;