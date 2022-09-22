import { TextInputProps } from 'react-native'
import * as Sc from './styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <Sc.Container
      {...rest}
    />
  )
}