import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userSatte {
  isLoggedIn: boolean;
  lastLogin: string;
  phoneNumber: string;
}

const initialState: userSatte = {
  isLoggedIn: !!localStorage.getItem("isLoggedIn") || false,
  lastLogin: !!localStorage.getItem("isLoggedIn")
    ? new Date().toUTCString()
    : "",
  phoneNumber: localStorage.getItem("phone") || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        phoneNumber: string;
        lastLogin: string;
      }>
    ) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.lastLogin = action.payload.lastLogin;
      state.isLoggedIn = true;
      localStorage.setItem("phone", state.phoneNumber);
      localStorage.setItem("isLoggedIn", state.isLoggedIn.toString());
    },
    userLogin: (state) => {
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, userLogout, userLogin } = userSlice.actions;

export default userSlice.reducer;
