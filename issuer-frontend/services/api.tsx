import React from "react";
import Axios from "axios";
export const signUpUser = async (email: string, password: string) => {
  try {
    const { data } = await Axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`,
      {
        email: email,
        password: password,
      }
    );
    console.dir(data);
  } catch (err) {
    console.error(err);
  }
};
