import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCards,
  sortCardDesc,
  sortCardAsc,
  searchCard,
} from "../redux/actions/CardAction";
import CardDetail from "./CardDetail";
import Paginate from "./Paginate";

function ListCard() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.CardReducers);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    dispatch(getCards());
    dispatch(searchCard(search));
    if (sort === "desc") {
      dispatch(sortCardDesc());
    }
    if (sort === "asc") {
      dispatch(sortCardAsc());
    }
  }, [sort, dispatch, search]);

  const cardPostPage = 5;
  const totalCards = cards.length;

  const indexOfLastCard = currentPage * cardPostPage;
  const indexOfFirstCard = indexOfLastCard - cardPostPage;
  const filterCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      <div className="form-group select-wrapper">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="form-control mt-4"
        >
          <option value="">Order by</option>
          <option value="asc">Most Voted </option>
          <option value="desc">Less Voted</option>
        </select>
      </div>
      <div className="search">
        <input
          className="form-control mb-4"
          type="text"
          placeholder="Search"
          onChange={handleChangeSearch}
        />
      </div>
      {filterCards.map((item) => (
        <CardDetail item={item} key={item.id} />
      ))}
      {totalCards > cardPostPage && (
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCards={totalCards}
          cardPostPage={cardPostPage}
        />
      )}
    </>
  );
}

export default ListCard;
