import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../redux/actions/CardAction";
import CardDetail from './CardDetail'

function ListCard() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.CardReducers);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <>
      <div className="form-group select-wrapper">
        <select className="form-control">
          <option value="">Order by</option>
          <option value="desc">Most Voted (Z -{">"} A)</option>
          <option value="asc">Less Voted (A -{">"} Z)</option>
        </select>
      </div>
      {cards.map((item) => (
        <CardDetail item={item} key={item.id} />
      ))}
    </>
  );
}

export default ListCard;
