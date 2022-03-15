import * as actions from "../constants/CardConstants";

const initialState = {
  cards: [],
  searchResults:[],
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
    case actions.SORT_CARD_ASC:
      const sortAsc = action.payload.sort((a, b) =>
        b.counter - a.counter 
      );
      return {
        ...state,
        cards: sortAsc,
      };
    case actions.SORT_CARD_DESC:
      const sortDesc = action.payload.sort((a, b) =>
        a.counter - b.counter 
      );
      return {
        ...state,
        cards: sortDesc,
      };
    case actions.UP_CARD_VOTE:
      const counterUp = state.cards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            counter: item.counter + 1,
          };
        }
        return item;
      })
      const counterUpFilter = counterUp.sort((a, b) =>
        b.counter - a.counter
      );
      return {
        ...state,
        cards: counterUpFilter
      };
    case actions.DOWN_CARD_VOTE:
      const counterDown = state.cards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            counter: item.counter - 1,
          };
        }
        return item;
      })
      const counterDownFilter = counterDown.sort((a, b) =>
        a.counter - b.counter
      );
      return {
        ...state,
        cards: counterDownFilter
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
        searchResults: action.payload,
      };
    case actions.GET_CARD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SEARCH_CARD:
      return {
        ...state,
        cards:action.payload
      }
    default:
      return state;
  }
};
