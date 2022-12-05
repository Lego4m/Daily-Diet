import { TouchableOpacity } from 'react-native';

import { 
  Container, 
  NavigationContainer,
  NavigationTitle,
  PlaceholderView,
  GoBackIcon,
  HeaderColorStyleProp,
  ChildrenContainer
} from './styles';

interface HeaderProps {
  title?: string;
  headerColor?: HeaderColorStyleProp;
  children?: React.ReactNode;
}

export function Header({ title, headerColor = 'gray', children }: HeaderProps) {
  return (
    <Container backgroundStyle={headerColor}>
      <NavigationContainer>
        <TouchableOpacity 
          activeOpacity={0.65}
          onPress={() => {}}
        >
          <GoBackIcon iconColor={headerColor} />
        </TouchableOpacity>

        <NavigationTitle>
          {title}
        </NavigationTitle>

        <PlaceholderView />
      </NavigationContainer>
      
      { children && (
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      )}
    </Container>
  )
}