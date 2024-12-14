import { createStore } from "redux";
import { counterReducer } from "./reducers/CounterReducer.js";

export const store = createStore(counterReducer);
