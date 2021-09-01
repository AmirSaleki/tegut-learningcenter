import { configureStore } from "@reduxjs/toolkit";
import falseSlice from "./falseItems";

import loginSlice from "./login-slice";

const store = configureStore({
  reducer: { login: loginSlice.reducer, false: falseSlice.reducer },
});

export default store;
