import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  submitting: boolean;
  success: boolean;
  error: string | null;
}

const initialState: FormState = {
  submitting: false,
  success: false,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    startSubmit(state) {
      state.submitting = true;
      state.success = false;
      state.error = null;
    },
    submitSuccess(state) {
      state.submitting = false;
      state.success = true;
    },
    submitFailure(state, action: PayloadAction<string>) {
      state.submitting = false;
      state.error = action.payload;
    },
    resetFormState(state) {
      state.success = false;
      state.error = null;
    },
  },
});

export const { startSubmit, submitSuccess, submitFailure, resetFormState } = formSlice.actions;
export default formSlice.reducer;
