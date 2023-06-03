import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const DataSlice = createSlice({
  name: "event",
  initialState: {},
  reducer: {
    search: (state, action) => {},
  },
});
export default DataSlice;
