import { type IMemoryGameState } from '.';

export type ActionType =
  | 'setItems'
  | 'setFlipped'
  | 'setSelectedItems'
  | 'resetFlip'
  | 'resetSelectedItems';

const memoryGameReducer: AppReducer<IMemoryGameState, ActionType> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'setItems': {
      return {
        ...state,
        items: action.payload,
      };
    }
    case 'setFlipped': {
      return {
        ...state,
        flipped: [...state.flipped, action.payload],
      };
    }
    case 'resetFlip': {
      return {
        ...state,
        flipped: [],
      };
    }
    case 'setSelectedItems': {
      return {
        ...state,
        selectedItems: [...state.selectedItems, ...action.payload],
      };
    }
    case 'resetSelectedItems': {
      return {
        ...state,
        selectedItems: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default memoryGameReducer;
