import { ActivityIndicator } from 'react-native'

import * as Sc from './styles';

export function Loading() {
  return (
    <Sc.Container>
      <Sc.LoadIndicator
        color="red"
      />
    </Sc.Container>
  )
}