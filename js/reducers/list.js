
import type { Action } from '../actions/types';
import { SET_INDEX, SET_ZONE } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    'Zonas',
    'Categorias',
  ],
    selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  }
  return state;
}
