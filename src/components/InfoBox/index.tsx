import { Container, InformationText, DescriptionText } from './styles';

export type infoBoxInformationFontSize = 'xxl' | 'xl';

interface InfoBoxProps {
  information: string;
  description: string;
  informationFontSize?: infoBoxInformationFontSize;
}

export function InfoBox({
  information,
  description,
  informationFontSize = 'xl'
}: InfoBoxProps) {
  return (
    <Container>
      <InformationText fontSize={informationFontSize}>
        {information}
      </InformationText>

      <DescriptionText>
        {description}
      </DescriptionText>
    </Container>
  )
}