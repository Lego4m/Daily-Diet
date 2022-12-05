import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};

  padding: 24px;

  justify-content: center;
  align-items: center;
`;

interface TitleProps {
  isOnDiet: boolean;
}

export const Title = styled.Text<TitleProps>`
  text-align: center;

  ${({ theme, isOnDiet }) => css`
    color: ${isOnDiet ? theme.colors.green_dark : theme.colors.red_dark};
    font-size: ${theme.font_size.xl}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const Description = styled.Text`
  text-align: center;

  margin-top: 8px;
  margin-bottom: 32px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
  `}
`;

export const DescriptionBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
  `}
`;