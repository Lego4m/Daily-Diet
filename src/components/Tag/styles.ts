import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_600};

  flex-direction: row;

  padding: 8px 16px;
  border-radius: 1000px;

  align-items: center;
`;

interface BallProps {
  isOnDiet: boolean;
}

export const Ball = styled.View<BallProps>`
  width: 8px;
  height: 8px;

  border-radius: 9999px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.colors.green_dark : theme.colors.red_dark
  };
`;

export const Title = styled.Text`
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
  `}
`;