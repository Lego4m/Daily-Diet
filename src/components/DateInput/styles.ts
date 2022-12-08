import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.65
}))`
  margin-top: 4px;

  padding: 14px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
  `}
`;