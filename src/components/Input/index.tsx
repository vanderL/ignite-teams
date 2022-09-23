import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native';
import * as Sc from './styles';

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();
  return (
    <Sc.Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}