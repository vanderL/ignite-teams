import { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import * as Sc from './styles';

export function Players() {
  const [team, setTeam] = useState('TIme A');
  const [players, setPlayers] = useState([]);

  const playerTotal = useMemo(() => {
    return players.length;
  }, [players])

  return (
    <Sc.Container>
      <Header
        showBackButton
      />
      <Hightlight
        title='Nome da turma'
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



    </Sc.Container>
  )
}