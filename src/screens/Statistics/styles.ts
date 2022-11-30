import styled, { css } from 'styled-components/native';

import { ArrowLeft as ArrowLeftBase } from 'phosphor-react-native';

interface ContainerProps {
  isOnDiet: boolean
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  
  background: ${({ theme, isOnDiet }) => 
    isOnDiet ? theme.colors.green_light : theme.colors.red_light
  };
`;

export const Header = styled.View`
  padding: 64px 24px 0;
`;

interface BackIconProps {
  isOnDiet: boolean;
}

export const BackIcon = styled(ArrowLeftBase).attrs<BackIconProps>(({ theme, isOnDiet = true }) => ({
  color: isOnDiet ? theme.colors.green_dark : theme.colors.red_dark,
  size: 24,
}))<BackIconProps>``;

export const StatisticsContainer = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray_700};

  margin-top: 32px;
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
          return theme.colors.gray_600
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