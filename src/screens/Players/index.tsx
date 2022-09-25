import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
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
    </Sc.Container>
  )
}