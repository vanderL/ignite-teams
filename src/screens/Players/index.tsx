import { useMemo, useState, useEffect, useRef } from 'react';
import { FlatList, TextInput, Alert } from 'react-native';
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
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playersGetByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState<string>('');
  const [team, setTeam] = useState<string>('TIme A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

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
      fetchPlayersByTeam();

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possivel adicionar');
      }
    } finally {
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('');
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

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam();

    } catch (error) {
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa');
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
          inputRef={newPlayerNameInputRef}
          placeholder='Nome da pessoa'
          value={newPlayerName}
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
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
            onRemove={() => handleRemovePlayer(item.name)}
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