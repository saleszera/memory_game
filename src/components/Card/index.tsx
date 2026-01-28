import { TouchableOpacity, Text, View } from 'react-native';

interface ICardProps {
  emoji: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const Card = ({
  emoji,
  isFlipped = false,
  onFlip,
}: ICardProps): React.ReactElement => (
  <TouchableOpacity onPress={onFlip}>
    <View className='w-[110px] h-[110px] bg-accent_1 rounded-md shadow-md m-2'>
      {isFlipped && (
        <Text className='text-[66px] text-center m-auto'>{emoji}</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default Card;
