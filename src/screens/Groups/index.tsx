
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { Hightlight } from '@components/Hightlight';
import { useState } from 'react';
import { FlatList } from 'react-native';

import * as Sc from './styles'
import { Button } from '@components/Button/Button';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Sc.Container>
      <Header />

      <Hightlight
        title={'Turmas'}
        subtitle={'Jogue com a sua turma'}
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => console.log(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal cadastrar a primeira turma?' />
        )}
      />

      <Button
        title='Criar nova turma'
      />


    </Sc.Container>
  );
}
