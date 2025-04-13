import React from "react";
// import { useSelector,useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered,reStocked } from "./cakeSlice";
function CakeView() {
const numberOfCakes= useAppSelector((state) => state.cake.numberOfCakes);
const dispatch= useAppDispatch();  
return (
  <div>
    <h1>no of cakes-{numberOfCakes}</h1>
    <button onClick={() => dispatch(ordered())}>Order of cake</button>
    <button onClick={() => dispatch(reStocked(1))}>Restock cakes</button>
  </div>
);
}

export default CakeView;
