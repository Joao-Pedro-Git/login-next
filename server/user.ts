"use server";

import { auth } from "@/lib/auth";

export const signIn = async ({
  email,
  senha,
}: {
  email: string;
  senha: string;
}) => {
  return await auth.api.signInEmail({
    body: { email, password: senha },
  });
};

export const signUp = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  await auth.api.signUpEmail({
    body: { email, password, name },
  });
};
