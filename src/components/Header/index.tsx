import * as Sc from './styles';
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Sc.Container>
      {
        showBackButton &&
        <Sc.BackButton>
          <Sc.BackIcon />
        </Sc.BackButton>
      }
      <Sc.Logo
        source={logoImg}
      />
    </Sc.Container>
  )
}