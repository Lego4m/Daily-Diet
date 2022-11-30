import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};
  flex: 1;
`;

export const StatisticsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};

  margin-top: -32px;
  padding: 0 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const StatisticsTitle = styled.Text`
  margin-top: 32px;
  margin-bottom: 24px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `}
`;

interface StatisticsBlockProps {
  backgroundStyle?: 'gray' | 'green' | 'red';
}

export const StatisticsBlock = styled.View<StatisticsBlockProps>`
  background-color: ${({ theme, backgroundStyle }) => {
      switch (backgroundStyle) {
        case 'gray':
          return theme.colors.gray_600;
        case 'green':
          return theme.colors.green_light;
        case 'red':
          return theme.colors.red_light;
        default:
          return theme.colors.gray_600;
      }
    }
  };

  border-radius: 8px;
  padding: 16px;
`;

export const StatisticsGroupBlock = styled.View`
  flex-direction: row;
`;