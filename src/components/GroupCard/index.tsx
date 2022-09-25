import { TouchableOpacityProps } from 'react-native';

import * as Sc from './styles'

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Sc.Container {...rest}>
      <Sc.Icon />
      <Sc.Title>
        {title}
      </Sc.Title>
    </Sc.Container>
  )
}