import { View } from 'react-native';

import { Card } from '@/components';
import { useMemoryGame } from '@/hooks/useMemoryGame';
import { StyledComponent } from 'nativewind';

const Board = (): React.JSX.Element => {
  const {
    state: { items },
    actions: { handleSelectItem, isFlipped },
  } = useMemoryGame();

  return (
    <StyledComponent
      component={View}
      className='bg-accent_2 h-[100%] w-[100%] flex-row flex items-center justify-center'
    >
      {items.map((row, rowIndex) => (
        <StyledComponent
          key={rowIndex}
          component={View}
          className='flex bg-transparent'
        >
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
        </StyledComponent>
      ))}
    </StyledComponent>
  );
};

export default Board;
