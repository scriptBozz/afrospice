import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { productActions } from "../redux/slices/product";
import { Product } from "../types/type";

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Favourites() {
  const favourites = useSelector(
    (state: RootState) => state.products.favourites
  );
  const dispatch = useDispatch();
  const removeFavourite = (item: Product) => {
    dispatch(productActions.removeFromFavourites(item));
  };

  return (
    <Fragment>
      <div className="margin"></div>
      <div className="favourites card">
        {favourites.map((item) => (
          <div key={item._id} className="favourite-item">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                alt="img"
                src={item.image}
                style={{ width: 50, height: 50 }}
              />
              {item.title}
            </div>
            <div>{item.price}</div>

            <Button
              sx={{ bgcolor: "#FF8000", color: "#000000" }}
              startIcon={<DeleteIcon />}
              onClick={() => {
                removeFavourite(item);
              }}
            >
              remove
            </Button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
