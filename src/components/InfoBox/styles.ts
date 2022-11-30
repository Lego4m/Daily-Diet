import styled, { css } from 'styled-components/native';

import { infoBoxInformationFontSize } from '.';

export const Container = styled.View``;

interface InformationTextProps {
  fontSize: infoBoxInformationFontSize;
}

export const InformationText = styled.Text<InformationTextProps>`
  text-align: center;

  ${({ theme, fontSize }) => css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size[fontSize]}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const DescriptionText = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
  `}
`;