import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled.TouchableHighlight.attrs<Props>(({ theme, type }) => ({
  activeOpacity: 1,
  underlayColor: type === 'primary' ? 
    theme.colors.gray_100 : 
    theme.colors.gray_500,
}))<Props>`
  flex: 1;
  flex-direction: row;

  ${({ theme, type }) => css`
    background-color: ${
      type === 'primary' ? theme.colors.gray_200 : 'transparent'
    };

    border: ${type === 'primary' ? 0 : 1}px solid ${theme.colors.gray_100}; 
  `}

  border-radius: 6px;

  padding: 16px 24px;

  justify-content: center;
  align-items: center; 
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'primary' ? theme.colors.white : theme.colors.gray_100};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
  `};
`;