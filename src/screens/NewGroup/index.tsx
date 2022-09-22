import { Button } from '@components/Button/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
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

        <Input />

        <Button
          title='Criar'
          style={{ marginTop: 20 }}
        />
      </Sc.Content>
    </Sc.Container>
  );
}