import { StyleSheet, Text, View } from 'react-native';

import * as Sentry from '@sentry/react-native';
import { StatusBar } from 'expo-status-bar';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  });
}

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
