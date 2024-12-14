import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNum,
  reduceNum,
  restCounter,
} from "../store/actions/CounterActions.js";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter); // Access the todos from Redux store

  return (
    <div>
      <button onClick={() => dispatch(addNum())}>+</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(reduceNum())}>-</button>
      <button onClick={() => dispatch(restCounter())}>rest counter</button>
    </div>
  );
}

export default Counter;
