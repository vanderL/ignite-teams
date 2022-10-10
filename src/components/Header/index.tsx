import { useNavigation } from '@react-navigation/native';
import * as Sc from './styles';
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('groups');
  }

  return (
    <Sc.Container>
      {
        showBackButton &&
        <Sc.BackButton onPress={handleGoHome}>
          <Sc.BackIcon />
        </Sc.BackButton>
      }
      <Sc.Logo
        source={logoImg}
      />
    </Sc.Container>
  )
}