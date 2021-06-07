import { User, UserSignup } from "./user";

export type Nullable<T> = T | null;

export type GlobalContent = {
  user: Nullable<User>;
  isAuthenticated: boolean;
  isAdmin: boolean;
  signin: (email: string, password: string, cb?: () => void) => void;
  signup: (user: UserSignup, cb?: () => void) => void;
  signout: () => void;
};

export type Result<T> = {
  data: T;
  errors: string[];
  status: boolean;
};
