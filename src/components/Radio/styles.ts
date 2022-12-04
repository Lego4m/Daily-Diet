import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

interface ButtonProps {
  buttonType: 'primary' | 'secondary';
  isSelected: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  padding: 16px;

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme, buttonType, isSelected }) => css`
    background-color: ${
      isSelected ? (
        buttonType === 'primary' ? (
          theme.colors.green_light
        ) : (
          theme.colors.red_light
        )
      ) : (
        theme.colors.gray_600
      )
    };

    border: 1px solid ${
      isSelected ? (
        buttonType === 'primary' ? (
          theme.colors.green_dark
        ) : (
          theme.colors.red_dark
        )
      ) : (
        theme.colors.gray_600
      )
    }
  `}
`;

interface BallProps {
  colorType: 'onDiet' | 'outOfDiet';
}

export const Ball = styled.View<BallProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;

  margin-right: 8px;

  background-color: ${({ theme, colorType }) =>
    colorType === 'onDiet' ? 
      theme.colors.green_dark :
      theme.colors.red_dark
  };
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `}
`;
