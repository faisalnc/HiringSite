import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  title: string;
  description: string;
}

const initialState: UserState = {
  name: "Faisal Nazib",
  title: "Web Designer & Developer Enthusiast",
  description:
    "I create modern digital experiences to help brands thrive online.",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
