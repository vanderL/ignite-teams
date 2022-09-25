import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import * as Sc from './styles';

export function Players() {
  return (
    <Sc.Container>
      <Header
        showBackButton
      />
      <Hightlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />

      <Sc.Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon
          icon='add'
        />
      </Sc.Form>

    </Sc.Container>
  )
}