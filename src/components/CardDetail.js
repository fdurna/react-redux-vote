import React from "react";
import { useDispatch } from "react-redux";
import { removeCard , upCardVote , downCardVote } from "../redux/actions/CardAction";


function CardDetail({item}) {
    const dispatch = useDispatch();
    const onRemove = (link) =>  dispatch(removeCard(link))
    const upVote = (Id) => dispatch(upCardVote(Id));
    const downVote = (Id) => dispatch(downCardVote(Id))
    const Id = item.id;
  return (
    <div className="card-list" >
      <div className="card-point">
        <strong>{item.counter}</strong>
        <span>VOTES</span>
      </div>
      <div className="card-item">
        <div className="top">
          <div className="card-name">{item.name}</div>
          <div className="card-url">
            <a target="_blank" href="/#">{item.url}</a>
          </div>
        </div>
        <div className="bottom">
          <a className="up" href={void(0)} onClick={() => upVote(Id)}>
            <i className="fas fa-arrow-up"></i>
            <span>Up Vote</span>
          </a>
          <a className="down" href={void(0)} onClick={() => downVote(Id)}>
            <i className="fas fa-arrow-down"></i>
            <span>Up Down</span>
          </a>
          <a className="remove" onClick={() => onRemove(item.id)}>
            <i className="fas fa-minus-circle"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
