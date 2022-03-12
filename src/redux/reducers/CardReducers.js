import * as actions from "../constants/CardConstants";

const initialState = {
  cards: [],
};

export const CardReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.CARD_ITEM_ADD:
      return {
        ...state,
        cards: action.payload,
      };
    case actions.CARD_ITEM_REMOVE:
      return {
        ...state,
        cards: action.payload,
      };
    case actions.GET_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };
    case actions.GET_CARD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
