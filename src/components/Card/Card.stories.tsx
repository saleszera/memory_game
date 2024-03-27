import React from 'react';
import { View } from 'react-native';

import type { Meta, StoryFn } from '@storybook/react';

import Card from '.'; // Adjust the import path as necessary

// Ensure your props interface is correctly imported or defined
interface ICardProps {
  emoji?: string;
  isFlipped: boolean;
  onPress: () => void;
}

const meta: Meta<ICardProps> = {
  title: 'Card',
  component: Card,
  decorators: [
    (Story: StoryFn<ICardProps>) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story isFlipped={false} onPress={() => {}} />
      </View>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'lightgray', value: '#f0f0f0' },
        { name: 'darkgray', value: '#333' },
      ],
    },
  },
};

export default meta;

// Default (Not Flipped) Story
export const Default: StoryFn<ICardProps> = (args) => <Card {...args} />;
Default.args = {
  isFlipped: false,
  onPress: () => {
    console.log('Card Pressed!');
  },
};

// Flipped Story
export const Flipped: StoryFn<ICardProps> = (args) => <Card {...args} />;
Flipped.args = {
  emoji: '🐶',
  isFlipped: true,
  onPress: () => {
    console.log('Card Pressed!');
  },
};
