import { post, get } from "../apis/core-api";
import { Result } from "../models/types";
import { User, UserSignin, UserSignup } from "../models/user";

export const login = async ({ email, password }: UserSignin): Promise<Result<User>> =>
  await post("user/login", { email, password });

export const getData = async (): Promise<User> => {
  const { data } = await get("user");
  return data;
};

export const register = async (user: UserSignup): Promise<Result<User>> => {
  return await post("user", user);
};
