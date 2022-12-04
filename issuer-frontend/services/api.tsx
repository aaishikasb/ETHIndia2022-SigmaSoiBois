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
        },
      }
    );
    console.dir(data);
    if (data?.success) {
      localStorage.setItem(
        "token",
        (headers as any).toJSON(true)["x-refresh-token"]
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

export const listAllSchema = async () => {
  try {
    const token = localStorage.getItem("token");
    const { data, headers } = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/schema/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.dir(data);
    if (data?.success) {
      localStorage.setItem(
        "token",
        (headers as any).toJSON(true)["x-refresh-token"]
      );
      toast.success("Schemas fetched successfully!");
      return data?.allSchemas;
    }
  } catch (err) {
    toast.error("Schema fetching failed, retry again!");
    console.error(err);
    return [];
  }
};

export const createOffer = async (
  schemaId: string,
  discordId: string,
  attributes: string
) => {
  try {
    const token = localStorage.getItem("token");
    const { data, headers } = await Axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/schema/offer/${schemaId}`,
      {
        schemaId: schemaId,
        discordId: discordId,
        attributes: attributes,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.dir(data);
    if (data?.success) {
      localStorage.setItem(
        "token",
        (headers as any).toJSON(true)["x-refresh-token"]
      );
      toast.success("Offer has been generated and sent to user!");
      return true;
    }
  } catch (err) {
    toast.error("Offer creation failed, retry again!");
    console.error(err);
    return false;
  }
};
