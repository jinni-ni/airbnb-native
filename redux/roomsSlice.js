import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  },
  reducers: {
    setExploreRooms(state, action) {
      const { explore } = state;
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        payload.rooms.forEach((payloadRoom) => {
          const exists = explore.rooms.find(
            (saveRoom) => saveRoom.id === payloadRoom.id
          );
          if (!exists) {
            explore.rooms.push(payloadRoom);
          }
        });
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
  },
});

export const { setExploreRooms, increasePage } = roomSlice.actions;

export const getRooms = (page) => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.rooms(page);
    dispatch(
      setExploreRooms({
        rooms: results,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomSlice.reducer;
