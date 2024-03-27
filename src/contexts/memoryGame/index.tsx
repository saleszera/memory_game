import { createContext, useCallback, useEffect, useReducer } from 'react';

import { emojis } from '@/utils';

import recucers, { type ActionType } from './reducer';

export interface IMemoryGameState {
  items: string[][]; // 2D array of emojis
  flipped: string[];
  selectedItems: string[];
}

export interface IMemoryGameContext {
  state: IMemoryGameState;
  actions: {
    handleSelectItem: (
      selectedItem: string,
      itemIndex: number,
      rowIndex: number,
    ) => void;
    isFlipped: (item: string, itemIndex: number, rowIndex: number) => boolean;
  };
}

interface IMemoryGameDispatcher {
  type: ActionType;
  payload?: unknown;
}

export const MemoryGameContext = createContext<IMemoryGameContext>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as IMemoryGameContext,
);
export const MemoryGameDispatchContext = createContext<
  React.Dispatch<IMemoryGameDispatcher>
>(() => null);

const MemoryGameProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const [state, dispatch] = useReducer<
    React.Reducer<IMemoryGameState, IMemoryGameDispatcher>
  >(recucers, {
    items: [],
    flipped: [],
    selectedItems: [],
  });

  const { flipped, selectedItems } = state;

  const randomEmojis = useCallback(() => {
    const randomEmojis = [];
    const usedIndices = new Set();

    while (randomEmojis.length < 6) {
      const randomIndex = Math.floor(Math.random() * emojis.length);

      if (!usedIndices.has(randomIndex)) {
        randomEmojis.push(emojis[randomIndex]);

        usedIndices.add(randomIndex);
      }
    }

    return randomEmojis;
  }, [emojis]);

  const generateBoard = useCallback(() => {
    const emojiz = randomEmojis();
    const board = [...emojiz, ...emojiz].sort(() => Math.random() - 0.5);
    const items = [];

    while (board.length > 0) {
      items.push(board.splice(0, 4));
    }

    dispatch({
      type: 'setItems',
      payload: items,
    });
  }, [randomEmojis]);

  const isFlipped = useCallback(
    (item: string, itemIndex: number, rowIndex: number) => {
      const value = `${item}-${itemIndex}-${rowIndex}`;

      return flipped.includes(value) || selectedItems.includes(value);
    },
    [flipped, selectedItems],
  );

  const handleSelectItem = useCallback(
    (selectedItem: string, itemIndex: number, rowIndex: number) => {
      if (isFlipped(selectedItem, itemIndex, rowIndex)) {
        return;
      }

      dispatch({
        type: 'setFlipped',
        payload: `${selectedItem}-${itemIndex}-${rowIndex}`,
      });
    },
    [flipped, isFlipped],
  );

  const resetFlip = useCallback(() => {
    dispatch({
      type: 'resetFlip',
    });
  }, []);

  useEffect(() => {
    if (selectedItems.length < 12) {
      return;
    }

    const timeout = setTimeout(() => {
      dispatch({
        type: 'resetSelectedItems',
      });

      generateBoard();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedItems, generateBoard]);

  useEffect(() => {
    generateBoard();
  }, [generateBoard]);

  useEffect(() => {
    if (flipped.length < 2) {
      return;
    }

    const [firstItem, secondItem] = flipped;

    const [item1] = firstItem.split('-');
    const [item2] = secondItem.split('-');

    if (item1 === item2) {
      dispatch({
        type: 'setSelectedItems',
        payload: flipped,
      });

      resetFlip();
    } else {
      const timeout = setTimeout(() => {
        resetFlip();
      }, 250);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [flipped]);

  return (
    <MemoryGameContext.Provider
      value={{ state, actions: { handleSelectItem, isFlipped } }}
    >
      <MemoryGameDispatchContext.Provider value={dispatch}>
        {children}
      </MemoryGameDispatchContext.Provider>
    </MemoryGameContext.Provider>
  );
};

export default MemoryGameProvider;
