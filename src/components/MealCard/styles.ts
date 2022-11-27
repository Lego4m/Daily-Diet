import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;

  margin-bottom: 8px;
  padding: 14px 16px;

  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;

  align-items: center;
  flex-direction: row;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.xs}px;
    font-family: ${theme.font_family.bold};

    border-right-width: 1px;
    border-right-color: ${theme.colors.gray_400};
  `}

  margin-right: 12px;
  padding-right: 12px;
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
  `}
`;

interface BallProps {
  isOnDiet: boolean;
}

export const Ball = styled.View<BallProps>`
  width: 14px;
  height: 14px;
  margin-left: 12px;
  
  border-radius: 9999px;
  
  background: ${({ theme, isOnDiet }) => 
    isOnDiet ? theme.colors.green_mid : theme.colors.red_mid
  };
`;