import { createSlice } from '@reduxjs/toolkit';

// this is to define the initial state of users
const initialState = {
  users: [],
};

// this is to create the reducer function (by calling the createSlice from react redux). It accepts the state and the action as args
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// to define the actions
export const { fetchUsers, addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
