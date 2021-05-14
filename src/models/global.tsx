import { User } from "./user";

export type Nullable<T> = T | null;

export type GlobalContent = {
  user: Nullable<User>;
  isAuthenticated: boolean;
  signin: (email: string, password: string, cb?: () => void) => void;
  signup: (user: User) => User;
  signout: () => void;
  sendPasswordResetEmail: (email: string) => void;
  confirmPasswordReset: (code: string, password: string) => boolean;
};
