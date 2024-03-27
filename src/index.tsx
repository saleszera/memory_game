import { MemoryGameProvider } from '@/contexts';
import { StatusBar } from 'expo-status-bar';

import { Board } from './screens';

export const Game = (): React.ReactElement => (
  <>
    <StatusBar style='dark' />
    <MemoryGameProvider>
      <Board />
    </MemoryGameProvider>
  </>
);
