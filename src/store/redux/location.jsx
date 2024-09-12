import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "myLocation",
  initialState: {
    loc: { lon: null, lat: null },
    districts: [],
  },
  reducers: {
    setLoc(state, action) {
      state.loc = action.payload;
    },
    setDistricts(state, action) {
      state.districts = action.payload.sort((a, b) =>
        a.ED_ENGLISH > b.ED_ENGLISH ? 1 : -1
      );
    },
  },
});

const store = configureStore({
  reducer: { location: locationSlice.reducer },
});
export const locAction = locationSlice.actions;

export default store;