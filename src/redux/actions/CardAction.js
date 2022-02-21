import * as actions from '../constants/CardConstants';


export const addCard = (data) => (dispatch) =>  {
    var nData = { 
      name:data.name, 
      url:data.url, 
      counter:0,
      id:(new Date()).getTime()
    }
    const array = localStorage.getItem("cards");
    const parsedArray = array ? JSON.parse(array) : [];
    const newArray = [...parsedArray, nData];
    localStorage.setItem("cards", JSON.stringify(newArray))
    dispatch({
        type:actions.CARD_ITEM_ADD,
        payload:newArray
    })
}