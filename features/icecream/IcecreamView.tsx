// import { useSelector } from "react-redux";

import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, reStocked } from "./icecreamSlice";
// import { useDispatch } from "react-redux";
function IcecreamView() {
  const numberOfIcecream = useAppSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>no of Icecream- {numberOfIcecream} </h1>
      <button onClick={() => dispatch(ordered())}>Order of Icecream</button>
      <button onClick={() => dispatch(reStocked(1))}>Restock Icecream</button>
    </div>
  );
}
export default IcecreamView;
