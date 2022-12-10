import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
  }
}))`
  background-color: ${({ theme }) => theme.colors.gray_700};

  margin-top: -32px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const StatisticsTitle = styled.Text`
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