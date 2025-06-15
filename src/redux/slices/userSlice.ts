import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  title: string;
  description: string;
}

const initialState: UserState = {
  name: "Faisal Nazib",
  title: "Aspiring Cyber Security Analyst",
  description: "Aspiring cybersecurity professional with a strong foundation in IT, passionate about securing digital systems and building modern web applications.",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
