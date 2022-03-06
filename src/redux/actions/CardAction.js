import * as actions from "../constants/CardConstants";

export const addCard = (data) => (dispatch) => {
  var nData = {
    name: data.name,
    url: data.url,
    counter: 0,
    id: new Date().getTime(),
  };
  const array = localStorage.getItem("cards");
  const parsedArray = array ? JSON.parse(array) : [];
  const newArray = [...parsedArray, nData];
  localStorage.setItem("cards", JSON.stringify(newArray));
  dispatch({
    type: actions.CARD_ITEM_ADD,
    payload: newArray,
  });
};

export const getCards = () => async (dispatch) => {
  dispatch({ type: actions.GET_CARD_REQUEST });
  try {
    const data = localStorage.getItem('cards') 
                       ? JSON.parse(localStorage.getItem('cards'))
                       : {}
    dispatch({
      type: actions.GET_CARD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.GET_CARD_FAILED,
      payload: error.message,
    });
  }
};
