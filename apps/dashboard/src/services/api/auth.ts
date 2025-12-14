"use server";

import supabase from "../supabase";

type props = {
  email: string;
  password: string;
};

export async function login({ email, password }: props) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
