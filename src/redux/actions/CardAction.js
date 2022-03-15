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
    const data = localStorage.getItem("cards")
      ? JSON.parse(localStorage.getItem("cards"))
      : {};
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

export const removeCard = (link) => (dispatch) => {
  let items = JSON.parse(localStorage.getItem("cards"));
  const filtered = items.filter(item => item.id !== link);
  localStorage.setItem("cards", JSON.stringify(filtered));
  console.log(filtered)
  if (items.length === 0) {
    localStorage.removeItem("cards");
  }
  dispatch({
    type: actions.CARD_ITEM_REMOVE,
    payload: filtered,
  });
};

export const sortCardAsc = () => (dispatch,getState) => {
  const {CardReducers} = getState();
  dispatch({
      type: actions.SORT_CARD_ASC,
      payload:CardReducers.cards
    })
}

export const sortCardDesc = () => (dispatch,getState) => {
  const {CardReducers} = getState();
  dispatch({ 
    type: actions.SORT_CARD_DESC,
    payload:CardReducers.cards
  })
}

export const upCardVote = (id) => (dispatch) => {
  let items = JSON.parse(localStorage.getItem("cards"));
  items.map((item) =>{
    if(item.id === id){
      item.counter++;
    }
  })
  localStorage.setItem('cards', JSON.stringify(items));
  dispatch({ 
    type: actions.UP_CARD_VOTE,
    payload:{id}
  })
}

export const downCardVote = (id) => (dispatch) => {
  let items = JSON.parse(localStorage.getItem("cards"));
  items.map((item) => {
    if(item.id === id){
      item.counter--;
    }
  })
  localStorage.setItem('cards', JSON.stringify(items));
  dispatch({ 
    type: actions.DOWN_CARD_VOTE,
    payload:{id}
  })
}

export const searchCard = (query) => async(dispatch,getState) => {
  const {CardReducers} = getState();
  const searchResults = CardReducers.searchResults.filter((card)=>
    card.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(searchResults)
  dispatch({
    type:actions.SEARCH_CARD,
    payload:searchResults
  })
}