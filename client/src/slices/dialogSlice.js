// dialogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDialogOpen: false,
  selectedUser: null,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
      openDialog: (state, action) => {
          state.isDialogOpen = true;
          state.selectedUser = action.payload; // Ensure `action.payload` is the user object
      },
      closeDialog: (state) => {
          state.isDialogOpen = false;
          state.selectedUser = null;
      },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;




