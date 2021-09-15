import { configureStore } from "@reduxjs/toolkit";
import falseSlice from "./falseItems";

import loginSlice from "./login-slice";
import profileSlice from "./profile";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    false: falseSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export default store;
