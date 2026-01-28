import { View } from 'react-native';

import { Card } from '@/components';
import { useMemoryGame } from '@/hooks/useMemoryGame';

const Board = (): React.JSX.Element => {
  const {
    state: { items },
    actions: { handleSelectItem, isFlipped },
  } = useMemoryGame();

  return (
    <View className='bg-accent_2 h-[100%] w-[100%] flex-row flex items-center justify-center'>
      {items.map((row, rowIndex) => (
        <View key={rowIndex} className='flex bg-transparent'>
          {row.map((item, itemIndex) => (
            <Card
              key={itemIndex}
              isFlipped={isFlipped(item, itemIndex, rowIndex)}
              emoji={item}
              onFlip={() => {
                handleSelectItem(item, itemIndex, rowIndex);
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
