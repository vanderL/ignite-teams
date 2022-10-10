import * as Sc from './styles';

import { useTheme } from 'styled-components/native';

import { TextInputProps, TextInput } from 'react-native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Sc.Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}