import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
  }
}))`
  background-color: ${({ theme }) => theme.colors.gray_700};

  margin-top: -32px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const DatePickerContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  flex-direction: row;
`;