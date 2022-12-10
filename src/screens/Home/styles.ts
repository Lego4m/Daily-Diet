import styled, { css } from 'styled-components/native';

import { ArrowUpRight } from 'phosphor-react-native';
import { SectionList } from 'react-native';

import { Meal } from 'src/types';

export const Container = styled(SectionList<Meal, { sectionDate: string }>).attrs(() => ({
  showsVerticalScrollIndicator: false,
  ListHeaderComponentStyle: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 88,
  }
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};

  padding: 64px 24px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

interface PercentBoxProps {
  isOnDiet: boolean;
}

export const PercentBox = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.65,
}))<PercentBoxProps>`
  background-color: ${({ theme, isOnDiet }) => 
    isOnDiet ? theme.colors.green_light : theme.colors.red_light
  };
  
  border-radius: 8px;

  padding: 20px 16px;
  margin-top: 36px;
`;

interface PercentBoxArrowProps {
  isOnDiet: boolean;
}

export const PercentBoxArrow = styled(ArrowUpRight).attrs<PercentBoxArrowProps>(({ theme, isOnDiet }) => ({
  color: isOnDiet ? theme.colors.green_dark : theme.colors.red_dark,
  size: 24,
}))<PercentBoxArrowProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const NewMealTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
  `}
`;

export const MealSectionHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.bold};
  `}

  margin-top: 32px;
  margin-bottom: 8px;
`;