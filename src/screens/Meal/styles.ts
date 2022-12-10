import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  }
}))`
  background-color: ${({ theme }) => theme.colors.gray_700};

  margin-top: -32px;
  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.xl}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const InfoTitle = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const InfoDescription = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
  `}
`;

export const TagsContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
  flex-direction: row;
`;

export const ButtonsContainer = styled.View`
  margin-top: auto;
`;

export const ModalTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const ModalButtonsContainer = styled.View`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
`;