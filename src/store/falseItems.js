import { createSlice } from "@reduxjs/toolkit";

const falseSlice = createSlice({
  name: "falseItems",
  initialState: { falseList: [] },
  reducers: {
    addItem(state, action) {
      state.falseList.push(action.payload);
    },
  },
});

export const falseActions = falseSlice.actions;
export default falseSlice;
