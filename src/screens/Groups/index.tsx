import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles'

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text>To na home pai</Text>
      <StatusBar style="auto" />
    </View>
  );
}
