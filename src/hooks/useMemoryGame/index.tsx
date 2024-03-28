import { useContext } from 'react';

import {
  type IMemoryGameContext,
  MemoryGameContext,
  MemoryGameDispatchContext,
} from '@/contexts/memoryGame';

const useMemoryGame = (): IMemoryGameContext => {
  const contexts = {
    ...useContext(MemoryGameContext),
    ...useContext(MemoryGameDispatchContext),
  };

  if (Object.values(contexts).some((context) => context === undefined)) {
    throw new Error('useMemoryGame must be used within MemoryGameProvider');
  }

  return contexts;
};

export { useMemoryGame };
