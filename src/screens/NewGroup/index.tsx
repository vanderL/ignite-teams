import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Sc from './styles';

import { Button } from '@components/Button/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';


export function NewGroup() {
  const [group, setGroup] = useState<string>('');

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', { group })
  }

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
          onChangeText={setGroup}
        />

        <Button
          title='Criar'
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Sc.Content>
    </Sc.Container>
  );
}