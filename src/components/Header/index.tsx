import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container 
      backgroundStyle={headerColor} 
      style={{ paddingTop: insets.top + 24 }}
    >
      <NavigationContainer>
        <TouchableOpacity 
          activeOpacity={0.65}
          onPress={handleGoBack}
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