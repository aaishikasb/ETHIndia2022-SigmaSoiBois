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

export const createSchema = async (
  schema: string,
  mandatoryExpiration: string,
  attributes: string
) => {
  try {
    const token = localStorage.getItem("token");
    const { data, headers } = await Axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/schema/create`,
      {
        schema: schema,
        mandatoryExpiration: mandatoryExpiration,
        attributes: attributes,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Expose-Headers": "X-Refresh-Token",
        },
      }
    );
    console.dir(data);
    console.dir((headers as any).toJSON(true));
    if (data?.success) {
      localStorage.setItem(
        "token",
        (headers as any).get("x-refresh-token", true)
      );
      toast.success(data?.message);
      return true;
    }
  } catch (err) {
    toast.error("Schema creation failed, retry again!");
    console.error(err);
    return false;
  }
};
