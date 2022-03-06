import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../redux/actions/CardAction';

function ListCard() {
    const dispatch = useDispatch();
    const {cards,loading} = useSelector((state) => state.CardReducers);
    
    useEffect(()=>{
        dispatch(getCards());
        console.log(cards)
    },[dispatch])

  return (
    <>
      <div className="form-group select-wrapper">
        <select className="form-control">
          <option value="">Order by</option>
          <option value="desc">Most Voted (Z -{">"} A)</option>
          <option value="asc">Less Voted (A -{">"} Z)</option>
        </select>
      </div>
      <div className="card-list">
        <div className="card-point">
          <strong>{cards.counter}</strong>
          <span>VOTES</span>
        </div>
        <div className="card-item">
          <div className="top">
            <div className="card-name">{cards.name}</div>
            <div className="card-url">
              <a target="_blank">{cards.url}</a>
            </div>
          </div>
          <div className="bottom">
            <a className="up" >
              <i className="fas fa-arrow-up"></i>
              <span>Up Vote</span>
            </a>
            <a className="down">
              <i className="fas fa-arrow-down"></i> 
              <span>Up Down</span>
            </a>
            <a className="remove">
              <i className="fas fa-minus-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;
