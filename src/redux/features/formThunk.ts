import { AppDispatch } from "../store";
import { startSubmit, submitSuccess, submitFailure } from "../slices/formSlice";

export const submitForm =
  (formData: { name: string; email: string; message: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(startSubmit());

      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      dispatch(submitSuccess());
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(submitFailure(err.message));
      } else {
        dispatch(submitFailure("Something went wrong"));
      }
    }
  };
