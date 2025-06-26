import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  title: string;
  description: string;
}

const initialState: UserState = {
  name: "Faisal Nazib",
  title: "Aspiring Cyber Security Analyst",
  description: "No description.",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
