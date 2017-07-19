import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const intialState = {
  selectedGif: null,
  modalIsOpen: false
};

export default function modal(state = intialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedGif: action.gif.selectedGif
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedGif: null
      };
    default:
       return state;
  }
}
