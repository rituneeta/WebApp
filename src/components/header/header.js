import React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../actions/cartActions";

function Header(props) {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.cart.searchString);

  return (
    <div className="header">
      <input
        className="search"
        placeholder="Search"
        value={searchString}
        onChange={(e) => dispatch(cartActions.setSearchString(e.target.value))}
      />
    </div>
  );
}

export default Header;
