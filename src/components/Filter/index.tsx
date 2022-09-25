import { TouchableOpacityProps } from 'react-native';
import * as Sc from './styles';

type Props = TouchableOpacityProps & Sc.FilterStyleProps & {
  title: string
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Sc.Container
      isActive={isActive}
      {...rest}
    >
      <Sc.Title>
        {title}
      </Sc.Title>
    </Sc.Container>
  )
}