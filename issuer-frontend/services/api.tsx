import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

export const signUpUser = async (email: string, password: string) => {
  try {
    const { data } = await Axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
      {
        email: email,
        password: password,
      }
    );
    console.dir(data);
    if (data?.success) {
      toast.success("Sign-up successful! Please sign-in now!");
      return true;
    }
  } catch (err) {
    toast.error("Sign-up failed, retry again!");
    console.error(err);
    return false;
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const { data } = await Axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`,
      {
        email: email,
        password: password,
      }
    );
    console.dir(data);
    if (data?.success) {
      localStorage.setItem("token", data?.token);
      toast.success("Sign-in successful!");
      return true;
    }
  } catch (err) {
    toast.error("Sign-in failed, retry again!");
    console.error(err);
    return false;
  }
};
