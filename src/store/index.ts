import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "../reducers";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk, logger],
});

export default store;
