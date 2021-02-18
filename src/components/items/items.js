import React, { useState } from "react";
import "./items.css";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import AddItem from "../addItems/addItem";
import Item from "./item/item";

function Items(props) {
  const [showModal, setShowModal] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const searchString = useSelector((state) => state.cart.searchString);

  let filteredCart = cart;
  if (searchString.length) {
    filteredCart = filteredCart.filter(
      (cartItem) =>
        cartItem.title.toUpperCase().indexOf(searchString.toUpperCase()) >= 0 ||
        cartItem.description.toUpperCase().indexOf(searchString.toUpperCase) >=
          0
    );
  }

  return (
    <div className="containers">
      <div className="divClass">
        <div style={{ padding: "10px" }}>
          <AddIcon
            style={{ color: "blue", fontSize: "60", float: "right" }}
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>

        {showModal && <AddItem open={showModal} setOpen={setShowModal} />}

        <h3>ITEMS</h3>
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "10px" }}>
          {filteredCart.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;
