import {
  signupFailure,
  signupStart,
  signupSuccess,
} from "../reducers/authSlice";
import store from "../store";
const dispatch = store.dispatch;

export const createUser = async (body: any) => {
  dispatch(signupStart());
  try {
    const result = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await result.json();
    console.log(data);

    result.ok ? dispatch(signupSuccess(data)) : dispatch(signupFailure(data));
  } catch (error) {
    console.error(error);
  }
};
