import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards , sortCardDesc,sortCardAsc} from "../redux/actions/CardAction";
import CardDetail from './CardDetail'

function ListCard() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.CardReducers);
  const [sort,setSort] = useState('asc')
  useEffect(() => {
    dispatch(getCards());
    if(sort === 'desc'){
      dispatch(sortCardDesc())
    }
    if(sort === 'asc'){
      dispatch(sortCardAsc())
    }
  }, [sort,dispatch]);

  return (
    <>
      <div className="form-group select-wrapper">
        <select onChange={(e) => setSort(e.target.value)} className="form-control">
          <option value="">Order by</option>
          <option value="asc">Most Voted </option>
          <option value="desc">Less Voted</option>
        </select>
      </div>
      {cards.map((item) => (
        <CardDetail item={item} key={item.id} />
      ))}
    </>
  );
}

export default ListCard;
