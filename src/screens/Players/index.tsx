import { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import * as Sc from './styles';

import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button/Button';

type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('TIme A');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const playerTotal = useMemo(() => {
    return players.length;
  }, [players])

  return (
    <Sc.Container>
      <Header
        showBackButton
      />
      <Hightlight
        title={group}
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

      <Sc.HeaderList>
        <FlatList
          data={['TIme A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}

          horizontal
        />

        <Sc.NumberOfPlayers>
          {playerTotal}
        </Sc.NumberOfPlayers>

      </Sc.HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => console.log(item)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message='Sem jogadores nesse time'
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          [
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]
        }
      />

      <Button
        title='Remover Turma'
        type="SECONDARY"
      />
    </Sc.Container>
  )
}