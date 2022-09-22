import { Button } from '@components/Button/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import * as Sc from './styles';


export function NewGroup() {
  return (
    <Sc.Container>
      <Header
        showBackButton
      />
      <Sc.Content>
        <Sc.Icon />
        <Hightlight
          title="Nova turma"
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Button
          title='Criar'
        />
      </Sc.Content>
    </Sc.Container>
  );
}