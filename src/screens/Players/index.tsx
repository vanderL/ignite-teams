import { useMemo, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native'

import * as Sc from './styles';

import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button/Button';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playersGetByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState<string>('');
  const [team, setTeam] = useState<string>('TIme A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const playerTotal = useMemo(() => {
    return players.length;
  }, [players])

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar');
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team
    }

    try {

      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam()

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possivel adicionar');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado')
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

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
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon
          icon='add'
          onPress={handleAddPlayer}
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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
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