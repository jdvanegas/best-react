import { createContext, useContext } from "react";
import { GlobalContent } from "../models/global";

export const AuthContext = createContext<any>(null);

export const useAuth = (): GlobalContent => {
  return useContext(AuthContext);
};
