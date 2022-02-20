import React , {useState} from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function AddItem() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (data) => {
    var nData = [{ 
      name:data.name, 
      url:data.url, 
      counter:0,
      id:(new Date()).getTime()
    }]
    const array = localStorage.getItem("items");
    const parsedArray = array ? JSON.parse(array) : [];
    const newArray = [...parsedArray, nData];
    localStorage.setItem("items", JSON.stringify(newArray))
  }

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
          <input {...register("url")} className="form-control" type="text" name="name" placeholder=""/>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit"/>
      </form>
      <p>{data}</p>
    </div>
    </>
  )
}

export default AddItem