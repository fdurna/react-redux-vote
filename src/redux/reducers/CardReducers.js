import * as actions from '../constants/CardConstants';

const initialState = {
    cards:[],
}

export const CardReducers = (state = initialState,action) => {
    switch(action.type){
        case actions.CARD_ITEM_ADD:
            return {
                ...state,
                cards:action.payload
            }
        default:
            return state;
    }
}