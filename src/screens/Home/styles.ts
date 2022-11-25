import styled, { css } from 'styled-components/native';

import { ArrowUpRight as Arrow } from 'phosphor-react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};

  padding: 64px 24px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

interface PercentProps {
  isOnDiet?: boolean;
}

export const PercentBox = styled.View<PercentProps>`
  background-color: ${({ theme, isOnDiet = true }) => 
    isOnDiet ? theme.colors.green_light : theme.colors.red_light
  };
  
  border-radius: 8px;

  padding: 20px 16px;
  margin-top: 36px;
`;

interface ArrowUpRight {
  isOnDiet?: boolean;
}

export const ArrowUpRight = styled(Arrow).attrs<ArrowUpRight>(({ theme, isOnDiet = true }) => ({
  color: isOnDiet ? theme.colors.green_dark : theme.colors.red_dark,
  size: 24,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PercentualText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.xxl}px;
    font-family: ${theme.font_family.bold};

    text-align: center;
  `}
`;

export const PercentualSubText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};

    text-align: center;
  `}
`;