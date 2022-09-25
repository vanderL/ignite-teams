import * as Sc from './styles';

import { Button } from '@components/Button/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';


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

        <Input
          placeholder='Nome da turma'
        />

        <Button
          title='Criar'
          style={{ marginTop: 20 }}
          onPress={() => console.log('vai')}
        />
      </Sc.Content>
    </Sc.Container>
  );
}