
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';

import * as Sc from './styles'

export default function Groups() {
  return (
    <Sc.Container>
      <Header />
      <Hightlight
        title={'Turmas'}
        subtitle={'Jogue com a sua turma'}
      />
    </Sc.Container>
  );
}
