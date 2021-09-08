import { createSlice } from "@reduxjs/toolkit";

const falseSlice = createSlice({
  name: "falseItems",
  initialState: { falseList: [] },
  reducers: {
    addItem(state, action) {
      state.falseList.push(action.payload);
    },
    removeItem(state, action) {
      const deleteItem = state.falseList.find(
        (item) => item.ArtikelNr === action.payload
      );
      const indexItem = state.falseList.indexOf(deleteItem);
      state.falseList.splice(indexItem, 1);
    },
  },
});

export const falseActions = falseSlice.actions;
export default falseSlice;
