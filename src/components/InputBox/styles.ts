import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const Input = styled.TextInput`
  margin-top: 4px;

  padding: 14px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
`;  