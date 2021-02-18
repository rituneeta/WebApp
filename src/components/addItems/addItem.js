import React, { useState } from "react";
import "./addItem.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { cartActions } from "../../actions/cartActions";

function AddItem(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  return (
    <Dialog open={props.open} aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ color: "blue" }} id="draggable-dialog-title">
        Add the Items
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <input
            className="input"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="input"
            placeholder="Enter the Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.setOpen(false)}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(
              cartActions.addCartItems({
                title: title,
                description: description,
              })
            );
            props.setOpen(false);
          }}
          variant="contained"
          color="secondary"
        >
          ADD
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItem;
