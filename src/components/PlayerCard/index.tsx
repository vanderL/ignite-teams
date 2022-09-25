import * as Sc from './styles';

import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Sc.Container>
      <Sc.Icon
        name="person"
      />
      <Sc.Name>
        {name}
      </Sc.Name>

      <ButtonIcon
        icon="close"
        type='SECONDARY'
        onPress={onRemove}
      />
    </Sc.Container>
  )
}