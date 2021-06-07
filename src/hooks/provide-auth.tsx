import { useEffect, useState } from "react";
import { notify } from "../helpers/functions";
import { GlobalContent, Nullable } from "../models/types";
import { User, UserSignup } from "../models/user";
import { login, getData, register } from "../services/user-service";

export const useProvideAuth = (): GlobalContent => {
  const [user, setUser] = useState<Nullable<User>>(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email: string, password: string, cb?: () => void) => {
    const { data, status } = await login({ email, password });
    if (status) {
      setUser(data);
      localStorage.setItem("token", data.token);
      if (cb) cb();
    } else notify.error("Error al iniciar sesión");
  };

  const signup = async (user: UserSignup, cb?: () => void) => {
    const { data, status } = await register(user);
    if (status) {
      setUser(data);
      localStorage.setItem("token", data.token);
      if (cb) cb();
    } else notify.error("Error al crear la cuenta");
  };

  const signout = () => {
    localStorage.removeItem("token");
    return setUser(null);
  };

  useEffect(() => {
    if (user === null) {
      const token = localStorage.getItem("token");
      if (token) {
        getData().then((data) => {
          setUser(data);
        });
      }
    }
  }, [user]);

  // Return the user object and auth methods
  return {
    user,
    isAuthenticated: user !== null,
    isAdmin: user !== null && ["admin", "store"].includes(user.roleName),
    signin,
    signup,
    signout,
  };
};
