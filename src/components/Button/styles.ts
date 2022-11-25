import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled.TouchableHighlight<Props>`
  flex: 1;
  
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) => 
    type === 'primary' ? theme.colors.gray_200 : 'transparent'
  };
  
  border-radius: 6px;

  padding: 16px 24px;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `};
`;