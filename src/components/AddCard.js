import React  from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../redux/actions/CardAction';



function AddCard() {
  const dispathch = useDispatch();
  const {cards} = useSelector((state) => state.CardReducers);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispathch(addCard(data))
  }
  console.log(cards)
  return (
    <>
    <div className="add-item">
        <Link to="/" className="return list">
            <i className="fa fa-solid fa-arrow-left-long"></i>
            <span>Return To List</span>
        </Link>
    </div>
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input {...register("name")} className="form-control" type="text" name="name" placeholder=""/>
        </div>
        <div className="form-group">
          <label>Url</label>
          <input {...register("url")} className="form-control" type="text" name="url" placeholder=""/>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit"/>
      </form>
    </div>
    </>
  )
}

export default AddCard