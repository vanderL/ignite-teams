import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import * as Sc from './styles'

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { Hightlight } from '@components/Hightlight';
import { Button } from '@components/Button/Button';

import { groupsGetAll } from '@storage/group/groupsGetAll';

// type RootParamList = {
//   groups: undefined;
//   new: undefined;
//   players: {
//     group: string;
//   }
// }

// type Props = {
//   navigation: NativeStackNavigationProp<RootParamList, 'groups'>
// }

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['turminha do bolinha']);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);

    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, [groups]))

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
        showsVerticalScrollIndicator={false}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />


    </Sc.Container>
  );
}
