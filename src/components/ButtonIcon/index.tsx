import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import * as Sc from './styles';
import { ButtonIconTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Sc.Container {...rest}>
      <Sc.Icon
        name={icon}
        type={type}
      />
    </Sc.Container>
  )
}