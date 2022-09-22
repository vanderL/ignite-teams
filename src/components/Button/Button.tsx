import { TouchableOpacityProps } from 'react-native'
import * as Sc from './styles';
import { ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ type = "PRIMARY", title, ...rest }: Props) {
  return (
    <Sc.Container
      type={type}
      {...rest}
    >
      <Sc.Title>
        {title}
      </Sc.Title>
    </Sc.Container>
  )
}