import styled, { css } from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';

export type HeaderColorStyleProp = 'gray' | 'inDiet' | 'outOfDiet';

interface ContainerProps {
  backgroundStyle: HeaderColorStyleProp;
}

export const Container = styled.View<ContainerProps>`
  padding: 0 24px 56px;

  background-color: ${({ theme, backgroundStyle }) => {
      switch (backgroundStyle) {
        case 'gray':
          return theme.colors.gray_500;
        case 'inDiet':
          return theme.colors.green_light;
        case 'outOfDiet':
          return theme.colors.red_light;
      }
    }
  };
`;

export const NavigationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationTitle = styled.Text`
  flex: 1;
  padding: 0 12px;
  
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`;

interface BackIconProps {
  iconColor: HeaderColorStyleProp;
}

export const GoBackIcon = styled(ArrowLeft).attrs<BackIconProps>(({ theme, iconColor }) => ({
  color: 
    iconColor === 'gray' ? 
      (theme.colors.gray_200) : 
      (iconColor === 'inDiet' ? theme.colors.green_dark : theme.colors.red_dark),
  size: 24,
}))<BackIconProps>``;

export const PlaceholderView = styled.View`
  width: 24px;
  height: 24px;
`;

export const ChildrenContainer = styled.View`
  padding-bottom: 10px;
`;